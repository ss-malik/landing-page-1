let navEl = document.querySelector(".nav-bar ul");

let hambergerEl = document.querySelector(".hamburger-menu");

hambergerEl.addEventListener("click", () => {
  navEl.classList.toggle("nav-bar-open");
});
