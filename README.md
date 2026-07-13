# AI Test Case Generator

AI Test Case Generator is a beginner AI + QA project that turns user stories, product requirements, API endpoint descriptions, and issue descriptions into structured QA documentation.

The project started as a manual prompt-based MVP and is being improved step by step toward a simple AI-powered QA assistant.

## Overview

This project uses reusable prompts, a browser interface, and a Node.js backend to generate QA documentation such as:

- Requirement summaries
- Assumptions
- Test scenarios
- Test cases
- Edge cases
- Clarifying questions
- Bug reports
- API test cases
- Prompt quality evaluations
- Real AI-generated QA output

The goal is to practice Manual QA, API testing, prompt engineering, AI-assisted testing, GitHub documentation, basic web development, backend development, API integration, and project structure.

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

> As a user, I want to reset my password using my email so that I can regain access to my account.

## Example Output

The AI can generate:

- Requirement summary
- Assumptions
- Structured test case tables
- Positive test cases
- Negative test cases
- Edge cases
- Security checks
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
- Basic Node.js
- Express backend development
- OpenAI API integration
- Secure environment variable handling
- Project structure and versioning

## Current Status

Current version: Version 0.6 - OpenAI API Integration

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
- Workflow selection for Test Cases, Bug Report, and API Tests
- Copy Output button
- Backend server with Express
- OpenAI API integration
- Secure API key handling with `.env`
- Frontend-to-backend request flow
- Real AI-generated QA output
- Improved backend prompts for structured QA output

## Project Structure

~~~text
ai-test-case-generator/
|-- README.md
|-- CHANGELOG.md
|-- TODO.md
|-- template.md
|-- scoring.md
|-- bug-report-scoring.md
|-- api-testing-scoring.md
|-- backend/
|   |-- server.js
|   |-- package.json
|   |-- package-lock.json
|   |-- .env.example
|   |-- .gitignore
|-- api-testing/
|   |-- login-api.md
|   |-- registration-api.md
|-- bug-reports/
|   |-- login-error.md
|   |-- checkout-payment-failure.md
|-- examples/
|   |-- login.md
|   |-- registration.md
|   |-- password-reset.md
|   |-- checkout.md
|-- prompts/
|   |-- api-test-prompt-v1.md
|   |-- bug-report-prompt-v1.md
|   |-- prompt-v1.md
|   |-- prompt-v2.md
|   |-- prompt-v3.md
|   |-- prompt-v4.md
|-- web-app/
|   |-- index.html
|   |-- style.css
|   |-- script.js
~~~

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
- `web-app/script.js` - browser interaction and backend request logic

Current behavior:

- User selects a workflow: Test Cases, Bug Report, or API Tests.
- User enters a requirement, bug description, or API endpoint description.
- User clicks the Generate QA Output button.
- The web app sends the request to the backend.
- The backend sends the prompt to the OpenAI API.
- The page displays real AI-generated QA documentation.
- User can copy the generated output with the Copy Output button.
- Empty input shows a validation message.
- Backend connection errors are displayed in the output area.

## Backend

The backend is stored in the `backend/` folder.

Current backend files:

- `backend/server.js` - Express server and OpenAI API integration
- `backend/package.json` - backend project settings and scripts
- `backend/package-lock.json` - installed dependency lock file
- `backend/.env.example` - example environment variables
- `backend/.gitignore` - ignores `.env` and `node_modules/`

The backend receives requests from the web app, builds a QA prompt, sends the request to the OpenAI API, and returns the generated QA output to the browser.

The real API key is stored locally in `backend/.env` and is not committed to GitHub.

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

## How to Run Locally

### 1. Start the backend

Open a terminal in the backend folder:

~~~text
cd backend
npm.cmd start
~~~

The backend should run on:

~~~text
http://localhost:3000
~~~

### 2. Open the web app

Open this file in a browser:

~~~text
web-app/index.html
~~~

### 3. Generate QA output

Select a workflow, enter input, and click Generate QA Output.

## Environment Variables

The backend requires a local `.env` file.

Example:

~~~text
OPENAI_API_KEY=your_api_key_here
PORT=3000
~~~

The real `.env` file is ignored by Git and should not be committed.

## Next Steps

Planned improvements:

- Add better frontend error messages
- Add loading state improvements
- Add fallback demo mode for API errors
- Add output formatting improvements
- Add deployment instructions
- Deploy the web app online