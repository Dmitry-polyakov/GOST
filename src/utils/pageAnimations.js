// pageAnimations.js

// Анимация навигации
export function initNavbarAnimation() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const handleScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Функция для очистки
    return () => window.removeEventListener('scroll', handleScroll);
}

// Анимация карточек
export function initCardAnimations() {
    const cards = document.querySelectorAll('.card');
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
            }
        });
    });

    cards.forEach(card => observer.observe(card));
    
    // Функция для очистки
    return () => observer.disconnect();
}

// Анимация текстовых блоков
export function initTextAnimations() {
    const elements = document.querySelectorAll('.textbox-row, .second-textbox-paragraph');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    });

    elements.forEach(el => observer.observe(el));
    
    // Функция для очистки
    return () => observer.disconnect();
}