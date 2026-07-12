# AI Test Case Generator

AI Test Case Generator is a beginner AI + QA project that turns user stories, product requirements, API endpoint descriptions, and issue descriptions into structured QA documentation.

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
- API test cases
- Prompt quality evaluations
- Browser-based QA output prototypes

The goal is to practice Manual QA, API testing, prompt engineering, AI-assisted testing, GitHub documentation, basic web development, and project structure.

## What This Project Does

The project currently has four main workflows:

1. **Test Case Generator**
  Turns user stories or product requirements into structured QA test cases.
2. **Bug Report Generator**
  Turns issue descriptions into structured bug reports.
3. **API Test Generator**
  Turns API endpoint descriptions into structured API test cases.
4. **Web App Prototype**
  Provides a simple browser interface for entering a requirement and viewing generated QA output.



## Example Input

Example user story:

> As a user, I want to log in with my email and password so that I can access my account.



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
- API testing basics
- Test case design
- Bug report writing
- Requirement analysis
- Prompt engineering
- AI-assisted QA workflows
- Markdown documentation
- Git and GitHub
- Basic HTML
- Basic CSS
- Basic JavaScript
- Project structure and versioning



## Current Status

Current version: Version 0.5 - First Web App Version

Completed:

- Manual prompt MVP
- Reusable QA prompt template
- Prompt versions v1-v4
- Example QA outputs for login, registration, password reset, and checkout
- Bug report generator prompt
- Example bug reports for login error and checkout payment failure
- API testing prompt v1
- API testing examples for login and registration endpoints
- Prompt quality scoring system
- Bug report quality scoring system
- API testing output scoring system
- Organized project structure
- GitHub repository with commit history
- First static web app prototype
- Basic HTML, CSS, and JavaScript interface
- Mock QA output generation in browser



## Project Structure



## Examples

QA test case examples are stored in the `examples/` folder.

Current test case examples:

- `examples/login.md` - login user story
- `examples/registration.md` - registration user story
- `examples/password-reset.md` - password reset user story
- `examples/checkout.md` - checkout user story



## Bug Reports

Bug report examples are stored in the `bug-reports/` folder.

Current bug report examples:

- `bug-reports/login-error.md` - login error bug report
- `bug-reports/checkout-payment-failure.md` - checkout payment failure bug report



## API Testing Examples

API testing examples are stored in the `api-testing/` folder.

Current API testing examples:

- `api-testing/login-api.md` - login endpoint API testing example
- `api-testing/registration-api.md` - registration API endpoint test cases



## Prompts

Prompt versions are stored in the `prompts/` folder.

Current prompts:

- `prompts/prompt-v1.md` - basic QA prompt
- `prompts/prompt-v2.md` - structured QA documentation
- `prompts/prompt-v3.md` - test case table format
- `prompts/prompt-v4.md` - advanced QA test case format
- `prompts/bug-report-prompt-v1.md` - structured bug report generator
- `prompts/api-test-prompt-v1.md` - structured API test case generator



## Web App Prototype

The first web app prototype is stored in the `web-app/` folder.

Current web app files:

- `web-app/index.html` - page structure
- `web-app/style.css` - page styling
- `web-app/script.js` - browser interaction and mock QA output logic

The prototype currently works without a real AI API.

Current behavior:

- User selects a workflow: Test Cases, Bug Report, or API Tests.

- User enters a requirement, bug description, or API endpoint description.

- User clicks the Generate QA Output button.

- The page displays workflow-specific mock QA documentation.

- User can copy the generated output with the Copy Output button.

- Empty input shows a validation message.



## Prompt Versioning

The test case prompt improved step by step:

1. **Prompt v1** - basic QA output
2. **Prompt v2** - structured QA documentation
3. **Prompt v3** - Markdown table test case format
4. **Prompt v4** - advanced QA format with Type, Test Level, Severity, and Status

This shows how the AI output became more structured and more useful for real QA work.

## Quality Scoring

The project includes three simple scoring systems:

- `scoring.md` - evaluates AI-generated QA test case documentation
- `bug-report-scoring.md` - evaluates AI-generated bug reports
- `api-testing-scoring.md` - evaluates AI-generated API testing documentation

These scoring files help check whether the AI output is clear, practical, complete, and useful for real QA work.

## Next Steps

Planned improvements:

- Improve the web app interface
- Add workflow selection for test cases, bug reports, and API tests
- Improve the mock output format
- Improve API testing prompt
- Add API response validation examples
- Add more complex user stories
- Improve Prompt v4 based on scoring results
- Add more bug report examples
- Connect the project to the OpenAI API

