// ===================================
// PREMIUM APPLE-INSPIRED ANIMATIONS
// Using GSAP for smooth scroll effects
// ===================================

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ===================================
// TYPING ANIMATION
// ===================================
const skills = ["Python, Flask, AI Modeling", "Machine Learning Expert", "Web Development Enthusiast"];
let skillIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function typeSkills() {
    const typingElement = document.querySelector('.typing-text');
    const currentSkill = skills[skillIndex];

    if (isDeleting) {
        typingElement.textContent = currentSkill.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentSkill.substring(0, charIndex + 1);
        charIndex++;
    }

    let timeout = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentSkill.length) {
        timeout = pauseTime;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
    }

    setTimeout(typeSkills, timeout);
}

// ===================================
// HERO ANIMATIONS
// ===================================
function initHeroAnimations() {
    // Animate hero text
    gsap.to('.hero-text', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3
    });

    // Animate hero image
    gsap.to('.hero-image', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6
    });

    // Animate CTA buttons
    gsap.from('.btn', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 1
    });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
function initScrollAnimations() {
    // Animate skill cards
    gsap.utils.toArray('.skill-card').forEach((card, index) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            delay: index * 0.2
        });

        // Animate skill progress bars
        const progressBar = card.querySelector('.skill-progress');
        const progress = progressBar.getAttribute('data-progress');

        ScrollTrigger.create({
            trigger: card,
            start: 'top 70%',
            onEnter: () => {
                gsap.to(progressBar, {
                    width: `${progress}%`,
                    duration: 1.5,
                    ease: 'power3.out'
                });
            }
        });
    });

    // Animate project cards
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            delay: index * 0.2
        });
    });

    // Animate contact cards
    gsap.utils.toArray('.contact-card').forEach((card, index) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            delay: index * 0.2
        });
    });

    // Animate section titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Animate section subtitles
    gsap.utils.toArray('.section-subtitle').forEach(subtitle => {
        gsap.from(subtitle, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: subtitle,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// ===================================
// SMOOTH SCROLL FOR NAVIGATION
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: 'power3.inOut'
                });
            }
        });
    });
}

// ===================================
// NAVBAR BACKGROUND ON SCROLL
// ===================================
function initNavbarScroll() {
    const nav = document.querySelector('.nav');

    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {
            className: 'scrolled',
            targets: nav
        }
    });
}

// ===================================
// PARALLAX EFFECT FOR GRADIENT ORBS
// ===================================
function initParallax() {
    gsap.utils.toArray('.gradient-orb').forEach((orb, index) => {
        gsap.to(orb, {
            y: () => (index + 1) * 100,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    });
}

// ===================================
// MOUSE MOVE PARALLAX
// ===================================
function initMouseParallax() {
    const hero = document.querySelector('.hero');

    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const xPos = (clientX / innerWidth - 0.5) * 20;
        const yPos = (clientY / innerHeight - 0.5) * 20;

        gsap.to('.hero-text', {
            x: xPos,
            y: yPos,
            duration: 0.5,
            ease: 'power2.out'
        });

        gsap.to('.hero-image', {
            x: -xPos,
            y: -yPos,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
}

// ===================================
// PROJECT CARD TILT EFFECT
// ===================================
function initCardTilt() {
    const cards = document.querySelectorAll('.project-card, .skill-card, .contact-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: 'power2.out',
                transformPerspective: 1000
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
}

// ===================================
// INITIALIZE ALL ANIMATIONS
// ===================================
window.addEventListener('DOMContentLoaded', () => {
    // Start typing animation
    setTimeout(typeSkills, 1000);

    // Initialize all animations
    initHeroAnimations();
    initScrollAnimations();
    initSmoothScroll();
    initNavbarScroll();
    initParallax();
    initMouseParallax();
    initCardTilt();

    // Add loading class removal
    document.body.classList.add('loaded');
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Refresh ScrollTrigger on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});
