// Rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Tratamento do envio do formulário de contato
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtém os valores do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Em uma aplicação real, você enviaria esses dados para um servidor
        // Para este exemplo, mostraremos um alerta
        alert(`Obrigado, ${name}! Sua mensagem foi enviada. Entraremos em contato em breve.`);
        
        // Limpa o formulário
        contactForm.reset();
    });
}

// Tratamento dos botões de inscrição
const enrollButtons = document.querySelectorAll('.enroll-btn');
enrollButtons.forEach(button => {
    button.addEventListener('click', function() {
        const courseCard = this.closest('.course-card');
        const courseName = courseCard.querySelector('h3').textContent;
        
        // Em uma aplicação real, isso redirecionaria para uma página de pagamento
        // Para este exemplo, mostraremos um alerta
        alert(`Você selecionou o curso: ${courseName}. Em breve você será redirecionado para a página de inscrição.`);
    });
});

// Efeito de rolagem para o cabeçalho
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.background = 'white';
    }
});

// Carrossel de depoimentos (se necessário para mais depoimentos)
// Esta é uma implementação simples - em uma aplicação real, você pode querer usar uma biblioteca
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

// Inicializa depoimentos (somente se houver mais de 2)
if (testimonials.length > 2) {
    showTestimonial(currentTestimonial);
    
    // Rotaciona automaticamente os depoimentos a cada 5 segundos
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// Alternância do menu mobile (se necessário)
// Isso seria implementado se adicionássemos um botão de menu mobile