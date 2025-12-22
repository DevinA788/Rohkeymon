async function getName(card_id) {
  try {
    const response = await fetch(`https://api.tcgdex.net/v2/en/cards/${card_id}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data.name);
      return data.name;
    } else {
      throw new Error('Failed to fetch decklist');
    }
  } catch (error) {
    console.error(error);
  }
}

function buildDecklistTab(cards) { 
  /*
  Builds decklist of cards from array of card objects. 
  Card objects should have name and quantity. 
  Returns HTMLDivElement objects representing each card.
  */
  return cards.map(({card_copies, card_id, card_name}) => {
    const pokemonCard = document.createElement("div");
    pokemonCard.className = "pokemonCard";
    /*Can override class name for card(s) in the array if needed. Maybe use this to label energy cards because they can be > 4 copies. 
    if (cardClassName) {
      pokemonCard.classList.add(cardclassName);
    }*/
    const nameDiv = document.createElement("div");
    nameDiv.className = "name";
    nameDiv.innerText = card_name;

    const copiesDiv = document.createElement("div");
    copiesDiv.className = "copies";
    copiesDiv.innerText = card_copies;

    const addToDeck = document.createElement("BUTTON")
    addToDeck.innerText = '+'
    addToDeck.className='add-to-deck'
    addToDeck.id = card_id;

    /*const removeFromDeck = document.createElement("BUTTON")
    removeFromDeck.innerText = '-'
    removeFromDeck.className='remove-from-deck'
    removeFromDeck.id = card_id;*/
    
    pokemonCard.appendChild(nameDiv);
    pokemonCard.appendChild(copiesDiv);
    pokemonCard.appendChild(addToDeck);
    //pokemonCard.appendChild(removeFromDeck);
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

  
  data = await getDecklist();

  //figure out how to parse card_id into the actual card name e.g. pikachu
  //figure out how to get decklist to show contents without needing to refresh page. 

  const cards = await Promise.all(
    data.map(async (card) => {
      const cardName = await getName(card.card_id);
      return {
        ...card, //Instead of returning properties manually, allows new properties to be added later on
        card_name: cardName
      };
    })
  );
  console.log(cards);
//write loop that goes through each element and grabs the card_id attribute so it can be put into the above getName API call.
//Somehow replace the returned Pokemon Name from the api call in the JSON, then plug that into buildDecklistTab(). 
  

  document.querySelector(".decklist").append(...buildDecklistTab(cards));

  //click handlers - reenable addToDeck button 
});

