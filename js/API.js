const url = "http://localhost:4000/customers";

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
