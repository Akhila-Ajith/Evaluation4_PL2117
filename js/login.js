// login.js

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get values entered by the user
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!username) {
            // Username  is missing
            usernameError.textContent = 'Username is required'; // Display the error message
            return; // Prevent further processing
        } else {
            usernameError.textContent = '';
        }

        if (!password) {
            // password is missing
            passwordError.textContent = 'Password is required'; // Display the error message
            return; // Prevent further processing
        } else {
            passwordError.textContent = '';
        }

        // Perform authentication
        if (username === "user" && password === "userpass") {
            // Redirect user to the user page
            window.location.href = "userView.html";
        } else if (username === "admin" && password === "adminpass") {
            // Redirect admin to the admin page
            window.location.href = "adminView.html";
        }
        else {
            // Authentication failed, displaying an alert
            alert("Authentication failed. Please check your credentials.");
        }
    });
});
