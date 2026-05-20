// Register Validation
function validateRegister(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("regemail").value;
    let password = document.getElementById("regpassword").value;
    let confirmPassword = document.getElementById("confirmpassword").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill all fields");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    // Save user data in localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Registration Successful!");

    // Redirect to login page
    window.location.href = "login.html";

    return true;
}


// Login Validation
function validateLogin(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Get saved data
    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {

        alert("Login Successful!");

    } else {

        alert("Invalid Email or Password");

    }

    return false;
}