window.onscroll = function() {
    myFunction()
};

var navbar = document.getElementById("navBar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("stick")
    } else {
        navbar.classList.remove("stick");
    }
}