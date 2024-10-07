const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
const navLinks = document.querySelector(".nav-links");


hamburger.addEventListener("click", () => {
    navLinks.classList.add("active");
    hamburger.style.display = "none";
    closeBtn.style.display = "block";
});


closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
    closeBtn.style.display = "none";
    hamburger.style.display = "block";
});


window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove("active");
        hamburger.style.display = "none";
        closeBtn.style.display = "none";
    } else {
        hamburger.style.display = "block";
    }
});