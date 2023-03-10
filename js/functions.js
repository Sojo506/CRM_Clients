export function showAlert(message, type) {
  const alert = document.querySelector(".bg-red-100");

  if (!alert) {
    const alert = document.createElement("P");
    alert.classList.add(
      `bg-${type === "error" ? "red" : "green"}-100`,
      `border-${type === "error" ? "red" : "green"}-400`,
      `text-${type === "error" ? "red" : "green"}-700`,
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alert.innerHTML = `
      <strong class="font-bold">${type === "error" ? "Error" : "Done"}!</strong>
      <span class="block sm:inline">${message}</span>
    `;

    const form = document.querySelector("#form");
    form.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}

export function validate(obj) {
  return !Object.values(obj).every((input) => input !== "");
}