# Prompt v3 - QA Test Case Table Format

You are a professional QA analyst.

Analyze the following user story and generate QA test cases in a Markdown table.

## User Story

```text
As a user, I want to log in with my email and password so that I can access my account.
```

## Output Format

Generate:

1. Requirement Summary
2. Assumptions
3. Test Scenarios
4. Test Cases Table
5. Edge Cases
6. Clarifying Questions

## Test Case Table Format

| Test Case ID | Type | Title | Preconditions | Steps | Expected Result | Priority |
|---|---|---|---|---|---|---|

## Rules

- Type must be one of: Positive, Negative, Edge.
- Priority must be one of: High, Medium, Low.
- Steps must be clear and numbered.
- Do not invent product rules that are not provided.
- Use Markdown formatting.
