window.addEventListener("DOMContentLoaded", () => {
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
});

function auth(username, password) {
  const errorMessage = document.querySelector(".error-message");

  // check if invalid values in input fields
  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    errorMessage.innerHTML = "Please enter a valid username";
    errorMessage.style.visibility = "visible";
    return;
  } else {
    errorMessage.style.visibility = "hidden";
  }

  // check if creds match
  fetch("public/utils/usersDB.json")
    .then((response) => response.json())
    .then((data) => {
      const usersData = data.users;
      console.log(usersData);

      usersData.forEach((user) => {
        let good = false;
        if (user.username == username && user.password == password) {
          // if user found and password matches login
          good = true;
          localStorage.setItem("auth", user.username);
          window.location = "/index.html";
          return;
        }
      });

      if (!good) {
        // if user not found or password does not match
        errorMessage.innerHTML = "Incorrect password or username";
        errorMessage.style.visibility = "visible";
      }
    })
    .catch((error) => console.error("Error:", error));
}
