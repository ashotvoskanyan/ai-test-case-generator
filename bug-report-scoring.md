# Bug Report Quality Scoring

This file defines how to evaluate the quality of AI-generated bug reports.

## Scoring Criteria

Rate each AI-generated bug report from 1 to 5.

| Criteria | Description | Score |

|---|---|---|

| Bug Title Clarity | Is the bug title short, specific, and understandable? | 1-5 |

| Reproduction Steps | Are the steps clear enough for another tester or developer to reproduce the issue? | 1-5 |

| Actual vs Expected Result | Does the report clearly explain what happened and what should have happened? | 1-5 |

| Severity and Priority | Are severity and priority reasonable based on the issue? | 1-5 |

| Missing Information Handling | Does the report clearly list missing details instead of inventing them? | 1-5 |

## Total Score

Maximum score: 25

## Score Meaning

- 21-25: Strong bug report

- 16-20: Good but needs improvement

- 11-15: Weak bug report

- 1-10: Poor bug report

## Example Evaluation

Prompt Version: Bug Report Prompt v1

Issue Description:

When I enter the correct email and password, I see an error message and cannot log in.

| Criteria | Score | Notes |

|---|---:|---|

| Bug Title Clarity | 5 | The title clearly describes the login issue |

| Reproduction Steps | 4 | Steps are clear, but test environment is missing |

| Actual vs Expected Result | 5 | Actual and expected results are clearly separated |

| Severity and Priority | 4 | Major/High is reasonable for login failure |

| Missing Information Handling | 5 | Missing environment, browser, error message, and logs are listed |

Total Score: 23/25

Conclusion:

Bug Report Prompt v1 produces a strong first bug report, but more environment details are needed for real debugging.