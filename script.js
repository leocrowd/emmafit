document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        mainNav.classList.toggle('is-active');
    });

    // Close mobile nav when a link is clicked
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('is-active')) {
                hamburger.classList.remove('is-active');
                mainNav.classList.remove('is-active');
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize ScrollReveal
    ScrollReveal().reveal('.reveal', {
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        opacity: 0,
        easing: 'ease-in-out',
        interval: 100,
        mobile: true,
        viewFactor: 0.2
    });

    // Basic form submission (for demonstration)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Form Submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // In a real application, you would send this data to a server
            // For now, we'll just clear the form and give a simple feedback
            alert('Thank you for your message! Emma will get back to you soon.'); // Using alert for simplicity as per instructions, but would use a custom modal in production.
            contactForm.reset();
        });
    }
});
