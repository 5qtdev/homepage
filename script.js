const animationSettings = {
    fadeIn: {
        duration: 1000,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    scroll: {
        behavior: 'smooth',
        offset: 20
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    
    // Fade in animation
    const animateContent = () => {
        content.classList.add('content--visible');
        content.onanimationend = () => content.style.opacity = '1';
    };

    requestAnimationFrame(() => {
        content.style.cssText = `opacity: 0; will-change: opacity;`;
        requestAnimationFrame(animateContent);
    });

    // Smooth scroll with event delegation
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;

        e.preventDefault();
        const target = document.querySelector(anchor.hash);
        if (!target) return;

        const { top } = target.getBoundingClientRect();
        window.scrollTo({
            top: window.scrollY + top - animationSettings.scroll.offset,
            behavior: animationSettings.scroll.behavior
        });
    });

    // Intersection observer setup
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('active', entry.isIntersecting);
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-observe]').forEach(element => {
        observer.observe(element);
    });
});
