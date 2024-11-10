let lastScrollY = window.scrollY;
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        footer.classList.add('hidden');
    } else {
        footer.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});
