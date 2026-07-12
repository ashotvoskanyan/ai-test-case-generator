# API Testing Output Scoring

This file defines a simple scoring system for evaluating AI-generated API testing documentation.

The goal is to check whether the API test cases are clear, realistic, complete, and useful for real QA work.

## Scoring Scale

Each criterion is scored from 1 to 5.

~~~text
1 = Poor
2 = Weak
3 = Acceptable
4 = Good
5 = Excellent
~~~

Maximum score: **25 points**

## Criteria

| Criterion | Description | Score |
|---|---|---|
| API Understanding | Does the AI correctly understand the endpoint, method, request body, and expected behavior? | 1-5 |
| Status Code Accuracy | Are the expected status codes realistic and appropriate for each scenario? | 1-5 |
| Test Coverage | Does the output include positive, negative, edge, and security test cases? | 1-5 |
| Request and Response Clarity | Are request bodies and expected responses clear and practical? | 1-5 |
| Security Awareness | Does the output check for sensitive data exposure, invalid tokens, unsafe responses, or other basic API security risks? | 1-5 |

## Score Meaning

| Total Score | Meaning |
|---|---|
| 21-25 | Strong API testing output |
| 16-20 | Good output, but needs improvement |
| 11-15 | Basic output, needs more work |
| 6-10 | Weak output |
| 1-5 | Poor output |

## Example Evaluation

Example file: `api-testing/login-api.md`

| Criterion | Score | Notes |
|---|---:|---|
| API Understanding | 5 | The output correctly understands that `/login` uses email and password to return an authentication token. |
| Status Code Accuracy | 4 | Uses realistic status codes such as 200, 400, and 401. Some APIs may use 422 for validation errors, so this should be confirmed. |
| Test Coverage | 5 | Includes positive, negative, edge, and security scenarios. |
| Request and Response Clarity | 5 | Request bodies and expected responses are clear and easy to review. |
| Security Awareness | 5 | Checks that passwords are not exposed, tokens are only returned on success, and error messages do not reveal whether an email exists. |

## Example Total

~~~text
24 / 25
~~~

## Notes

This scoring system is simple on purpose.

It helps compare API testing outputs and decide whether the AI-generated documentation is good enough to keep, improve, or replace.

The score should not replace human review. API behavior depends on real product requirements, backend rules, and team standards.
