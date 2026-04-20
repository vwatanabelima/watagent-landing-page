// --- WatAgent script.js ---
// Modern & Performant Animation System

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation for all sections
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target elements for reveal
    const revealElements = document.querySelectorAll('.glass-card, .section-header, footer');
    revealElements.forEach(el => {
        el.classList.add('reveal-init');
        revealObserver.observe(el);
    });

    // 2. Navbar transparency and shrink on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.padding = "0.6rem 2rem";
            navbar.style.width = "95%";
            navbar.style.background = "rgba(10, 10, 10, 0.9)";
        } else {
            navbar.style.padding = "0.8rem 2rem";
            navbar.style.width = "90%";
            navbar.style.background = "rgba(10, 10, 10, 0.7)";
        }
    });

    // 3. Simple Parallax for Hero Illustration
    const heroVisual = document.querySelector('.hero-illustration');
    if (heroVisual) {
        window.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            heroVisual.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
});
