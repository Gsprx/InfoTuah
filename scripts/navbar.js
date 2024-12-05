window.addEventListener("DOMContentLoaded", () => {
  // burger menu
  burgerMenu();

  // change LogIn link if logged in
  const user = localStorage.getItem("auth");
  if (user) {
    showLoggedIn(user);
  }
});

function burgerMenu() {
  // get the dropdown navbar element
  const navbarDropdown = document.querySelector(".navbar-dropdown");

  // get burger menu button
  const burgerMenuButton = document.querySelector(".burger-menu-button");
  // add onClick event listener
  burgerMenuButton.addEventListener("click", function () {
    // show the navbar dropdown
    navbarDropdown.style.display = "block";
    // hide burger menu icon
    burgerMenuButton.style.display = "none";
  });

  // get close button
  const closeMenuButton = document.querySelector(".close-menu-button");
  // add onClick event listener
  closeMenuButton.addEventListener("click", function () {
    // hide the navbar dropdown
    navbarDropdown.style.display = "none";
    // show burger menu icon
    burgerMenuButton.style.display = "block";
  });
}

function showLoggedIn(user) {
  // get the login link
  const loginLink = document.getElementById("login-link");
  // // get the login link for the burger menu dropdown
  const burgerLoginLink = document.getElementById("b-login-link");

  // change redirect tag
  loginLink.href = "#";
  burgerLoginLink.href = "#";
  // change inner html
  loginLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#ffffff"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
  ${user} / Logout <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>`;
  burgerLoginLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ffffff"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
  ${user} / Logout <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>`;

  // move the courses dropdown menus to the left depending on the size of the new loginLink
  const coursesDropDown = document.querySelector(".courses-dropdown");
  const subcoursesDropDown = document.querySelectorAll(".subcourses-dropdown");
  coursesDropDown.style.right = `${user.length + 4}em`;
  subcoursesDropDown.forEach(
    (element) => (element.style.right = `${user.length + 18}em`)
  );

  // log out when clicked
  loginLink.addEventListener("click", () => {
    console.log(location);
    logout(location);
  });

  burgerLoginLink.addEventListener("click", () => {
    logout(location);
  });
}

// logout function
function logout(loc) {
  if (localStorage.getItem("auth")) {
    localStorage.removeItem("auth");
    loc.reload();
  }

  return;
}
