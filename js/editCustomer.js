import { getCustomerById } from "./API.js";

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
  });

  function showCustomer(customer) {
    const { name, email, phone, company, id } = customer;
    inputName.value = name;
    inputEmail.value = email;
    inputPhone.value = phone;
    inputCompany.value = company;
    inputId.value = id;
  }
})();
