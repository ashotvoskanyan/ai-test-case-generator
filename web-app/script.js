const workflowSelect = document.getElementById("workflow");
const requirementInput = document.getElementById("requirement");
const generateButton = document.getElementById("generateButton");
const resultOutput = document.getElementById("result");
const copyButton = document.getElementById("copyButton");

generateButton.addEventListener("click", async function () {
  const workflow = workflowSelect.value;
  const input = requirementInput.value.trim();

  if (!input) {
    resultOutput.textContent = "Please enter input first.";
    return;
  }

  generateButton.disabled = true;
  generateButton.textContent = "Generating...";
  resultOutput.textContent = "Generating QA output...";

  try {
    const response = await fetch("http://localhost:3000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        workflow: workflow,
        input: input,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      resultOutput.textContent = data.error || "Something went wrong.";
      return;
    }

    resultOutput.textContent = data.output;
  } catch (error) {
    resultOutput.textContent =
      "Could not connect to backend. Make sure the backend server is running.";
  } finally {
    generateButton.disabled = false;
    generateButton.textContent = "Generate QA Output";
  }
});

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