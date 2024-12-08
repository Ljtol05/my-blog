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
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
});