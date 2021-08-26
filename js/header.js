// Get the header
const header = document.getElementById("header");

// Get the offset position of the navbar
const sticky = header.offsetTop;
var toggler = $("#navbar-toggler");

window.addEventListener("scroll", headerStyle)
window.addEventListener("resize", headerStyle)

function headerStyle() {
    if (window.pageYOffset > (sticky)) header.classList.add("sticky");

    else if (toggler.css("display") === "block") header.classList.add("sticky");

    else header.classList.remove("sticky");
}

headerStyle();