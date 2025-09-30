// Carrossel de depoimentos (se necessário para mais depoimentos)
// Navegação manual entre os depoimentos
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const prevButton = document.createElement('button');
const nextButton = document.createElement('button');

// Adicionando botões de navegação
prevButton.textContent = 'Anterior';
prevButton.classList.add('testimonial-nav', 'prev');
nextButton.textContent = 'Próximo';
nextButton.classList.add('testimonial-nav', 'next');

// Adicionando os botões ao container de depoimentos
const testimonialContainer = document.querySelector('.testimonial-cards');
testimonialContainer.appendChild(prevButton);
testimonialContainer.appendChild(nextButton);

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

// Inicializa depoimentos (mostra o primeiro)
if (testimonials.length > 0) {
    showTestimonial(currentTestimonial);

    // Navegação manual
    prevButton.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    nextButton.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    // Rotaciona automaticamente os depoimentos a cada 5 segundos
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}
