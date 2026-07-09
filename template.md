# # Reusable QA Prompt Template

You are a professional QA analyst.

Analyze the following user story or product requirement and generate structured QA testing documentation.

## Input

[PASTE USER STORY OR REQUIREMENT HERE]

## Output Format

Generate the following sections:

1. Requirement Summary

2. Assumptions

3. Test Scenarios

4. Positive Test Cases

5. Negative Test Cases

6. Edge Cases

7. Clarifying Questions

Each test case must include:

- Test Case ID

- Title

- Preconditions

- Test Steps

- Expected Result

- Priority

## Rules

- Use clear Markdown formatting.

- Do not invent product features that are not mentioned in the input.

- If something is unclear, add it to Clarifying Questions.

- Keep test cases practical and realistic.

- Focus on user-facing behavior.