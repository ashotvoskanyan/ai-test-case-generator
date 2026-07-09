# QA Output Scoring

This file defines a simple scoring system for evaluating AI-generated QA test case documentation.

The goal is to check whether the AI output is clear, complete, practical, and useful for real QA work.

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
| Requirement Understanding | Does the AI correctly understand the user story or requirement? | 1-5 |
| Test Coverage | Does the output include positive, negative, and edge cases? | 1-5 |
| Clarity | Are the test cases easy to read and understand? | 1-5 |
| Structure | Is the output well organized with useful sections or tables? | 1-5 |
| Practical Value | Could a real QA tester use this output as a starting point? | 1-5 |

## Score Meaning

| Total Score | Meaning |
|---|---|
| 21-25 | Strong output |
| 16-20 | Good output, but needs improvement |
| 11-15 | Basic output, needs more work |
| 6-10 | Weak output |
| 1-5 | Poor output |

## Example Evaluation

Example file: `examples/login.md`

| Criterion | Score | Notes |
|---|---:|---|
| Requirement Understanding | 5 | The output correctly understands the login requirement. |
| Test Coverage | 4 | Includes positive, negative, and edge cases. Could include more security cases. |
| Clarity | 5 | Test cases are clear and easy to follow. |
| Structure | 5 | Output is well organized. |
| Practical Value | 4 | Useful starting point for QA work, but still needs product-specific details. |

## Example Total

```text
23 / 25
```

## Notes

This scoring system is simple on purpose.

It helps compare prompt versions and decide whether the AI output is good enough to keep, improve, or replace.
