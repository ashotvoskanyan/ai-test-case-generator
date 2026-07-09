# Bug Report Scoring

This file defines a simple scoring system for evaluating AI-generated bug reports.

The goal is to check whether the bug report is clear, complete, realistic, and useful for real QA work.

## Scoring Scale

Each criterion is scored from 1 to 5.

```text
1 = Poor
2 = Weak
3 = Acceptable
4 = Good
5 = Excellent
```

Maximum score: **25 points**

## Criteria

| Criterion | Description | Score |
|---|---|---|
| Bug Title Clarity | Is the bug title short, specific, and easy to understand? | 1-5 |
| Reproduction Steps | Are the steps numbered, clear, and realistic? | 1-5 |
| Actual vs Expected Result | Are the actual and expected results clearly separated? | 1-5 |
| Severity and Priority | Are severity and priority reasonable for the issue? | 1-5 |
| Missing Information Handling | Does the report clearly list missing details instead of inventing them? | 1-5 |

## Score Meaning

| Total Score | Meaning |
|---|---|
| 21-25 | Strong bug report |
| 16-20 | Good bug report, but needs improvement |
| 11-15 | Basic bug report, needs more work |
| 6-10 | Weak bug report |
| 1-5 | Poor bug report |

## Example Evaluation

Example file: `bug-reports/login-error.md`

| Criterion | Score | Notes |
|---|---:|---|
| Bug Title Clarity | 5 | The title clearly explains the issue. |
| Reproduction Steps | 4 | Steps are clear, but exact test data is missing. |
| Actual vs Expected Result | 5 | Actual and expected results are clearly separated. |
| Severity and Priority | 4 | Major severity and high priority are reasonable for a login issue. |
| Missing Information Handling | 5 | Missing information is clearly listed instead of invented. |

## Example Total

```text
23 / 25
```

## Notes

This scoring system helps compare AI-generated bug reports and decide whether the output is good enough for QA documentation.

The goal is not to make the score perfect. The goal is to make the quality of the AI output easier to review.
