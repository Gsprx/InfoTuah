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
