function validatePassword(event) {
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirm-password");
  var errorDiv = document.querySelector(".password-error");
  errorDiv.innerHTML = '';
  if (password.value != confirmPassword.value) {
    password.style.borderColor = "blue";
    confirmPassword.style.borderColor = "blue";

    // Create a new element
    var errorElement = document.createElement("p");
    // Set the text content
    errorElement.textContent = "Passwords do not match";
    // Append the element to the document
   
    errorDiv.appendChild(errorElement);
    event.preventDefault();
    return false;
  }
  return true;
}

document.getElementById("signup-form").addEventListener("submit", validatePassword);