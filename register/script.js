document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(event.target);
    const registrationData = {};
    formData.forEach((value, key) => {
      registrationData[key] = value;
    });

    // Retrieve existing users from localStorage or initialize an empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Add new user to the list of users
    users.push(registrationData);

    // Save updated list of users to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Optionally, you can redirect the user to another page after registration
    // window.location.href = "registration-success.html";

    // Display success message
    alert("Registration successful! Form data saved.");
  });
