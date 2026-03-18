
const menu = document.getElementById('menu');
const toggle = document.getElementById('menu-toggle');
let isOpen = false;
const isMobile = () => window.innerWidth < 768;

if (isMobile()) {
    menu.style.display = 'none';
}

toggle.addEventListener('click', () => {
        isOpen = !isOpen;
        menu.style.display = isOpen ? 'flex' : 'none';
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        isOpen = false;
        menu.style.display = 'none';
    }
});

window.addEventListener('resize', () => {
    if (!isMobile()) {
        menu.style.display = '';
        isOpen = false;
    } else if (!isOpen) {
        menu.style.display = 'none';
    }
});
