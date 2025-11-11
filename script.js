const slides = document.querySelectorAll(".photo-carousel .slides img");
const dots = document.querySelectorAll(".photo-carousel .dot");

let current = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  current = index;
}

slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    const nextIndex = (index + 1) % slides.length;
    showSlide(nextIndex);
  });
});

document.querySelector(".prev").addEventListener("click", () => {
  const prevIndex = (current - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
});

document.querySelector(".next").addEventListener("click", () => {
  const nextIndex = (current + 1) % slides.length;
  showSlide(nextIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});