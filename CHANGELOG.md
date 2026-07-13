# Changelog

## Version 0.8 - Output Formatting Improvements

### Added

- Added Markdown rendering in the web app.
- Added `marked` library through CDN.
- Added formatted HTML display for generated Markdown output.
- Added styled table display for generated QA documentation.
- Added raw Markdown storage for copy behavior.

### Improved

- Improved generated output readability in the browser.
- Improved table spacing, borders, and header styling.
- Improved output card styling.
- Improved copy behavior so the Copy Output button copies raw Markdown instead of rendered HTML.
- Improved demo presentation for portfolio review.

### Learned

- How Markdown can be rendered as HTML in the browser.
- Why raw output and rendered output should be handled separately.
- How to style generated documentation tables with CSS.
- How frontend presentation affects demo quality.

---

## Version 0.7 - Error Handling and Demo Stability

### Added

- Added improved frontend error handling.
- Added user-friendly backend connection error messages.
- Added fallback demo mode for API errors.
- Added fallback output for Test Cases workflow.
- Added fallback output for Bug Report workflow.
- Added fallback output for API Tests workflow.
- Added fallback response mode from the backend.

### Improved

- Improved app stability when the OpenAI API is unavailable.
- Improved user guidance when the backend server is not running.
- Improved backend behavior when the API key is missing or invalid.
- Improved demo reliability for portfolio review.

### Learned

- How to handle backend connection failures in the frontend.
- How to return fallback output when an API request fails.
- Why production-like apps need graceful error handling.
- How fallback mode keeps a demo usable even when external services fail.

---

## Version 0.6 - OpenAI API Integration

### Added

- Added Express backend server.
- Added OpenAI API integration.
- Added `/generate` backend endpoint.
- Added secure API key handling with `.env`.
- Added `.env.example` for safe environment variable documentation.
- Added backend `.gitignore` to exclude `.env` and `node_modules/`.
- Connected the web app frontend to the backend.
- Added real AI-generated QA output.
- Added structured backend prompts for Test Cases, Bug Report, and API Tests workflows.

### Improved

- Improved backend prompt rules to avoid conversational AI responses.
- Improved output formatting rules for QA documentation.
- Improved error handling for missing API key and API failures.

### Learned

- How frontend and backend communicate through HTTP requests.
- Why API keys must not be stored in browser JavaScript.
- How `.env` protects local secrets.
- How Express can receive user input and return generated output.
- How to use OpenAI API from a Node.js backend.

---

## Version 0.5 - First Web App Version

### Added

- Added first static web app prototype.
- Added `web-app/index.html`.
- Added `web-app/style.css`.
- Added `web-app/script.js`.
- Added textarea input for user stories and requirements.
- Added Generate QA Output button.
- Added mock QA output display in the browser.
- Added empty input validation message.
- Added basic page styling.
- Added basic JavaScript interaction.
- Added workflow selection for Test Cases, Bug Report, and API Tests.
- Added different mock outputs for each workflow.
- Added Copy Output button.
- Added clipboard copy behavior for generated QA output.

### Learned

- Basic role of HTML in page structure.
- Basic role of CSS in page styling.
- Basic role of JavaScript in browser interaction.
- How to connect an input field, a button, and an output area.
- Why a mock prototype is useful before connecting a real API.

---

## Version 0.4 - API Testing Examples

### Added

- Added API testing prompt v1.
- Added `api-testing/` folder.
- Added login API testing example.
- Added registration API testing example.
- Added API testing output scoring system.
- Updated README.md to include API testing workflow.
- Updated project structure documentation.

### Learned

- How API testing differs from UI testing.
- How to write positive, negative, edge, and security API test cases.
- How to evaluate API testing output quality.
- How expected status codes depend on product requirements and backend rules.

---

## Version 0.3 - Bug Report Generator

### Added

- Added bug report prompt v1.
- Added `bug-reports/` folder.
- Added login error bug report example.
- Added checkout payment failure bug report example.
- Added bug report scoring system.
- Updated README.md to include bug report workflow.

### Learned

- How to turn issue descriptions into structured bug reports.
- How to separate actual result from expected result.
- How to use severity and priority in bug reports.
- How to evaluate bug report quality.

---

## Version 0.2 - Better Project Structure

### Added

- Added `prompts/` folder.
- Added `examples/` folder.
- Added prompt versions v1-v4.
- Added reusable QA prompt template.
- Added more QA output examples.
- Added TODO.md.
- Added CHANGELOG.md.
- Added scoring.md.

### Learned

- How to organize a small QA project.
- How prompt versions show improvement over time.
- How examples make a portfolio project easier to understand.
- How scoring can be used to evaluate AI-generated QA output.

---

## Version 0.1 - Manual Prompt MVP

### Added

- Created first project version.
- Added README.md.
- Added first manual QA prompt.
- Added first login test case example.
- Created GitHub repository.
- Pushed first version to GitHub.

### Learned

- How to start a simple AI-assisted QA project.
- How to document a project in Markdown.
- How to use basic Git commands.
- How to publish a project on GitHub.