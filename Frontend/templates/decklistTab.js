
let decklistButton = document.querySelector('.decklistButton');
let closeDecklist = document.querySelector('.close');
let toggleContainer = document.querySelector('#decklistContainer');

decklistButton.addEventListener('click', () => {
  toggleContainer.classList.toggle('showDecklist');
});

closeDecklist.addEventListener('click', () => {
  toggleContainer.classList.toggle('showDecklist');
});