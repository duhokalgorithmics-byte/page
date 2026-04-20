document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher Logic
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            langBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const targetLang = btn.getAttribute('data-target');
            switchLang(targetLang);
        });
    });

    function switchLang(lang) {
        // Elements with both Arabic and Kurdish versions
        const arElements = document.querySelectorAll('[data-lang="ar"]');
        const kuElements = document.querySelectorAll('[data-lang="ku"]');
        
        if(lang === 'ar') {
            arElements.forEach(el => {
                el.style.display = '';
                // Add a gentle fade-in effect to text switching
                el.style.animation = 'none';
                el.offsetHeight; /* trigger reflow */
                el.style.animation = 'fadeIn 0.5s ease forwards';
            });
            kuElements.forEach(el => el.style.display = 'none');
            document.documentElement.setAttribute('lang', 'ar');
        } else {
            kuElements.forEach(el => {
                el.style.display = '';
                el.style.animation = 'none';
                el.offsetHeight; /* trigger reflow */
                el.style.animation = 'fadeIn 0.5s ease forwards';
            });
            arElements.forEach(el => el.style.display = 'none');
            document.documentElement.setAttribute('lang', 'ku');
        }
    }
    
    // Add dynamic keyframes to head for JS triggered animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
    
    // Simple Scroll Animation trigger (Intersection Observer)
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
