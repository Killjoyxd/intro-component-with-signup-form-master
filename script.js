const form = document.getElementById("form");

function showError(input, message) {
  const container = input.parentElement;
  container.querySelector(".error-icon").style.display = "flex";
  container.querySelector(".error").style.display = "block";
  container.querySelector(".error").textContent = message;
  input.style.borderColor = "hsl(0, 100%, 74%)";

  if (input.id === "first_name") {
    input.placeholder = "";
  }

  if (input.id === "last_name") {
    input.placeholder = "";
  }

  if (input.id === "email") {
    input.placeholder = "email@example.com";
    input.classList.add("email-error");
  }
  if (input.id === "password") {
    input.placeholder = "";
  }
}

function hideError(input) {
  const container = input.parentElement;
  container.querySelector(".error-icon").style.display = "none";
  container.querySelector(".error").style.display = "none";
  input.style.borderColor = "#ccc";

  if (input.id === "email") {
    input.placeholder = "Email Address";
  }
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function removePlaceholders() {
  const inputs = document.querySelectorAll(".input1");
  inputs.forEach((input) => {
    input.removeAttribute("placeholder");
    input.placeholder = "";
    input.style.display = "none";
    input.offsetHeight;
    input.style.display = "block";
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  let isValid = true;

  [firstName, lastName, email, password].forEach(hideError);

  if (firstName.value.trim() === "") {
    showError(firstName, "First name cannot be empty");
    isValid = false;
  }

  if (lastName.value.trim() === "") {
    showError(lastName, "Last name cannot be empty");
    isValid = false;
  }

  if (email.value.trim() === "") {
    showError(email, "Email cannot be empty");
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    showError(email, "Looks like this is not an email");
    isValid = false;
  }

  if (password.value.trim() === "") {
    showError(password, "Password cannot be empty");
    isValid = false;
  }

  if (isValid) {
    removePlaceholders();

    firstName.value = "First Name";
    lastName.value = "Last Name";
    email.value = "Email Address";
    password.value = "Password";

    alert("Success! Your free trial has been claimed.");
  }
});
