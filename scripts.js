// Read More Button Functionality
document.addEventListener("DOMContentLoaded", () => {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.previousElementSibling;
            const isExpanded = content.classList.toggle('expanded');
            btn.textContent = isExpanded ? "Read Less" : "Read More";
        });
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

document.addEventListener("DOMContentLoaded", function() {
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

        const observer = new IntersectionObserver(lazyLoad, {
            rootMargin: "0px 0px 50px 0px",
            threshold: 0.01
        });

        lazyImages.forEach(img => observer.observe(img));
    } else {
        // Fallback for browsers that do not support IntersectionObserver
        console.log("IntersectionObserver not supported. Loading all images immediately.");
        
        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => {
            img.src = img.dataset.src; // Load the actual image
            img.classList.remove('lazy'); // Remove lazy class
        });
    }
});

// Dynamic Greeting Script
document.addEventListener("DOMContentLoaded", function() {
    const dynamicGreeting = document.getElementById('dynamicGreeting');
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning";
    } else if (hours < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    dynamicGreeting.textContent = greeting + ", welcome to my blog!";
});

// Highlight Active Navigation Link
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentUrl = window.location.href;
    navLinks.forEach(link => {
        if (link.href === currentUrl) {
            link.style.color = "#ffffff"; // Highlight active link
            link.style.fontWeight = "bold";
            link.style.borderBottom = "2px solid #00d4ff"; // Add a bottom border
        }
    });
});
