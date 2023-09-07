function showpassword() {
    var password = document.getElementById("password-field");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "Password";
    }
  }

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");


  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "usman" && password === "usman") {
        alert("You have successfully logged in.");
        location.replace('http://127.0.0.1:5500/dashboard.html');
    } else {
        
    }
})