const addFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#add-title").value.trim();
  const description = document.querySelector("#add-desc").value.trim();
  const url = document.querySelector("#add-url").value.trim();
  const user_email = "joe@gmail.com";
  if (user_email && title) {
    const response = await fetch("/api/picks", {
      method: "POST",
      body: JSON.stringify({ title, description, url, user_email }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to sign up.");
    }
  }
};

document.querySelector(".add-form").addEventListener("submit", addFormHandler);
