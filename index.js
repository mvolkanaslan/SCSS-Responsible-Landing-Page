const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger-menu");
hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("open");
    hamburgerMenu.classList.toggle("show")
    hamburgerMenu.classList.toggle("hidden")

})