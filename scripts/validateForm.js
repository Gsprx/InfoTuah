window.addEventListener("DOMContentLoaded", () => {
  // validate form
  const submit = document.querySelector(".submit-button");
  submit.addEventListener("click", () => {
    validate();
  });
});

function validate() {
  const errorMessage = document.querySelector(".error-message");
  // validate date of birth
  dateOfBirth(errorMessage);
}

function dateOfBirth(errorMessage) {
  const calendar = document.getElementById("s_birthday");
  const registeredDate = new Date(calendar.value);
  const currentDate = new Date();
  console.log(registeredDate);
  console.log(currentDate);

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
    errorMessage.innerHTML = "Age must be 13 and over to use this platform";
    errorMessage.style.visibility = "visible";
  }
}
