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
    /*addToDeck.addEventListener("click", async (event)=> {
      await incrementCopies(addToDeck.id)
      alert(`Added base-1, card #${addToDeck.id} to deck.`)
      //addingToDecklistTab(event.target.id)
    })*/

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
  //TODO: click handlers - disable addToDeck button

  initializeDecklistTab();

  decklist = await getDecklist(); //This fetch gets decklist card objects from API

  //TODO: figure out how to get decklist to show contents without needing to refresh page. 

  const cards = await Promise.all(
    decklist.map(async (card) => {
      const cardName = await getName(card.card_id);
      return {
        ...card, //Instead of returning properties manually, allows new properties to be added later on
        card_name: cardName
      };
    })
  );
  console.log(cards);
  
  document.querySelector(".decklist").append(...buildDecklistTab(cards));

  //TODO: click handlers - reenable addToDeck button 
});

//TODO: decklist tab addToDeck button, different from set-list add to deck button. currently this is appending a new card object to the end of the decklist. All we want here is to increase quantity.
/*async function incrementCopies(id) {
  document.getElementById(id).disabled = true
  
  const response = await fetch("http://localhost:8080/api/add-to-deck", {
    method: "POST",
    headers: {"Content-Type": "application/json",},
    body: JSON.stringify({
      card_copies: "1",
    }),
  })
  
  
    document.getElementById(id).disabled = false
  
}*/