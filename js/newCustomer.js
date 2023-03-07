(function () {
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
      console.log('Campos requeridos')
      return 
    }
  }

  function validate(obj) {
    return !Object.values(obj).every((input) => input !== "");
  }
})();
