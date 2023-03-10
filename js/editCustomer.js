import { getCustomerById, updateCustomer } from "./API.js";
import { showAlert, validate } from "./functions.js";

(function () {
  // input fields
  const inputName = document.querySelector("#name");
  const inputEmail = document.querySelector("#email");
  const inputPhone = document.querySelector("#phone");
  const inputCompany = document.querySelector("#company");
  const inputId = document.querySelector("#id");

  document.addEventListener("DOMContentLoaded", async () => {
    const paramsURL = new URLSearchParams(window.location.search);

    const customerId = parseInt(paramsURL.get("id"));

    const customer = await getCustomerById(customerId);
    showCustomer(customer);

    // Save changes
    const form = document.querySelector("#form");
    form.addEventListener("submit", validateCustomer);
  });

  function showCustomer(customer) {
    const { name, email, phone, company, id } = customer;
    inputName.value = name;
    inputEmail.value = email;
    inputPhone.value = phone;
    inputCompany.value = company;
    inputId.value = id;
  }

  function validateCustomer(e) {
    e.preventDefault();

    const customerObj = {
      name: inputName.value,
      email: inputEmail.value,
      phone: inputEmail.value,
      company: inputCompany.value,
      id: parseInt(inputId.value),
    };

    if (validate(customerObj)) {
      // show message
      showAlert("Each field is required", "error");
      return;
    }

    updateCustomer(customerObj);

    showAlert("Customer Edited", "success");
  }
})();
