function buildDecklistTab() {
    /*
    Builds decklist of cards from array of card objects. 
    Card objects should have name and quantity. 
    Returns HTMLDivElement objects representing each card.
    */
    const pokemonCard = document.createElement("div");
    pokemonCard.className = "pokemonCard";
    /*Can override class name for card(s) in the array if needed. Maybe use this to label energy cards because they can be > 4 copies. 
    if (cardClassName) {
    pokemonCard.classList.add(cardclassName);
    }*/
    const nameDiv = document.createElement("div");
    nameDiv.className = "name";
    nameDiv.innerText = "Alolan Exeggutor";


    const copiesDiv = document.createElement("div");
    copiesDiv.className = "copies";
    copiesDiv.innerText = "4";

    const addToDeck = document.createElement("BUTTON");
    addToDeck.innerText = '+';
    addToDeck.className = 'add-to-deck';


    const removeFromDeck = document.createElement("BUTTON");
    removeFromDeck.innerText = '-';
    removeFromDeck.className = 'remove-from-deck';

    const deleteFromDeck = document.createElement("BUTTON");
    const deleteImg = document.createElement("img");
    deleteImg.src = "./assets/trashcan.png";
    deleteFromDeck.appendChild(deleteImg);
    deleteFromDeck.className = 'delete-from-deck';



    pokemonCard.appendChild(nameDiv);
    pokemonCard.appendChild(addToDeck);
    pokemonCard.appendChild(copiesDiv);
    pokemonCard.appendChild(removeFromDeck);
    pokemonCard.appendChild(deleteFromDeck);

    return pokemonCard;
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

window.addEventListener("load", async function () {
    //TODO: click handlers - disable addToDeck button

    initializeDecklistTab();



    //TODO: figure out how to get decklist to show contents without needing to refresh page. 






    document.querySelector(".decklist").append(buildDecklistTab());
});
//TODO: click handlers - reenable addToDeck button 

