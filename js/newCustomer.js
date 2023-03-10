import { newCustomer } from "./API.js";
import { showAlert, validate } from "./functions.js";

(function async() {
  const form = document.querySelector("#form");
  form.addEventListener("submit", validateCustomer);

  function validateCustomer(e) {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const company = document.querySelector("#company").value;

    const customer = {
      name,
      email,
      phone,
      company,
    };

    if (validate(customer)) {
      // show message
      showAlert("Each field is required", "error");
      return;
    }

    newCustomer(customer);
    showAlert("Customer added", "success");
  }
})();
