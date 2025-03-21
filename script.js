document.addEventListener('DOMContentLoaded', function() {
    // Fade in content on page load
    const content = document.querySelector('.content');
    content.style.opacity = 0;
    
    setTimeout(() => {
        content.style.transition = 'opacity 1s ease-in-out';
        content.style.opacity = 1;
    }, 100);
    
    // Add smooth scrolling for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
