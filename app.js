const container = document.querySelector(".container");
const pwShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");
const signUp = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");

//   js code to show/hide password and change icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

// js code to appear signup and login form
signUp.addEventListener("click", () => {
  container.classList.add("active");
});
login.addEventListener("click", () => {
  container.classList.remove("active");
});

function loginaccount() {
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;
  let users = JSON.parse(localStorage.getItem("users"));
  var flage = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      flage = true;
      alert("You  have successfully Login");
      localStorage.setItem("name", users[i].name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      window.location.href = "./quiz.html";
    }
  }
  if (flage == false) {
    alert("Please enter a valid email and password");
  }
}

function signUpA() {
  let users = [];
  let obj = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  users = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  users.push(obj);

  localStorage.setItem("users", JSON.stringify(users));
container.classList.remove("active");
}
