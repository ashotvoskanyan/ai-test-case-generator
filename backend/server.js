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

app.post("/generate", async function (req, res) {
  try {
    const { workflow, input } = req.body;

    if (!workflow || !input) {
      return res.status(400).json({
        error: "Workflow and input are required.",
      });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        error: "OpenAI API key is missing. Add OPENAI_API_KEY to your .env file.",
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
    });
  } catch (error) {
    console.error("OpenAI API error:", error);

    res.status(500).json({
      error: error.message || "Failed to generate QA output.",
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

app.listen(port, function () {
  console.log(`Backend server is running on http://localhost:${port}`);
});