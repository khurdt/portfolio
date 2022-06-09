let header = document.querySelector('.page-header')
let nav = document.querySelector('.navBar');
let menu = document.querySelector('.hamburger');
let dropDownMenu = document.querySelector('.menu-drop-down');

if (window.innerWidth <= 600) {
  nav.style.display = 'none';
  menu.style.display = 'block';
}

menu.addEventListener('click', () => {
  toggleMenu();
})

function toggleMenu() {
  if (dropDownMenu.classList.contains('display')) {
    dropDownMenu.classList.remove('display');
  } else {
    dropDownMenu.classList.add('display');
  }
}
