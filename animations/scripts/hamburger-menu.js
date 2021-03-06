const menuToggle= document.getElementById('toogle-menu');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('menu-is-open');
    });
}