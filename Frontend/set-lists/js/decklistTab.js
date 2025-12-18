function buildDecklistTab(cards) { 
  /*
  Builds decklist of cards from array of card objects. 
  Card objects should have name and quantity. 
  Returns HTMLDivElement objects representing each card.
  */
  return cards.map(({name: cardName, quantity}) => {
    const pokemonCard = document.createElement("div");
    pokemonCard.className = "pokemonCard";
    /*Can override class name for card(s) in the array if needed. Maybe use this to label energy cards because they can be > 4 copies. 
    if (cardClassName) {
      pokemonCard.classList.add(cardclassName);
    }*/
    const nameDiv = document.createElement("div");
    nameDiv.className = "name";
    nameDiv.innerText = cardName;

    const quantityDiv = document.createElement("div");
    quantityDiv.className = "quantity";
    quantityDiv.innerText = quantity;

    pokemonCard.appendChild(nameDiv);
    pokemonCard.appendChild(quantityDiv);
    return pokemonCard;
  });
}

async function getDecklist() {
  try {
    const response = await fetch("http://localhost:8080/api/decklist");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error('Failed to fetch decklist');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function initializeDecklistTab() {
  let decklistButton = document.querySelector('.decklistButton');
  let closeDecklist = document.querySelector('.close');
  let toggleContainer = document.querySelector('#decklistContainer');

  decklistButton.addEventListener('click', () => {
    toggleContainer.classList.toggle('showDecklist');
  });

  closeDecklist.addEventListener('click', () => {
    toggleContainer.classList.toggle('showDecklist');
  });
};

window.addEventListener("load", function() {
  //click handlers - disable addToDeck button

  initializeDecklistTab();

  //create fetch here to acquire decklist card objects from API

  cards = getDecklist();

  

  document.querySelector(".decklist").append(...buildDecklistTab(cards));

  //click handlers - reenable addToDeck button 
});