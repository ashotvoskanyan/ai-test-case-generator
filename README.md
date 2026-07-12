# AI Test Case Generator

AI Test Case Generator is a beginner AI + QA project that turns user stories, product requirements, and issue descriptions into structured QA documentation.

The project started as a manual prompt-based MVP and is being improved step by step toward a simple AI-powered QA assistant.

## Overview

This project uses reusable prompts to generate QA documentation such as:

- Requirement summaries
- Assumptions
- Test scenarios
- Test cases
- Edge cases
- Clarifying questions
- Bug reports
- Prompt quality evaluations

The goal is to practice Manual QA, prompt engineering, AI-assisted testing, GitHub documentation, and basic project structure.

## What This Project Does

The project currently has two main workflows:

1. **Test Case Generator**
  Turns user stories or product requirements into structured QA test cases.
2. **Bug Report Generator**
  Turns issue descriptions into structured bug reports.



## Example Input

```text
As a user, I want to log in with my email and password so that I can access my account.
```



## Example Output

The AI can generate:

- Requirement summary
- Assumptions
- Test scenarios
- Positive test cases
- Negative test cases
- Edge cases
- Clarifying questions



## Skills Demonstrated

This project demonstrates practical beginner-level skills in:

- Manual QA
- Test case design
- Bug report writing
- Requirement analysis
- Prompt engineering
- AI-assisted QA workflows
- Markdown documentation
- Git and GitHub
- Project structure and versioning



## Current Status

Current version: Version 0.4 - API Testing Examples

Completed:

- Manual prompt MVP
- Reusable QA prompt template
- Prompt versions v1-v4
- Example QA outputs for login, registration, password reset, and checkout
- Bug report generator prompt
- Example bug reports for login error and checkout payment failure
- Prompt quality scoring system
- Bug report quality scoring system
- Organized project structure
- GitHub repository with commit history
- API testing prompt
- Login API testing example



## Project Structure

```text

ai-test-case-generator/

├── [README.md](http://README.md)

├── [CHANGELOG.md](http://CHANGELOG.md)

├── [TODO.md](http://TODO.md)

├── [template.md](http://template.md)

├── [scoring.md](http://scoring.md)

├── [bug-report-scoring.md](http://bug-report-scoring.md)

├── [api-testing-scoring.md](http://api-testing-scoring.md)

├── api-testing/

│   ├── [login-api.md](http://login-api.md)

│   └── [registration-api.md](http://registration-api.md)

├── bug-reports/

│   ├── [login-error.md](http://login-error.md)

│   └── [checkout-payment-failure.md](http://checkout-payment-failure.md)

├── examples/

│   ├── [login.md](http://login.md)

│   ├── [registration.md](http://registration.md)

│   ├── [password-reset.md](http://password-reset.md)

│   └── [checkout.md](http://checkout.md)

└── prompts/

    ├── [api-test-prompt-v1.md](http://api-test-prompt-v1.md)

    ├── [bug-report-prompt-v1.md](http://bug-report-prompt-v1.md)

    ├── [prompt-v1.md](http://prompt-v1.md)

    ├── [prompt-v2.md](http://prompt-v2.md)

    ├── [prompt-v3.md](http://prompt-v3.md)

    └── [prompt-v4.md](http://prompt-v4.md)

```

## Examples

QA test case examples are stored in the `examples/` folder.

Current test case examples:

- `examples/login.md` — login user story
- `examples/registration.md` — registration user story
- `examples/password-reset.md` — password reset user story
- `examples/checkout.md` — checkout user story



## Bug Reports

Bug report examples are stored in the `bug-reports/` folder.

Current bug report examples:

- `bug-reports/login-error.md` — login error bug report
- `bug-reports/checkout-payment-failure.md` — checkout payment failure bug report



## API Testing

API testing examples are stored in the `api-testing/` folder.

Current API examples:

- `api-testing/login-api.md` — login endpoint API testing example
- `api-testing/registration-api.md` — registration API endpoint test cases



## Prompts

Prompt versions are stored in the `prompts/` folder.

Current prompts:

- `prompts/prompt-v1.md` — basic QA prompt
- `prompts/prompt-v2.md` — structured QA documentation
- `prompts/prompt-v3.md` — test case table format
- `prompts/prompt-v4.md` — advanced QA test case format
- `prompts/bug-report-prompt-v1.md` — structured bug report generator
- `prompts/api-test-prompt-v1.md` — structured API test case generator



## Prompt Versioning

The test case prompt improved step by step:

1. **Prompt v1** — basic QA output
2. **Prompt v2** — structured QA documentation
3. **Prompt v3** — Markdown table test case format
4. **Prompt v4** — advanced QA format with Type, Test Level, Severity, and Status

This shows how the AI output became more structured and more useful for real QA work.

## Quality Scoring

The project includes three simple scoring systems:

- `scoring.md` — evaluates AI-generated QA test case documentation
- `bug-report-scoring.md` — evaluates AI-generated bug reports
- `api-testing-scoring.md` — evaluates AI-generated API testing documentation

These scoring files help check whether the AI output is clear, practical, complete, and useful for real QA work.

## Next Steps

Planned improvements:

- Add more complex user stories
- Improve Prompt v4 based on scoring results
- Add more bug report examples
- Build a simple web interface
- Connect the project to the OpenAI API
- Add registration API example
- Add password reset API example
- Add checkout API example
- Improve API testing prompt
- Build a simple web interface
- Connect the project to the OpenAI API

