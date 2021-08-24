// Get the header
const header = document.getElementById("header");

// Get the offset position of the navbar
const sticky = header.offsetTop;

window.addEventListener("scroll",function () {
    if (window.pageYOffset > (sticky)) {
        header.classList.add("sticky");

    } else {
        header.classList.remove("sticky");
    }
})