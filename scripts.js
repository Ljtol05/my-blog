// Read More Button Functionality
document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.previousElementSibling;
            if (content.style.display === "none") {
                content.style.display = "inline";
                this.textContent = "Read Less";
            } else {
                content.style.display = "none";
                this.textContent = "Read More";
            }
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

// Lazy Loading Script
document.addEventListener("DOMContentLoaded", function() {
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

    lazyImages.forEach(img => {
        observer.observe(img);
    });
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
