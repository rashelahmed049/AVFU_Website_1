let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

let currentIndex = 0;
let interval;

/* ================= SHOW SLIDE ================= */
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (dots[i]) dots[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");

    currentIndex = index;
}

/* ================= NEXT / PREV ================= */
function nextSlide() {
    let index = (currentIndex + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    let index = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(index);
}

/* ================= DOT CLICK ================= */
function goToSlide(index) {
    showSlide(index);
    resetAutoSlide();
}

/* ================= AUTO SLIDE ================= */
function startAutoSlide() {
    interval = setInterval(() => {
        nextSlide();
    }, 3000); // change speed here
}

function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
}

/* ================= INIT ================= */
startAutoSlide();
