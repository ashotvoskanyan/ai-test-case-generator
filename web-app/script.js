const workflowSelect = document.getElementById("workflow");
const requirementInput = document.getElementById("requirement");
const generateButton = document.getElementById("generateButton");
const resultOutput = document.getElementById("result");
const copyButton = document.getElementById("copyButton");

generateButton.addEventListener("click", function () {
  const workflow = workflowSelect.value;
  const input = requirementInput.value.trim();

  if (!input) {
    resultOutput.textContent = "Please enter input first.";
    return;
  }

  if (workflow === "test-cases") {
    resultOutput.textContent = generateTestCases(input);
    return;
  }

  if (workflow === "bug-report") {
    resultOutput.textContent = generateBugReport(input);
    return;
  }

  if (workflow === "api-tests") {
    resultOutput.textContent = generateApiTests(input);
    return;
  }
});

function generateTestCases(input) {
  return `Requirement Summary:
The user wants to complete the requested action based on the provided requirement.

Assumptions:
- The user can access the application.
- Required input fields are available.
- The system validates user input.

Positive Test Cases:
1. User completes the action with valid data.
2. System shows a successful result.

Negative Test Cases:
1. User submits empty required fields.
2. System shows validation messages.

Edge Cases:
1. User refreshes the page during the action.
2. User enters unexpected characters.

Clarifying Questions:
1. What validation rules should apply?
2. What should happen after successful completion?

Original Input:
${input}`;
}

function generateBugReport(input) {
  return `Bug Report:

Title:
Issue found based on the provided description.

Steps to Reproduce:
1. Open the application.
2. Go to the affected feature.
3. Perform the action described in the issue.
4. Observe the result.

Actual Result:
The application does not behave as expected.

Expected Result:
The application should complete the action correctly or show a clear validation message.

Severity:
Medium

Priority:
Medium

Original Issue Description:
${input}`;
}

function generateApiTests(input) {
  return `API Test Cases:

API Summary:
The endpoint should process the request and return the correct response.

Positive API Test Cases:
1. Send a valid request and expect a successful response.
2. Confirm the response body contains expected data.

Negative API Test Cases:
1. Send a request with missing required fields.
2. Send a request with invalid data.
3. Send a request with unauthorized access.

Edge Cases:
1. Send an empty request body.
2. Send unexpected extra fields.
3. Send very long input values.

Security Checks:
1. Confirm sensitive data is not exposed.
2. Confirm unauthorized users cannot access protected data.
3. Confirm error messages do not reveal private system details.

Original API Description:
${input}`;
}

copyButton.addEventListener("click", function () {
  const outputText = resultOutput.textContent.trim();

  if (!outputText || outputText === "Your generated QA output will appear here.") {
    return;
  }

  navigator.clipboard.writeText(outputText);

  copyButton.textContent = "Copied!";

  setTimeout(function () {
    copyButton.textContent = "Copy Output";
  }, 1500);
});