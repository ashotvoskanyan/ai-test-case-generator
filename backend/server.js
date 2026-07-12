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
      error: "Failed to generate QA output.",
    });
  }
});

function buildPrompt(workflow, input) {
  if (workflow === "test-cases") {
    return `You are a QA engineer.

Generate structured QA test cases for this requirement.

Include:
- Requirement Summary
- Assumptions
- Positive Test Cases
- Negative Test Cases
- Edge Cases
- Clarifying Questions

Requirement:
${input}`;
  }

  if (workflow === "bug-report") {
    return `You are a QA engineer.

Turn this issue description into a structured bug report.

Include:
- Title
- Environment
- Steps to Reproduce
- Actual Result
- Expected Result
- Severity
- Priority
- Additional Notes

Issue Description:
${input}`;
  }

  if (workflow === "api-tests") {
    return `You are a QA engineer.

Generate structured API test cases for this API description.

Include:
- API Summary
- Assumptions
- Positive API Test Cases
- Negative API Test Cases
- Edge Cases
- Security Checks
- Clarifying Questions

API Description:
${input}`;
  }

  return `You are a QA engineer. Generate QA documentation for this input:

${input}`;
}

app.listen(port, function () {
  console.log(`Backend server is running on http://localhost:${port}`);
});