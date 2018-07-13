const nav = document.getElementById("navigation");
const toggleButton = document.getElementById("toggle");
const toggleMenu = document.getElementsByClassName("navigation__wrap");



toggleButton.addEventListener("click", function () {
		nav.classList.toggle('nav-toggle');
});
