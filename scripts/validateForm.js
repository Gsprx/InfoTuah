window.addEventListener("DOMContentLoaded", () => {
  // validate form
  const submit = document.querySelector(".submit-button");
  submit.addEventListener("click", () => {
    validate();
  });

  //hide on screen error
  const closeError = document.querySelector(".close-error-button");
  closeError.addEventListener("click", () => {
    hideError();
  });
});

function validate() {
  // validate date of birth
  dateOfBirth();
  // validate password match
  passwordMatch();
  // validate password strength
  passwordStrength();
}

// show generic error box with given text as error message
function showError(errorText) {
  const errorBox = document.querySelector(".error-container");
  const errorMessage = document.querySelector(".error-message");
  errorMessage.textContent = errorText;
  errorBox.style.display = "block";
}

//hide error box
function hideError() {
  const errorBox = document.querySelector(".error-container");
  errorBox.style.display = "none";
}

//validates age above 13 years old
function dateOfBirth() {
  const calendar = document.getElementById("s_birthday");
  const registeredDate = new Date(calendar.value);
  const currentDate = new Date();
  //debugging
  console.log("Input date: " + registeredDate);
  console.log("Current date: " + currentDate);

  // get date differences
  let yearDiff = currentDate.getFullYear() - registeredDate.getFullYear();
  let monthDiff = currentDate.getMonth() - registeredDate.getMonth();

  // if months are negative, adjust correctly
  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  // check if age is appropriate
  if (yearDiff < 13) {
    showError("Age must be 13 and over to use this platform");
  }
}

//validates both passwords matching
function passwordMatch() {
  //get both passwords from html inputs
  const password1 = document.getElementById("s_password").value;
  const password2 = document.getElementById("s_verify-password").value;
  console.log("Password 1: " + password1);
  console.log("Password 2: " + password2);

  //check if passwords match
  if (password1 === password2) {
    //matching
  } else {
    //not matching
    showError("Passwords do not match");
  }
}

//validates password is sufficiently strong
function passwordStrength() {
  const password = document.getElementById("s_password").value;
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

  if (pattern.test(password)) {
    //password is strong
  } else {
    //password is weak
    showError("Invalid password format");
  }
}
