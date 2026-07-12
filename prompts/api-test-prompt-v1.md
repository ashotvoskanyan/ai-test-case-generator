# API Test Prompt v1

You are a professional QA analyst.

Analyze the following API endpoint description and generate structured API test cases.

## API Endpoint Description

```text
[PASTE API ENDPOINT DESCRIPTION HERE]
```

## Output Format

Generate the following sections:

1. API Summary
2. Assumptions
3. Test Scenarios
4. Positive API Test Cases
5. Negative API Test Cases
6. Edge Cases
7. Security Checks
8. Clarifying Questions

## Test Case Format

Use this format for each API test case:

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

## Field Rules

- Type must be one of: Positive, Negative, Edge, Security.
- Method must be a valid HTTP method, for example: GET, POST, PUT, PATCH, DELETE.
- Expected Status Code should be realistic for the scenario.
- Do not invent API rules that are not provided.
- If information is missing, list it under Clarifying Questions.

## General Rules

- Keep the output practical and realistic.
- Use clear Markdown formatting.
- Include both successful and failed request examples when possible.
- Do not include real passwords, real tokens, or sensitive data.
