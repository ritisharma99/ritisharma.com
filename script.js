// Enhanced navigation link hover effects
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 15px rgba(20, 184, 166, 0.6)';
        this.style.transform = 'translateY(-2px)';
        this.style.transition = 'all 0.3s ease';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.textShadow = 'none';
        this.style.transform = 'translateY(0)';
    });
});

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

// Mobile navigation toggle
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 13, 19, 0.95)';
    } else {
        navbar.style.background = 'rgba(31, 27, 36, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .goal-card, .timeline-item, .skill-tag');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Hero title typing animation with HTML support
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Store the original HTML
        const nameSpan = heroTitle.querySelector('.highlight');
        const name = nameSpan ? nameSpan.textContent : 'Riti Sharma';
        
        // Clear the title
        heroTitle.textContent = '';
        
        const prefix = "Hello, I'm ";
        let prefixIndex = 0;
        let nameIndex = 0;
        
        // Type the prefix first
        function typePrefix() {
            if (prefixIndex < prefix.length) {
                heroTitle.textContent += prefix.charAt(prefixIndex);
                prefixIndex++;
                setTimeout(typePrefix, 50);
            } else {
                // Create the span and start typing the name
                const span = document.createElement('span');
                span.className = 'highlight';
                heroTitle.appendChild(span);
                typeName(span);
            }
        }
        
        // Type the name inside the span
        function typeName(span) {
            if (nameIndex < name.length) {
                span.textContent += name.charAt(nameIndex);
                nameIndex++;
                setTimeout(() => typeName(span), 50);
            }
        }
        
        // Start typing after a brief delay
        setTimeout(typePrefix, 500);
    }
});

// Add sparkle effect to buttons
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 6px;
        height: 6px;
        background: radial-gradient(circle, #2DD4BF 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: sparkleAnim 1s ease-out forwards;
    `;
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add sparkle animation CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnim {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Add sparkle effect to primary buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
        btn.style.boxShadow = '0 0 40px rgba(20, 184, 166, 0.6)';
        const rect = btn.getBoundingClientRect();
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const x = rect.left + Math.random() * rect.width;
                const y = rect.top + Math.random() * rect.height;
                createSparkle(x, y);
            }, i * 100);
        }
    });
    
    btn.addEventListener('mouseleave', (e) => {
        btn.style.boxShadow = '0 25px 50px rgba(20, 184, 166, 0.4)';
    });
});

// Add glow effect to secondary buttons
document.querySelectorAll('.btn-secondary').forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
        btn.style.textShadow = '0 0 20px rgba(20, 184, 166, 0.5)';
        btn.style.boxShadow = '0 0 30px rgba(20, 184, 166, 0.5)';
    });
    
    btn.addEventListener('mouseleave', (e) => {
        btn.style.textShadow = 'none';
        btn.style.boxShadow = 'none';
    });
});

// Add interactive effect to profile circle
const profileCircle = document.querySelector('.profile-circle');
if (profileCircle) {
    profileCircle.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.08)';
        this.style.boxShadow = '0 0 60px rgba(20, 184, 166, 0.7)';
    });
    
    profileCircle.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'var(--shadow-glow)';
    });
}

// Form submission handler
document.querySelector('.form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (name && email && message) {
        // Show success message
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        this.reset();
    } else {
        showNotification('Please fill in all fields.', 'error');
    }
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(20, 184, 166, 0.3);
    `;
    
    if (type === 'success') {
        notification.style.background = 'rgba(34, 197, 94, 0.9)';
    } else if (type === 'error') {
        notification.style.background = 'rgba(239, 68, 68, 0.9)';
    } else {
        notification.style.background = 'rgba(139, 92, 246, 0.9)';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.15}px)`;
    }
});

// Add hover effect to skill tags with enhanced animation
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.1)';
        this.style.boxShadow = '0 15px 35px rgba(20, 184, 166, 0.4)';
        this.style.background = 'rgba(20, 184, 166, 0.3)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 20px rgba(20, 184, 166, 0.2)';
        this.style.background = 'rgba(20, 184, 166, 0.15)';
    });
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
        this.style.boxShadow = '0 30px 60px rgba(20, 184, 166, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 20px rgba(20, 184, 166, 0.1)';
    });
});

// Add hover effect to goal cards
document.querySelectorAll('.goal-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
        this.style.boxShadow = '0 30px 60px rgba(20, 184, 166, 0.3)';
        const icon = this.querySelector('.goal-icon');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(10deg)';
            icon.style.transition = 'all 0.3s ease';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 20px rgba(20, 184, 166, 0.1)';
        const icon = this.querySelector('.goal-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Add interactive hover effect to timeline items
document.querySelectorAll('.timeline-content').forEach(content => {
    content.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--primary-teal)';
        this.style.background = 'rgba(20, 184, 166, 0.1)';
        this.style.transform = 'translateX(10px)';
    });
    
    content.addEventListener('mouseleave', function() {
        this.style.borderColor = 'rgba(20, 184, 166, 0.2)';
        this.style.background = 'rgba(31, 27, 36, 0.8)';
        this.style.transform = 'translateX(0)';
    });
});

// Add floating animation to timeline items
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
    item.style.animation = 'fadeInUp 0.8s ease forwards';
});

// Add scroll reveal animation for cards
const scrollRevealElements = document.querySelectorAll('.project-card, .goal-card, .timeline-content, .education-card, .creative-card, .publication-card, .experience-content');
const revealScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            revealScroll.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

scrollRevealElements.forEach(el => revealScroll.observe(el));

// Add hover effects to education cards
document.querySelectorAll('.education-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.education-icon');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(10deg)';
            icon.style.transition = 'all 0.3s ease';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.education-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Add hover effects to creative cards
document.querySelectorAll('.creative-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px) scale(1.02)';
        this.style.boxShadow = '0 30px 60px rgba(20, 184, 166, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 20px rgba(20, 184, 166, 0.1)';
    });
});

// Add hover effects to publication cards
document.querySelectorAll('.publication-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--primary-teal)';
        this.style.transform = 'translateX(15px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'rgba(20, 184, 166, 0.2)';
        this.style.transform = 'translateX(0)';
    });
});

// Add slideInUp animation
const slideInStyle = document.createElement('style');
slideInStyle.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(slideInStyle);

// Add cursor trail effect
let mouseX = 0;
let mouseY = 0;
let isMoving = false;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (!isMoving) {
        isMoving = true;
        createTrail();
        setTimeout(() => {
            isMoving = false;
        }, 50);
    }
});

function createTrail() {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.cssText = `
        position: fixed;
        left: ${mouseX}px;
        top: ${mouseY}px;
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, rgba(20, 184, 166, 0.6) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        animation: trailFade 1s ease-out forwards;
    `;
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 1000);
}

// Add trail fade animation
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trailFade {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
        }
    }
`;
document.head.appendChild(trailStyle);

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-dark);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10001;
        transition: opacity 0.5s ease;
    `;
    
    const spinner = document.createElement('div');
    spinner.style.cssText = `
        width: 50px;
        height: 50px;
        border: 3px solid rgba(20, 184, 166, 0.3);
        border-top: 3px solid var(--primary-teal);
        border-radius: 50%;
        animation: spin 1s linear infinite;
    `;
    
    loader.appendChild(spinner);
    document.body.appendChild(loader);
    
    // Add spin animation
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinStyle);
    
    // Hide loader after a short delay
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1000);
});
