        // Inicializar AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease',
    once: false,      // 🔥 permite animar cada vez que se hace scroll
    mirror: true      // 🔥 anima también al hacer scroll hacia arriba
});

        
        // Navbar scroll effect
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            AOS.refresh();
        });

        
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.querySelector('.nav-links').classList.remove('active');
                    document.querySelector('.overlay').classList.remove('active');
                }
            });
        });
        
        // Scroll down button
        document.querySelector('.scroll-down').addEventListener('click', () => {
            window.scrollTo({
                top: document.querySelector('#bienvenida').offsetTop - 80,
                behavior: 'smooth'
            });
        });
        
        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const closeMenu = document.querySelector('.close-menu');
        const overlay = document.querySelector('.overlay');
        
        function toggleMenu() {
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
        }
        
        hamburger.addEventListener('click', toggleMenu);
        closeMenu.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
        
        // WhatsApp button functionality
        document.getElementById('whatsapp-btn').addEventListener('click', () => {
            const phone = '573165796846';
            const message = 'Hola, deseo recibir orientación espiritual 🙏✨';
            
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });

        
        // Contact buttons
        document.querySelectorAll('.contact-btn').forEach(button => {
            button.addEventListener('click', function() {
                const phone = '573165796846'; // tu número
                const service = this.getAttribute('data-service');
                
                const message = `Hola, estoy interesado en el servicio de ${service} 🌿`;
                const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                
                window.open(url, '_blank');
            });
        });

        
        // Mystical background animation
        const mysticalBg = document.querySelector('.mystical-bg');
        for (let i = 0; i < 15; i++) {
            const span = document.createElement('span');
            span.style.left = `${Math.random() * 100}%`;
            span.style.top = `${Math.random() * 100}%`;
            span.style.animationDelay = `${Math.random() * 5}s`;
            span.style.animationDuration = `${15 + Math.random() * 10}s`;
            span.style.opacity = Math.random() * 0.5 + 0.1;
            span.style.transform = `scale(${Math.random() * 2})`;
            mysticalBg.appendChild(span);
        }