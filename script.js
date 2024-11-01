document.addEventListener('DOMContentLoaded', () => {
    // Lazy loading van afbeeldingen voor snellere laadtijd
    const lazyImages = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback voor browsers zonder IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }

    // FAQ-accordeon: toon/verberg antwoorden
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            const isVisible = answer.style.display === 'block';
            document.querySelectorAll('.faq-item .answer').forEach(a => a.style.display = 'none');
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });

    // E-mail validatie functie
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    // Soepel scrollen naar specifieke secties
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Event listener voor "Neem contact op" knop
    const contactButton = document.querySelector('button[onclick*="scrollToSection"]');
    if (contactButton) {
        contactButton.addEventListener('click', () => scrollToSection('contact'));
    }
});
