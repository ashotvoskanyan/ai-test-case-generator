const API_BASE_URL = "http://localhost:3000";

const workflowSelect = document.getElementById("workflow");
const requirementInput = document.getElementById("requirement");
const generateButton = document.getElementById("generateButton");
const resultOutput = document.getElementById("result");
const copyButton = document.getElementById("copyButton");

let rawOutputText = "";

generateButton.addEventListener("click", async function () {
  const workflow = workflowSelect.value;
  const input = requirementInput.value.trim();

  if (!input) {
    rawOutputText = "Please enter input first.";
    resultOutput.textContent = rawOutputText;
    return;
  }

  setLoadingState(true);

  try {
    const response = await fetch(`${API_BASE_URL}/generate`, {
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
      rawOutputText = formatErrorMessage(data.error);
      resultOutput.textContent = rawOutputText;
      return;
    }

    if (data.mode === "fallback" && data.warning) {
      rawOutputText = `# Fallback Demo Mode\n\n${data.warning}\n\n${data.output}`;
    } else {
      rawOutputText = data.output;
    }

    renderMarkdown(rawOutputText);
  } catch (error) {
    rawOutputText =
      "Backend connection error:\n\nThe web app could not connect to the backend server.\n\nTo fix this:\n1. Open a terminal.\n2. Go to the backend folder.\n3. Run: npm.cmd start\n4. Try generating again.";

    resultOutput.textContent = rawOutputText;
  } finally {
    setLoadingState(false);
  }
});

copyButton.addEventListener("click", function () {
  if (!rawOutputText || rawOutputText === "Your generated QA output will appear here.") {
    return;
  }

  navigator.clipboard.writeText(rawOutputText);

  copyButton.textContent = "Copied!";

  setTimeout(function () {
    copyButton.textContent = "Copy Output";
  }, 1500);
});

function setLoadingState(isLoading) {
  generateButton.disabled = isLoading;

  if (isLoading) {
    generateButton.textContent = "Generating...";
    rawOutputText = "Generating QA output...";
    resultOutput.textContent = rawOutputText;
  } else {
    generateButton.textContent = "Generate QA Output";
  }
}

function renderMarkdown(markdownText) {
  if (typeof marked === "undefined") {
    resultOutput.textContent = markdownText;
    return;
  }

  resultOutput.innerHTML = marked.parse(markdownText);
}

function formatErrorMessage(errorMessage) {
  if (!errorMessage) {
    return "Unknown error occurred. Please try again.";
  }

  if (errorMessage.includes("OpenAI API key is missing")) {
    return `OpenAI API key error:

The backend is running, but the OpenAI API key is missing.

To fix this:
1. Open backend/.env
2. Add your API key:
   OPENAI_API_KEY=your_api_key_here
3. Restart the backend server.`;
  }

  if (
    errorMessage.includes("insufficient_quota") ||
    errorMessage.includes("quota") ||
    errorMessage.includes("billing")
  ) {
    return `OpenAI billing or quota error:

The backend reached OpenAI, but the API request was rejected because billing or credits are not available.

To fix this:
1. Check your OpenAI Platform billing.
2. Make sure you have API credits.
3. Try again after billing is active.`;
  }

  if (
    errorMessage.includes("Incorrect API key") ||
    errorMessage.includes("invalid_api_key") ||
    errorMessage.includes("401")
  ) {
    return `OpenAI API key error:

The API key is invalid or not accepted.

To fix this:
1. Create a new API key in OpenAI Platform.
2. Replace the old key in backend/.env.
3. Restart the backend server.`;
  }

  if (
    errorMessage.includes("model") ||
    errorMessage.includes("does not exist")
  ) {
    return `OpenAI model error:

The selected model is not available for this API key or project.

To fix this:
1. Check the model name in backend/server.js.
2. Use an available model.
3. Restart the backend server.`;
  }

  return `API error:

${errorMessage}`;
}