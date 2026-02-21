document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    console.log("clicked");
    navbar.classList.toggle("active");
  });
});
