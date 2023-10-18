const menuButton = document.getElementById('menuButton');
const menuList = document.getElementById('menuList');

let isMenuOpen = false;

menuButton.addEventListener('click', () => {
    if (isMenuOpen) {
        menuList.style.display = 'none';

    } else {
        menuList.style.display = 'block';

    }

    isMenuOpen = !isMenuOpen;
});