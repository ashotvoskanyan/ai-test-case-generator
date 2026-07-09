# AI Test Case Generator

AI Test Case Generator is a beginner AI + QA project that turns user stories and product requirements into structured QA documentation.

The project started as a manual prompt-based MVP and is being improved step by step toward a simple AI-powered QA tool.

## Overview

This project uses reusable prompts to generate:

- Requirement summaries
- Assumptions
- Test scenarios
- Test cases
- Edge cases
- Clarifying questions

The goal is to practice Manual QA, prompt engineering, AI-assisted testing, GitHub documentation, and basic project structure.

## What This Project Does

The project takes a user story or product requirement as input.

Example:

```text

As a user, I want to log in with my email and password so that I can access my account.

```

The AI then generates structured QA documentation, including test scenarios, positive test cases, negative test cases, edge cases, and clarifying questions.

## Skills Demonstrated

This project demonstrates practical beginner-level skills in:

- Manual QA
- Test case design
- Requirement analysis
- Prompt engineering
- AI-assisted QA workflows
- Markdown documentation
- Git and GitHub
- Project structure and versioning



## Current Status

Current version: Version 0.2 - Better Project Structure

Completed:

- Manual prompt MVP
- Reusable QA prompt template
- Prompt versions v1-v4
- Example QA outputs for login, registration, password reset, and checkout
- Prompt quality scoring system
- Organized project structure
- GitHub repository with commit history
- Bug report generator prompt
- Example bug report for login error



## Project Structure

ai-test-case-generator/

├── [README.md](http://README.md)

├── [CHANGELOG.md](http://CHANGELOG.md)

├── [TODO.md](http://TODO.md)

├── [template.md](http://template.md)

├── [scoring.md](http://scoring.md)

├── bug-reports/

│   └── [login-error.md](http://login-error.md)

├── examples/

│   ├── [login.md](http://login.md)

│   ├── [registration.md](http://registration.md)

│   ├── [password-reset.md](http://password-reset.md)

│   └── [checkout.md](http://checkout.md)

└── prompts/

    ├── [bug-report-prompt-v1.md](http://bug-report-prompt-v1.md)

    ├── [prompt-v1.md](http://prompt-v1.md)

    ├── [prompt-v2.md](http://prompt-v2.md)

    ├── [prompt-v3.md](http://prompt-v3.md)

    └── [prompt-v4.md](http://prompt-v4.md)

## Examples

QA examples are stored in the `examples/` folder.

Current examples:

- `examples/login.md` — login user story
- `examples/registration.md` — registration user story
- `examples/password-reset.md` — password reset user story
- `examples/checkout.md` — checkout user story



## Prompts

Prompt versions are stored in the `prompts/` folder.

- `prompt-v1.md` — basic QA prompt
- `prompt-v2.md` — structured QA documentation
- `prompt-v3.md` — test case table format
- `prompt-v4.md` — advanced QA test case format
- `bug-report-prompt-v1.md` — converts issue descriptions into structured bug reports



## Prompt Versioning

The prompt improved step by step:

1. **Prompt v1** — basic QA output
2. **Prompt v2** — structured QA documentation
3. **Prompt v3** — Markdown table test case format
4. **Prompt v4** — advanced QA format with Type, Test Level, Severity, and Status

This shows how the AI output became more structured and more useful for real QA work.

## Prompt Quality Scoring

The project includes a simple scoring system in `scoring.md`.

AI-generated QA output is evaluated using:

- Requirement Understanding
- Test Coverage
- Clarity
- Structure
- Practical Value

Maximum score: 25 points.

## Next Steps

Planned improvements:

- Add more complex user stories
- Improve Prompt v4 based on scoring results
- Add bug report generation
- Add API testing examples
- Build a simple web interface
- Connect the project to the OpenAI API

