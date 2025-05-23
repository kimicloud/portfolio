// Typewriter Effect
const typewriterText = [
    "An AI/ML Enthusiast",
    "A Full Stack Developer", 
    "A Tech Innovator"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterElement = document.getElementById('typewriter');

function typeWriter() {
    const currentText = typewriterText[textIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typewriterText.length;
        typeSpeed = 500; // Pause before next word
    }
    
    setTimeout(typeWriter, typeSpeed);
}

// Start typewriter effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeWriter, 1000);
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth Scrolling for Navigation Links
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

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(12, 30, 43, 0.98)';
    } else {
        navbar.style.background = 'rgba(12, 30, 43, 0.95)';
    }
});

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements that should animate
const animateElements = document.querySelectorAll('.skill-category, .project-card, .experience-item, .about-content, .contact-content');
animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Read More Functionality
document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        const hiddenContent = document.getElementById(target);
        const icon = this.querySelector('i');
        
        if (hiddenContent.classList.contains('show')) {
            hiddenContent.classList.remove('show');
            this.innerHTML = 'Read More <i class="fas fa-chevron-down"></i>';
            this.classList.remove('active');
        } else {
            hiddenContent.classList.add('show');
            this.innerHTML = 'Read Less <i class="fas fa-chevron-up"></i>';
            this.classList.add('active');
        }
    });
});

// Contact Form Handling
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (name && email && message) {
        // Here you would typically send the data to a server
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Floating Elements Animation Enhancement
function createFloatingElements() {
    const floatingContainer = document.querySelector('.floating-elements');
    const icons = ['fas fa-code', 'fas fa-brain', 'fas fa-database', 'fas fa-cloud', 'fas fa-mobile-alt', 'fas fa-rocket', 'fas fa-laptop-code', 'fas fa-cogs'];
    
    // Create additional floating elements
    for (let i = 0; i < 3; i++) {
        const element = document.createElement('div');
        element.className = 'floating-icon';
        element.innerHTML = `<i class="${icons[Math.floor(Math.random() * icons.length)]}"></i>`;
        
        // Random positioning
        element.style.top = Math.random() * 100 + '%';
        element.style.left = Math.random() * 100 + '%';
        element.style.animationDelay = Math.random() * 6 + 's';
        element.style.animationDuration = (Math.random() * 4 + 4) + 's';
        
        floatingContainer.appendChild(element);
    }
}

// Particle Effect on Mouse Move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.98) { // Only create particles occasionally
        createParticle(e.clientX, e.clientY);
    }
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = '#4a90a4';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1000';
    particle.style.opacity = '0.7';
    
    document.body.appendChild(particle);
    
    // Animate particle
    const animation = particle.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 0.7 },
        { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0)`, opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    });
    
    animation.onfinish = () => particle.remove();
}

// Skills Animation on Hover
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    skill.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Project Cards Tilt Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
});

// Initialize additional floating elements
document.addEventListener('DOMContentLoaded', createFloatingElements);

// Lazy Loading for Images
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Theme Toggle (Optional Enhancement)
function createThemeToggle() {
    const toggle = document.createElement('button');
    toggle.innerHTML = '<i class="fas fa-moon"></i>';
    toggle.className = 'theme-toggle';
    toggle.style.cssText = `
        position: fixed;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        background: rgba(74, 144, 164, 0.8);
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        color: white;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    `;
    
    toggle.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(74, 144, 164, 1)';
        this.style.transform = 'translateY(-50%) scale(1.1)';
    });
    
    toggle.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(74, 144, 164, 0.8)';
        this.style.transform = 'translateY(-50%) scale(1)';
    });
    
    document.body.appendChild(toggle);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add entrance animations with delays
    const elements = document.querySelectorAll('.hero-content > *');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});

// Performance optimization
let ticking = false;

function updateOnScroll() {
    // Your scroll-based animations here
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// Add CSS for loaded state
const style = document.createElement('style');
style.textContent = `
    .loaded .hero-content > * {
        animation-play-state: running;
    }
    
    img {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    img.loaded {
        opacity: 1;
    }
    
    .theme-toggle:hover {
        box-shadow: 0 0 20px rgba(74, 144, 164, 0.5);
    }
`;
document.head.appendChild(style);

console.log('Portfolio loaded successfully! 🚀');