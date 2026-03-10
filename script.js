let currentIndex = 0;

const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Function to calculate slide width dynamically
function getSlideWidth() {
  return images.length > 0 ? images[0].offsetWidth : 800;
}

// Function to update carousel position
function updateSlidePosition() {
  if (slides && images.length > 0) {
    const slideWidth = getSlideWidth();
    const offset = -currentIndex * slideWidth;
    slides.style.transform = `translateX(${offset}px)`;
  }
}

// Next button functionality
if (nextBtn) {
  nextBtn.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlidePosition();
  });
}

// Previous button functionality
if (prevBtn) {
  prevBtn.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlidePosition();
  });
}

// Handle window resize to recalculate slide width
window.addEventListener("resize", updateSlidePosition);

// Initialize on page load
document.addEventListener("DOMContentLoaded", updateSlidePosition);