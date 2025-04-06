// Menu Mobile Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile toggle - Mantido pois o toggle está no HTML
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Header scroll effect - Mantido pois é usado no CSS (.scrolled)
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Configuração do Particles.js - Mantido pois é chamado no HTML
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00E396"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
            },
            "opacity": {
                "value": 0.5,
                "random": true,
            },
            "size": {
                "value": 3,
                "random": true,
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00E396",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "out_mode": "out",
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
        },
        "retina_detect": true
    });

    // Configuração do Typed.js - Mantido pois é chamado no HTML
    var typed = new Typed('.typing-text', {
        strings: ['construção civil', 'engenharia', 'arquitetura', 'infraestrutura'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    });
    
    // Configuração do Intersection Observer para animar elementos quando visíveis
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    // Observer para textos na seção About - Mantido pois as classes são usadas no CSS
    const aboutTextObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Adicionar classe para animação em parágrafos da seção About
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    aboutParagraphs.forEach((paragraph, index) => {
        paragraph.classList.add('reveal-animation');
        paragraph.style.transitionDelay = `${index * 0.2}s`;
        aboutTextObserver.observe(paragraph);
    });

    // Observer para cards de serviços - Mantido pois as classes são usadas no CSS
    const serviceCardsObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer para itens de lista dentro dos cards de serviço - Mantido pois são usadas no CSS
    const serviceListObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const listItems = entry.target.querySelectorAll('.service-features li');
                listItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('active');
                    }, index * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todos os cards de serviço expandidos
    const expandedCards = document.querySelectorAll('.expanded-card');
    expandedCards.forEach(card => {
        serviceListObserver.observe(card);
    });

    // Observar todos os cards de serviço
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        serviceCardsObserver.observe(card);
    });

    // Observer para elementos de contato - Mantido pois as classes são usadas no CSS
    const contactObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar lista de contatos e links sociais
    const contactDetails = document.querySelector('.contact-details');
    const socialLinks = document.querySelector('.social-links');
    
    if (contactDetails) contactObserver.observe(contactDetails);
    if (socialLinks) contactObserver.observe(socialLinks);

    // Efeito de pulso no rodapé - Mantido pois é aplicado ao footer
    const footer = document.querySelector('footer');
    if (footer) {
        window.addEventListener('scroll', function() {
            const windowHeight = window.innerHeight;
            const footerRect = footer.getBoundingClientRect();
            
            if (footerRect.top < windowHeight) {
                const opacity = 1 - (footerRect.top / windowHeight);
                footer.style.borderTop = `1px solid rgba(0, 227, 150, ${opacity * 0.3})`;
            }
        });
    }
});