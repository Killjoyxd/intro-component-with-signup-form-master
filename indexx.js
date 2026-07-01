const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  let isValid = true;

  // Clear all previous errors
  document
    .querySelectorAll(".input")
    .forEach((div) => div.classList.remove("error"));

  // First Name
  if (firstName.value.trim() === "") {
    showError(firstName, "First name cannot be empty");
    isValid = false;
  }

  // Last Name
  if (lastName.value.trim() === "") {
    showError(lastName, "Last name cannot be empty");
    isValid = false;
  }

  // Email
  if (email.value.trim() === "") {
    showError(email, "Email cannot be empty");
    isValid = false;
  } else if (!isValidEmail(email.value)) {
    showError(email, "Looks like this is not an email");
    isValid = false;
  }

  // Password
  if (password.value.trim() === "") {
    showError(password, "Password cannot be empty");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully! 🎉");
    // form.submit(); // Uncomment to actually submit the form
  }
});

// Show error
function showError(input, message) {
  const inputDiv = input.parentElement;
  const errorText = inputDiv.querySelector(".error");

  errorText.textContent = message;
  inputDiv.classList.add("error");
}

// Email validation
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
