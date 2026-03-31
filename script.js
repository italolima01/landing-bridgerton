// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
const leadForm = document.querySelector('.lead-form');
if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = leadForm.querySelector('input[type="text"]').value;
        
        if (name) {
            alert(`Obrigado, ${name}! Seu convite exclusivo será enviado em breve.`);
            leadForm.reset();
        }
    });
}

// CTA button scroll to form
const ctaBtns = document.querySelectorAll('.cta-btn');
ctaBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.type !== 'submit') {
            e.preventDefault();
            document.querySelector('#formulario').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animate on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .speaker-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});
