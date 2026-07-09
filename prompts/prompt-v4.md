# Prompt v4 - Advanced QA Test Case Format

You are a professional QA analyst.

Analyze the following user story or product requirement and generate structured QA testing documentation.

## Input

[PASTE USER STORY OR REQUIREMENT HERE]

## Output Sections

Generate the following sections:

1. Requirement Summary

2. Assumptions

3. Test Scenarios

4. Test Cases

5. Edge Cases

6. Clarifying Questions

## Test Case Table Format

For the Test Cases section, use a Markdown table with these columns:

| Test Case ID | Type | Test Level | Title | Preconditions | Steps | Expected Result | Priority | Severity | Status |

|---|---|---|---|---|---|---|---|---|---|

## Field Rules

- Test Case ID format: TC-001, TC-002, TC-003

- Type must be one of: Positive, Negative, Edge

- Test Level must be one of: UI, API, Functional, Validation, Security, Usability

- Priority must be one of: High, Medium, Low

- Severity must be one of: Critical, Major, Minor

- Status must be one of: Draft, Ready

## General Rules

- Keep steps short and clear.

- Do not invent product features that are not mentioned in the input.

- If something is unclear, add it to Clarifying Questions.

- Focus on user-facing behavior.

- Include security-related cases only when they are relevant to the user story.

- Use clear Markdown formatting.