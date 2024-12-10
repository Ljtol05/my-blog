document.addEventListener("DOMContentLoaded", () => {
    // Read More Button Functionality
    const readMoreBtns = document.querySelectorAll('.read-more-btn');

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.previousElementSibling;
            const isExpanded = content.classList.toggle('expanded');
            btn.textContent = isExpanded ? "Read Less" : "Read More";
        });
    });

    // Scroll to Top Button Functionality
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.onscroll = function() {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    scrollToTopBtn.addEventListener('click', function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });

    // Lazy Loading Images
    if ('IntersectionObserver' in window) {
        console.log("Using IntersectionObserver for lazy loading.");
        
        const lazyImages = document.querySelectorAll('img.lazy');

        const lazyLoad = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        };

        const observer = new IntersectionObserver(lazyLoad);
        lazyImages.forEach(img => {
            observer.observe(img);
        });
    }

    // Dynamic Greeting Functionality
    const dynamicGreeting = document.getElementById('dynamicGreeting');
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    dynamicGreeting.textContent = greeting;

    // Highlight Active Nav Link
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentUrl = window.location.pathname;

    navLinks.forEach(link => {
        if (link.pathname === currentUrl) {
            link.classList.add('active');
        }
    });

    // Toggle Navigation Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links-container');

    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('show');
    });

    // Close Construction Banner
    const closeBannerBtn = document.getElementById('close-banner');
    const constructionBanner = document.getElementById('construction-banner');

    closeBannerBtn.addEventListener('click', () => {
        constructionBanner.style.display = 'none';
    });

    // Form Submission Handling with EmailJS
    const contactForm = document.getElementById('contact-form');
    const emailInput = document.getElementById('reply_to');
    const emailError = document.getElementById('email-error');

    if (contactForm && emailInput && emailError) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Custom Email Validation
            const emailValue = emailInput.value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(emailValue)) {
                emailError.textContent = 'Please enter a valid email address.';
                emailError.style.display = 'block';
                return;
            } else {
                emailError.style.display = 'none';
            }

            // Add static parameters for 'to_name'
            const params = {
                to_name: "Lamon Tolbert Jr", // Replace with your name
            };

            emailjs.sendForm('service_tdto3et', 'template_gcw63ck', contactForm, params)
                .then(() => {
                    alert('Thank you for your message!');
                    contactForm.reset();
                }, (error) => {
                    alert('Failed to send message. Please try again later.');
                    console.error('EmailJS error:', error);
                });
        });
    } else {
        console.error('Form elements not found');
    }

// Custom JavaScript for My Blog

document.addEventListener("DOMContentLoaded", function () {
    // Handle Navbar Toggler for Mobile View
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
  
    if (navbarToggler && navbarCollapse) {
      navbarToggler.addEventListener('click', () => {
        navbarCollapse.classList.toggle('show');
      });
    }
  
    // Example: Triggering a Bootstrap Modal
    const exampleModalTrigger = document.querySelector('#exampleModalTrigger');
    if (exampleModalTrigger) {
      exampleModalTrigger.addEventListener('click', () => {
        const exampleModal = new bootstrap.Modal(document.querySelector('#exampleModal'));
        exampleModal.show();
      });
    }
  
    // Example: Initialize All Tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  
    // Example: Initialize All Popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
});
