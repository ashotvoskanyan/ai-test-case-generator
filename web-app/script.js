const requirementInput = document.getElementById("requirement");
const generateButton = document.getElementById("generateButton");
const resultOutput = document.getElementById("result");

generateButton.addEventListener("click", function () {
  const requirement = requirementInput.value.trim();

  if (!requirement) {
    resultOutput.textContent = "Please enter a user story or requirement first.";
    return;
  }

  const mockOutput = `Requirement Summary:
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

Original Requirement:
${requirement}`;

  resultOutput.textContent = mockOutput;
});