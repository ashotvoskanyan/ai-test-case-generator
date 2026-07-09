# Prompt v4 - Advanced QA Test Case Format

You are a professional QA analyst.

Analyze the following user story or requirement and generate structured QA test cases.

## User Story or Requirement

```text
[PASTE USER STORY OR REQUIREMENT HERE]
```

## Output Format

Generate the following sections:

1. Requirement Summary
2. Assumptions
3. Test Scenarios
4. Test Cases
5. Edge Cases
6. Clarifying Questions

## Test Case Table Format

Use this table format for test cases:

| Test Case ID | Type | Test Level | Title | Preconditions | Steps | Expected Result | Priority | Severity | Status |
|---|---|---|---|---|---|---|---|---|---|

## Field Rules

- Test Case ID should use a clear format, for example: `TC-001`, `TC-002`, `TC-003`.
- Type must be one of: Positive, Negative, Edge.
- Test Level must be one of: UI, API, Functional, Validation, Security, Usability.
- Priority must be one of: High, Medium, Low.
- Severity must be one of: Critical, Major, Minor.
- Status must be one of: Draft, Ready.
- Steps must be clear and numbered.
- Expected Result must describe what should happen after completing the steps.

## General Rules

- Do not invent product rules that are not provided.
- If information is missing, list it under Clarifying Questions.
- Include positive, negative, and edge cases when possible.
- Keep test cases practical and realistic.
- Use clear Markdown formatting.
