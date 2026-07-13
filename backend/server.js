import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.json({
    message: "AI Test Case Generator backend is running.",
  });
});

app.get("/health", function (req, res) {
  res.json({
    status: "ok",
    service: "AI Test Case Generator backend",
    timestamp: new Date().toISOString(),
  });
});

app.post("/generate", async function (req, res) {
  try {
    const { workflow, input } = req.body;

    if (!workflow || !input) {
      return res.status(400).json({
        error: "Workflow and input are required.",
      });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.json({
        output: buildFallbackOutput(workflow, input),
        mode: "fallback",
        warning: "OpenAI API key is missing. Showing demo output instead.",
      });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = buildPrompt(workflow, input);

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
    });

    res.json({
      output: response.output_text,
      mode: "ai",
    });
  } catch (error) {
    console.error("OpenAI API error:", error);

    const { workflow, input } = req.body;

    res.json({
      output: buildFallbackOutput(workflow, input),
      mode: "fallback",
      warning: error.message || "OpenAI API failed. Showing demo output instead.",
    });
  }
});

function buildPrompt(workflow, input) {
  const baseRules = `General rules:
- Do not use conversational phrases.
- Do not say "Certainly", "Here is", or "Let me know".
- Do not add a closing assistant message.
- Do not wrap the answer in a code block.
- Do not start the answer with \`\`\`markdown.
- Do not end the answer with \`\`\`.
- Use Markdown headings, tables, and bullet points directly.
- Use clear QA documentation format.
- Keep assumptions realistic.
- If information is missing, add it to Clarifying Questions.
- Do not invent exact product rules unless they are provided.
- Classify test cases carefully: success scenarios are Positive, failure scenarios are Negative, unusual boundary scenarios are Edge.`;

  if (workflow === "test-cases") {
    return `You are a QA engineer.

Generate structured QA test cases for this requirement.

${baseRules}

Required sections:
1. Requirement Summary
2. Assumptions
3. Test Cases
4. Edge Cases
5. Clarifying Questions

Test Cases table columns:
- Test Case ID
- Type
- Test Level
- Title
- Preconditions
- Steps
- Expected Result
- Priority
- Severity
- Status

Allowed Type values:
- Positive
- Negative
- Edge

Allowed Test Level values:
- UI
- Functional
- Validation
- Security
- Usability

Allowed Priority values:
- High
- Medium
- Low

Allowed Severity values:
- Critical
- Major
- Minor

Allowed Status values:
- Draft
- Ready

Requirement:
${input}`;
  }

  if (workflow === "bug-report") {
    return `You are a QA engineer.

Turn this issue description into a structured bug report.

${baseRules}

Required sections:
1. Bug Summary
2. Environment
3. Preconditions
4. Steps to Reproduce
5. Actual Result
6. Expected Result
7. Severity
8. Priority
9. Additional Notes
10. Clarifying Questions

Issue Description:
${input}`;
  }

  if (workflow === "api-tests") {
    return `You are a QA engineer.

Generate structured API test cases for this API description.

${baseRules}

Required sections:
1. API Summary
2. Assumptions
3. API Test Cases
4. Security Checks
5. Clarifying Questions

API Test Cases table columns:
- Test Case ID
- Type
- Endpoint
- Method
- Request Body
- Expected Status Code
- Expected Response
- Priority
- Severity
- Notes

Allowed Type values:
- Positive
- Negative
- Edge
- Security

API Description:
${input}`;
  }

  return `You are a QA engineer.

${baseRules}

Generate structured QA documentation for this input:

${input}`;
}

function buildFallbackOutput(workflow, input) {
  if (workflow === "test-cases") {
    return `Fallback Demo Mode

# 1. Requirement Summary

The system should support the requested user action based on the provided requirement.

# 2. Assumptions

- The user can access the application.
- Required input fields are available.
- The system validates user input.
- Success and error messages are displayed clearly.

# 3. Test Cases

| Test Case ID | Type | Test Level | Title | Preconditions | Steps | Expected Result | Priority | Severity | Status |
|---|---|---|---|---|---|---|---|---|---|
| TC001 | Positive | Functional | Complete action with valid data | User is on the correct page | 1. Enter valid data 2. Submit the form | Action is completed successfully | High | Major | Draft |
| TC002 | Negative | Validation | Submit empty required fields | User is on the correct page | 1. Leave required fields empty 2. Submit the form | Validation errors are displayed | High | Major | Draft |
| TC003 | Edge | Usability | Submit unexpected characters | User is on the correct page | 1. Enter unexpected characters 2. Submit the form | System handles input safely | Medium | Minor | Draft |

# 4. Edge Cases

- User refreshes the page during the action.
- User submits very long input values.
- User submits input with leading or trailing spaces.
- Network interruption occurs during submission.

# 5. Clarifying Questions

- What validation rules should apply?
- What should happen after successful completion?
- Are there any security or rate limiting requirements?

Original Input:
${input}`;
  }

  if (workflow === "bug-report") {
    return `Fallback Demo Mode

# 1. Bug Summary

An issue was reported based on the provided description.

# 2. Environment

- Environment: Not provided
- Browser: Not provided
- Device: Not provided
- User role: Not provided

# 3. Preconditions

- User can access the affected feature.
- The issue can be reproduced in the application.

# 4. Steps to Reproduce

1. Open the application.
2. Navigate to the affected feature.
3. Perform the action described in the issue.
4. Observe the result.

# 5. Actual Result

The application does not behave as expected.

# 6. Expected Result

The application should complete the action correctly or display a clear validation message.

# 7. Severity

Medium

# 8. Priority

Medium

# 9. Additional Notes

This is fallback demo output because the AI API was unavailable.

# 10. Clarifying Questions

- What browser and device were used?
- Is the issue reproducible every time?
- Are there screenshots, logs, or error messages?

Original Issue Description:
${input}`;
  }

  if (workflow === "api-tests") {
    return `Fallback Demo Mode

# 1. API Summary

The endpoint should process valid requests, reject invalid requests, and return clear responses.

# 2. Assumptions

- The API uses JSON request and response bodies.
- Required fields must be validated.
- Unauthorized access should be rejected.
- Sensitive data should not be exposed.

# 3. API Test Cases

| Test Case ID | Type | Endpoint | Method | Request Body | Expected Status Code | Expected Response | Priority | Severity | Notes |
|---|---|---|---|---|---|---|---|---|---|
| API-TC001 | Positive | Not provided | Not provided | Valid request body | 200 or 201 | Success response | High | Major | Confirm exact status code |
| API-TC002 | Negative | Not provided | Not provided | Missing required fields | 400 | Validation error | High | Major | Required fields need confirmation |
| API-TC003 | Security | Not provided | Not provided | Unauthorized request | 401 or 403 | Access denied | High | Critical | Confirm authentication rules |

# 4. Security Checks

- Verify unauthorized requests are rejected.
- Verify sensitive data is not exposed.
- Verify invalid input is handled safely.
- Verify error messages do not reveal internal system details.

# 5. Clarifying Questions

- What is the endpoint path?
- What HTTP method should be used?
- What fields are required?
- What status codes are expected?

Original API Description:
${input}`;
  }

  return `Fallback Demo Mode

Structured QA documentation could not be generated by the AI API.

Original Input:
${input}`;
}

app.listen(port, function () {
  console.log(`Backend server is running on http://localhost:${port}`);
});