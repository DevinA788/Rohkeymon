
let decklistButton = document.querySelector('.decklistButton');
let closeDecklist = document.querySelector('.close')
let body = document.querySelector('body');

decklistButton.addEventListener('click', () => {
  body.classList.toggle('showDecklist');
});

closeDecklist.addEventListener('click', () => {
  body.classList.toggle('showDecklist');
});