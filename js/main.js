const burgerButton = document.querySelector('.burger-button');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active');
});
window.addEventListener('resize', () => (this.window.innerWidth > 768 ? burgerButton.classList.remove('active') : null));