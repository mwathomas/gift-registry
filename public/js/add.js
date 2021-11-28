const addFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#add-title").value.trim();
  const url = document.querySelector("#add-url").value.trim();
  const description = document.querySelector("#add-desc").value.trim();

  if (title && url && description) {
    const response = await fetch("/api/picks", {
      method: "POST",
      body: JSON.stringify({ title, url, description }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to add.");
    }
  }
};

document.querySelector(".add-form").addEventListener("submit", addFormHandler);
