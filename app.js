const close = document.createElement('img');
const navBar = document.querySelector('.navbar');
const menuIcon = document.querySelector('.menu');
const subMenuIcon = document.querySelector('.nav-bar-list-icon');
const navBarText = document.querySelectorAll('.nav-bar-list');

function menuPopUp() {
  navBar.classList.remove('navbar');
  navBar.classList.add('Phone-menu-section');
  menuIcon.classList.add('vanish');
  subMenuIcon.classList.add('vanish');
  navBarText.forEach((element) => element.classList.add('Phone-menu-section-text'));
  close.src = './images/close-icon.png';
  close.classList.add('close');
  navBar.prepend(close);
  close.classList.remove('vanish');
}

function menuCloseUp() {
  navBar.classList.add('navbar');
  navBar.classList.remove('Phone-menu-section');
  menuIcon.classList.remove('vanish');
  subMenuIcon.classList.remove('vanish');
  navBarText.forEach((element) => element.classList.remove('Phone-menu-section-text'));
  close.classList.add('vanish');
}

menuIcon.addEventListener('click', menuPopUp);
close.addEventListener('click', menuCloseUp);
navBarText.forEach((element) => {
  element.addEventListener('click', menuCloseUp);
});
