const nav = document.getElementById("navigation");
const toggleButton = document.getElementById("toggle");
const toggleMenu = document.getElementsByClassName("navigation__wrap");



toggleButton.addEventListener("click", function () {

    if (nav.className === "nav-toggle") { //if there is a class nav-toggle remove it     
        nav.classList.remove("nav-toggle");
        nav.style.display = "none";

    } else {
        nav.classList.add("nav-toggle");
        nav.style.display = "block";

    }

});
