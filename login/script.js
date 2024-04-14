document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(event.target);
    const loginData = {};
    formData.forEach((value, key) => {
      loginData[key] = value;
    });

    // Retrieve list of users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists and credentials match
    const user = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );

    if (user) {
      // Successful login
      alert("Login successful!");
      localStorage.setItem('user', JSON.stringify(user));
      // Redirect the user to a new page or perform other actions
      // window.location.href = "dashboard.html";
    } else {
      // Failed login
      alert("Invalid email or password. Please try again.");
    }
  });
