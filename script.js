// 1. Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    const closeBtn = document.getElementById('closeMenu');
    menu.classList.toggle('active');
    
    // Show/Hide close button
    if (menu.classList.contains('active')) {
        closeBtn.style.display = "block";
    } else {
        closeBtn.style.display = "none";
    }
}

// 2. Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.test-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[n].classList.add('active');
    dots[n].classList.add('active');
    currentSlide = n;
}

// Auto-play slider
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// 3. Tab Interaction (Visual Only)
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// 4. Scroll Header Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
    }
});