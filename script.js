const form = document.getElementById("form");

const showError = (input, message) => {
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
};

const hideError = (input) => {
  const container = input.parentElement;
  container.querySelector(".error-icon").style.display = "none";
  container.querySelector(".error").style.display = "none";
  input.style.borderColor = "hsl(246, 25%, 77%)";
};

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const removePlaceholders = () => {
  const inputs = document.querySelectorAll(".input1");
  inputs.forEach((input) => {
    input.removeAttribute("placeholder");
    input.placeholder = "";
    input.style.display = "none";
    input.offsetHeight;
    input.style.display = "block";
  });
};

const formAction = () => {
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
    showError(email, "Looks like this is not an email");
    isValid = false;
  }

  if (password.value.trim() === "") {
    showError(password, "Password cannot be empty");
    isValid = false;
  }

  if (isValid) {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";

    alert("Your free trial has been claimed.");
  }
};
form.addEventListener("submit", (e) => {
  e.preventDefault();

  formAction();
});
