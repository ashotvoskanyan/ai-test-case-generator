# Prompt v3 - Test Case Table Format

You are a professional QA analyst.

Analyze the following user story and generate structured QA testing documentation.

## User Story

As a user, I want to log in with my email and password so that I can access my account.

## Output Sections

Generate:

1. Requirement Summary

2. Assumptions

3. Test Scenarios

4. Test Cases

5. Edge Cases

6. Clarifying Questions

## Test Case Table Format

For the Test Cases section, use a Markdown table with these columns:

| Test Case ID | Type | Title | Preconditions | Steps | Expected Result | Priority | Severity |

|---|---|---|---|---|---|---|---|

## Rules

- Test Case ID format: TC-001, TC-002, TC-003

- Type must be one of: Positive, Negative, Edge

- Priority must be one of: High, Medium, Low

- Severity must be one of: Critical, Major, Minor

- Keep steps short and clear

- Do not invent product features that are not mentioned in the user story

- If something is unclear, add it to Clarifying Questions

- Use clear Markdown formatting