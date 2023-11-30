let navbar = document.querySelector(".header .flex .navbar"),
    menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
})