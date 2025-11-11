// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
  });
});

// Formulário de contato
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
    contactForm.reset();
  });
}

// Botões de inscrição
document.querySelectorAll('.enroll-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const course = btn.closest('.course-card').querySelector('h3').textContent;
    alert(`Você selecionou o curso: ${course}. Em breve você será redirecionado.`);
  });
});

// Efeito do cabeçalho
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    header.style.background = 'rgba(255, 255, 255, 0.95)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    header.style.background = 'white';
  }
});

// ===== Carrossel de Fotos =====
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlideFunc() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlideFunc);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentSlide = i;
    showSlide(currentSlide);
  });
});

// Troca automática
setInterval(nextSlide, 4000);
