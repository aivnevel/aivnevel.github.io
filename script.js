document.addEventListener('DOMContentLoaded', () => {
    // Lazy loading van afbeeldingen voor snellere laadtijd
    const lazyImages = document.querySelectorAll('img[data-src]');
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

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });

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

    // Formulier validatie
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validatie logica
        const name = document.querySelector('#name');
        const email = document.querySelector('#email');
        const message = document.querySelector('#message');
        let isValid = true;

        if (!name.value.trim()) {
            name.classList.add('error');
            isValid = false;
        } else {
            name.classList.remove('error');
        }

        if (!email.value.trim() || !validateEmail(email.value)) {
            email.classList.add('error');
            isValid = false;
        } else {
            email.classList.remove('error');
        }

        if (!message.value.trim()) {
            message.classList.add('error');
            isValid = false;
        } else {
            message.classList.remove('error');
        }

        if (isValid) {
            // Voor SEO-vriendelijke actie: bevestigingsbericht en eventueel verzendlogica
            const confirmationMessage = document.createElement('p');
            confirmationMessage.textContent = 'Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.';
            confirmationMessage.className = 'confirmation-message';
            contactForm.appendChild(confirmationMessage);
            contactForm.reset();
        }
    });

    // E-mail validatie functie
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});

