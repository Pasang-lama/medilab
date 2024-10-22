var header = document.getElementById("main-body");
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }
})