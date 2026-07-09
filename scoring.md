# Prompt Quality Scoring

This file defines how to evaluate the quality of AI-generated QA documentation.

## Scoring Criteria

Rate each AI output from 1 to 5.

| Criteria | Description | Score |
|---|---|---|
| Requirement Understanding | Does the output correctly understand the user story? | 1-5 |
| Test Coverage | Does the output cover positive, negative, and edge cases? | 1-5 |
| Clarity | Are the test cases easy to read and execute? | 1-5 |
| Structure | Does the output follow the requested format? | 1-5 |
| Practical Value | Would this be useful for a real QA task? | 1-5 |

## Total Score

Maximum score: 25

## Score Meaning

- 21-25: Strong output
- 16-20: Good but needs improvement
- 11-15: Weak output
- 1-10: Poor output

## Example Evaluation

Prompt Version: v3

User Story:
As a user, I want to log in with my email and password so that I can access my account.

| Criteria | Score | Notes |
|---|---:|---|
| Requirement Understanding | 5 | Correctly identifies email/password login |
| Test Coverage | 5 | Includes positive, negative, and edge cases |
| Clarity | 4 | Mostly clear, some steps could be more specific |
| Structure | 5 | Uses the requested table format |
| Practical Value | 4 | Useful for a real QA task, but still needs product-specific details |

Total Score: 23/25

Conclusion:
Prompt v3 produces a strong QA output.
