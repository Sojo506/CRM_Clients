const url = "http://localhost:4000/customers";

// create a customer
export const newCustomer = async (customer) => {
  console.log(customer);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Send the user to =>
    window.location.href = "index.html";
  } catch (error) {
    console.log("🚀 ~ file: API.js:9 ~ newCustomer ~ error:", error);
  }
};

export const getCustomers = async () => {
  try {
    const response = await fetch(url);
    const customers = await response.json();
    return customers;
  } catch (error) {
    console.log("🚀 ~ file: API.js:27 ~ getCustomers ~ error:", error);
  }
};

export const deleteCustomerById = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log("🚀 ~ file: API.js:39 ~ deleteCustomer ~ error:", error);
  }
};
