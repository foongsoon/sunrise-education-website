// ==================== MOBILE MENU FUNCTIONALITY ====================
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('a[href^="#"]');

    // Toggle mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // ==================== SMOOTH SCROLLING ====================
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // ==================== CONTACT FORM ====================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                childName: document.getElementById('child-name').value,
                ageRange: document.getElementById('age-range').value,
                message: document.getElementById('message').value
            };

            // Validate form
            if (!formData.name || !formData.email || !formData.message) {
                alert('Please fill in all required fields');
                return;
            }

            // Show success message (in production, this would send to backend)
            console.log('Form submitted:', formData);
            
            // Create mailto link for email submission
            const subject = `Inquiry from ${formData.name} - Sunrise Education`;
            const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AChild's Name: ${formData.childName}%0D%0AAge Range: ${formData.ageRange}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
            
            window.location.href = `mailto:LOVE@sun.edu.my?subject=${encodeURIComponent(subject)}&body=${body}`;

            // Reset form
            contactForm.reset();
            alert('Thank you! Your message has been sent. We will respond within 24 hours.');
        });
    }

    // ==================== SMOOTH SCROLL ANIMATION ====================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.curriculum-card, .why-card, .contact-method').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ==================== NAVBAR SHADOW ON SCROLL ====================
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
    });

    // ==================== HERO BUTTON INTERACTIONS ====================
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ==================== ACTIVE LINK HIGHLIGHTING ====================
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // ==================== FORM INPUT INTERACTIONS ====================
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#FF6B6B';
            this.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.1)';
        });
        input.addEventListener('blur', function() {
            this.style.borderColor = '#E0E0E0';
            this.style.boxShadow = 'none';
        });
    });

    // ==================== SCROLL TO TOP BUTTON ====================
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #FF6B6B;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 24px;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
    `;

    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'flex';
            scrollButton.style.alignItems = 'center';
            scrollButton.style.justifyContent = 'center';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    scrollButton.addEventListener('mouseenter', function() {
        this.style.background = '#E63946';
        this.style.transform = 'scale(1.1)';
    });

    scrollButton.addEventListener('mouseleave', function() {
        this.style.background = '#FF6B6B';
        this.style.transform = 'scale(1)';
    });

    // ==================== PAGE LOAD ANIMATION ====================
    window.addEventListener('load', () => {
        document.body.style.animation = 'fadeIn 0.5s ease-in';
    });

    // ==================== PRINT STYLES ====================
    const style = document.createElement('style');
    style.innerHTML = `
        @media print {
            .navbar, .hero-buttons, .footer { display: none; }
            body { color: #000; background: #fff; }
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .nav-link.active {
            color: #FF6B6B;
            font-weight: 700;
        }

        .nav-link.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);

    // ==================== PRELOAD IMAGES ====================
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.src;
        document.head.appendChild(link);
    });

    // ==================== ACCESSIBILITY IMPROVEMENTS ====================
    // Add ARIA labels
    const buttons = document.querySelectorAll('button');
    buttons.forEach((btn, index) => {
        if (!btn.getAttribute('aria-label')) {
            btn.setAttribute('aria-label', `Button ${index + 1}`);
        }
    });

    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#about';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: #000;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 100;
    `;
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);

    console.log('Sunrise Education Website Loaded Successfully');
    console.log('Language:', i18n?.currentLanguage || 'not initialized');
});