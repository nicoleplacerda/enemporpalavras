
        // TIMER LOGIC
        function startTimer(duration, display) {
            let timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }

        window.onload = function () {
            const topTimer = document.querySelector('#top-timer');
            if (topTimer) {
                startTimer(14 * 60 + 59, topTimer);
            }
        };

        function toggleFaq(button) {
            const answer = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            // Toggle visibility
            if (answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            } else {
                answer.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        }

        const carousel = document.getElementById('preview-carousel');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const indicator = document.getElementById('carousel-indicator');
        
        let currentSlide = 0;
        const totalSlides = 4;
        const pageNames = [
            "Página 1 de 4: Biologia (Bioquímica e Biologia Molecular)",
            "Página 2 de 4: Química (Química Básica e Separação)",
            "Página 3 de 4: História (Antiguidade e Idade Média)",
            "Página 4 de 4: Geografia (Cartografia e Astronomia)"
        ];

        function updateCarousel() {
            if (!carousel) return;
            const slideWidth = carousel.clientWidth;
            carousel.scrollTo({
                left: slideWidth * currentSlide,
                behavior: 'smooth'
            });
            if (indicator) {
                indicator.textContent = pageNames[currentSlide];
            }
            updateTabs();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateCarousel();
        }

        function updateTabs() {
            const tabs = document.querySelectorAll('.carousel-tab');
            tabs.forEach((tab, idx) => {
                if (idx === currentSlide) {
                    tab.classList.add('ring-2', 'ring-neon-400', 'font-black');
                } else {
                    tab.classList.remove('ring-2', 'ring-neon-400', 'font-black');
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateCarousel();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateCarousel();
            });
        }

        window.addEventListener('scroll', () => {
            const stickyBar = document.getElementById('sticky-mobile-bar');
            if (stickyBar) {
                if (window.scrollY > 400) {
                    stickyBar.classList.remove('translate-y-full');
                } else {
                    stickyBar.classList.add('translate-y-full');
                }
            }
        });

        const names = ["Lucas R.", "Beatriz M.", "Gabriel K.", "Ana Clara P.", "Matheus F.", "Sofia V."];
        const states = ["SP", "RJ", "MG", "PR", "BA", "RS", "PE", "CE"];
        
        function showSocialProof() {
            const toast = document.getElementById('social-proof-toast');
            const text = document.getElementById('social-proof-text');
            if (!toast || !text) return;

            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomState = states[Math.floor(Math.random() * states.length)];

            text.innerHTML = `<strong class="text-neon-400">${randomName}</strong> acabou de adquirir o Guia em ${randomState}!`;

            toast.classList.remove('translate-y-20', 'opacity-0');
            
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 4000);
        }

        // Trigger social proof every 12 seconds
        setInterval(showSocialProof, 12000);
        setTimeout(showSocialProof, 3000);

    
    