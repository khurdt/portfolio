let menu = document.querySelector('.hamburger');
let dropDownMenu = document.querySelector('.menu-drop-down');
let closeIcon = document.querySelector('.menu-close-icon');
let container = document.querySelector('#container');

menu.addEventListener('click', () => {
  toggleMenu();
})

closeIcon.addEventListener('click', () => {
  toggleMenu();
})

function toggleMenu() {
  if (container.classList.contains('remove')) {
    container.classList.remove('remove');
  } else {
    container.classList.add('remove');
  }
}