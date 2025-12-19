function buildDecklistTab() { 
  /*
  Builds decklist of cards from array of card objects. 
  Card objects should have name and quantity. 
  Returns HTMLDivElement objects representing each card.
  */
  return cards.map(({card_copies, card_id}) => {
    const pokemonCard = document.createElement("div");
    pokemonCard.className = "pokemonCard";
    /*Can override class name for card(s) in the array if needed. Maybe use this to label energy cards because they can be > 4 copies. 
    if (cardClassName) {
      pokemonCard.classList.add(cardclassName);
    }*/
    const nameDiv = document.createElement("div");
    nameDiv.className = "name";
    nameDiv.innerText = card_id;

    const copiesDiv = document.createElement("div");
    copiesDiv.className = "copies";
    copiesDiv.innerText = card_copies;
    
    pokemonCard.appendChild(nameDiv);
    pokemonCard.appendChild(copiesDiv);
    return pokemonCard;
  });
}

async function getDecklist() {
  try {
    const response = await fetch("http://localhost:8080/api/decklist");
    if (response.ok) {
      const data = await response.json();
      //console.log(data);
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

window.addEventListener("load", async function() {
  //click handlers - disable addToDeck button

  initializeDecklistTab();

  //create fetch here to acquire decklist card objects from API

  
  cards = await getDecklist();

  //figure out how to parse card_id into the actual card name e.g. pikachu
  //figure out how to get decklist to show contents without needing to refresh page. 

  console.log(cards);

  

  document.querySelector(".decklist").append(...buildDecklistTab(cards));

  //click handlers - reenable addToDeck button 
});