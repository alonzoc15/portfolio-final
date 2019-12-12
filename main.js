const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.icon1')
    const navLinks = document.querySelectorAll('.icon1 a')
    
    burger.addEventListener('click', () => {
        // toggle Nav
        nav.classList.toggle('icon1-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
    
}

navSlide();