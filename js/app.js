import { getCustomers, deleteCustomerById } from "./API.js";

(function () {
  const customer_list = document.querySelector("#client-list");

  // as soon the document is ready
  document.addEventListener("DOMContentLoaded", showCustomers);
  customer_list.addEventListener("click", deleteCustomer);

  async function showCustomers() {
    const customers = await getCustomers();

    customers.forEach((customer) => {
      const { name, email, phone, company, id } = customer;
      const row = document.createElement("TR");

      row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${phone}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${company}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editCustomer.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-customer="${id}" class="text-red-600 hover:text-red-900 delete">Eliminar</a>
                </td>
            `;

      customer_list.appendChild(row);
    });
  }

  function deleteCustomer(e) {
    if (e.target.classList.contains("delete")) {
      const customerId = parseInt(e.target.dataset.customer);

      const check = confirm("Do you want to delete it, sure?");

      if (check) {
        deleteCustomerById(customerId);
      }
    }
  }
})();
