// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Back to top button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[placeholder="Your Name"]').value;
    const email = this.querySelector('input[placeholder="Your Email"]').value;
    const subject = this.querySelector('input[placeholder="Subject"]').value;
    const message = this.querySelector('textarea').value;

    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission
    alert('Thank you for your message! I\'ll get back to you soon.');
    this.reset();
});

// Animate skill progress bars on scroll
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.transition = 'width 2s ease-in-out';
                bar.style.width = width;
            }, 200);
        }
    });
}

// Trigger animation on scroll
let animated = false;
window.addEventListener('scroll', function () {
    if (!animated) {
        const skillsSection = document.getElementById('skills');
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            animateProgressBars();
            animated = true;
        }
    }
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add typing effect to hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function () {
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.textContent;
    setTimeout(() => {
        typeWriter(heroTitle, originalText, 100);
    }, 500);
});

//result
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("html_result");
    btn.addEventListener("click", () => {
        // Redirect to project details page
        const projectlink = "htmlresult.png";
        window.open(projectlink, "_blank");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("css_result");
    btn.addEventListener("click", () => {
        // Redirect to project details page
        const projectlink = "cssresult.png";
        window.open(projectlink, "_blank");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("js_result");
    btn.addEventListener("click", () => {
        // Redirect to project details page
        const projectlink = "jsresult1.png";
        
        window.open(projectlink, "_blank");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("bootstrap_result");
    btn.addEventListener("click", () => {
        // Redirect to project details page
        const projectlink = "bootstrap_example.png";
        
        window.open(projectlink, "_blank");
    });
});



