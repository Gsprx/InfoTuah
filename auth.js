const button = document.querySelector(".login-submit");
button.addEventListener("click", (e) => {
  e.preventDefault();

  const username = document.getElementById("l_username").value;
  const password = document.getElementById("l_password").value;

  if (auth(username, password)) {
    localStorage.setItem("auth", username);
    window.location = "index.html";
  }
});

function auth(username, password) {
  const errorMessageSpace = document.querySelector(".error-message");

  // check if invalid values in input fields
  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    errorMessageSpace.innerHTML = "Please enter a valid username";
    errorMessageSpace.style.visibility = "visible";
    return;
  } else {
    errorMessageSpace.style.visibility = "hidden";
  }

  // check if creds match
  fetch("public/utils/usersDB.json")
    .then((response) => response.json())
    .then((data) => {
      const usersData = data.users;
      console.log(usersData);

      usersData.forEach((user) => {
        if (user.username == username && user.password == password) {
          // if user found and password matches login
          localStorage.setItem("auth", user.username);
          window.location = "/index.html";
          return;
        } else {
          // if user not found or password does not match
          errorMessageSpace.innerHTML = "Incorrect password or username";
          errorMessageSpace.style.visibility = "visible";
        }
      });
    })
    .catch((error) => console.error("Error:", error));
}
