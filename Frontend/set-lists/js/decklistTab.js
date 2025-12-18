function buildDecklistTab(cards = [{name: "Haunter", quantity: 2}]) { 
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

  const cards = [
    {name: "Pikachu", quantity: 2},
    {name: "Charizard", quantity: 1},
    {name: "Bulbasaur", quantity: 3},
    {name: "Water Energy", quantity: 10, cardClassName: "energyCard"},
    {name: "Super Potion", quantity: 4, cardClassName: "trainerCard"} 
  ];

  document.querySelector(".decklist").append(...buildDecklistTab(cards));

  //click handlers - reenable addToDeck button 
});