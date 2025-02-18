// Select elements
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
let isPaused = false;
let autoSlideInterval;


const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Initialize counter and image size
let counter = 0;
const size = carouselImages[0].clientWidth;

// Function to move slide
function moveSlide() {
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

// Event listeners for buttons
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) counter = -1;
    counter++;
    moveSlide();
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) counter = carouselImages.length;
    counter--;
    moveSlide();
});

// Auto-slide function
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        if (!isPaused) {
            nextBtn.click();
        }
    }, 3000); // Auto-slide every 3 seconds
}

startAutoSlide();

// Pause on interaction
carouselContainer.addEventListener('mouseenter', () => {
    isPaused = true;
});

carouselContainer.addEventListener('mouseleave', () => {
    isPaused = false;
});

carouselControls.addEventListener('click', () => {
    isPaused = true;
    setTimeout(() => {
        isPaused = false;
    }, 5000); // Resume after 5 seconds
});


// Popup functionality
const popup = document.getElementById('image-popup');
const popupImg = document.getElementById('popup-img');
const closePopup = document.querySelector('.close');

document.querySelectorAll('.game-image').forEach(img => {
    img.addEventListener('click', () => {
        popup.style.opacity = '0';
        popup.style.display = 'block';
        popupImg.src = img.src;
        setTimeout(() => {
            popup.style.opacity = '1';
        }, 10);
    });
});


closePopup.addEventListener('click', () => {
    popup.style.opacity = '0';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300);
});


window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    }
};
