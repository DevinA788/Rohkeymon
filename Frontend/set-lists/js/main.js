const BASE_SET_ONE_UNIQUES = 102
var cardId = 0
let decklist = {}
let count = 0
window.addEventListener('load', function() { 
  const setList=document.getElementById("cardgrid")
    for (cardId; cardId < BASE_SET_ONE_UNIQUES; cardId++){
        const card=document.createElement("div")
        const addToDeck=document.createElement("BUTTON")
        const img=document.createElement("img")
        addToDeck.className='add-to-deck'
        addToDeck.id = `base1-${cardId + 1}`
        const removeFromDeck=document.createElement("BUTTON")
        removeFromDeck.className='remove-from-deck'
        
        addToDeck.addEventListener("click", async (event)=> {
          alert(`Attempting to add base-1, card #${addToDeck.id} to deck...`)
          await addingToDeck(addToDeck.id)
          
          //addingToDecklistTab(event.target.id)
        })
        removeFromDeck.innerText = '-'
        img.src=`https://images.pokemontcg.io/base1/${cardId+1}.png`
        setList.appendChild(card)
        card.className="card-item"
        addToDeck.appendChild(img)
        card.appendChild(addToDeck)
        
        
      }
    // NOTE: innerText for variables.
});

async function addingToDeck(cardId) {
  let decklistId = "44764e09-bf3d-11f0-a784-d8bbc1d9bfc1"; //pass in as arg on 32 from dropdown
  document.getElementById(cardId).disabled = true
  if (!decklist[decklistId]) { // see if id's  in deck, init if not 
    decklist[decklistId] = {};
  } 
  if (!decklist[decklistId][cardId]) {
    decklist[decklistId][cardId] = {count: 0}; 
  }
  /*if (decklist[decklistId][cardId] = {count: 4}) {
    alert("Maximum copies of card added to deck")
    return;
  }*/

  decklist[decklistId][cardId].count = decklist[decklistId][cardId].count + 1
  const response = await fetch("http://localhost:8080/api/add-to-deck", {
    method: "POST",
    headers: {"Content-Type": "application/json",},
    body: JSON.stringify({
      decklist_id: decklistId,
      card_id: cardId,
      card_copies: decklist[decklistId][cardId].count
    }),
  }) 
  if (response.ok) {
    const data = await response.json();
    if (data.card_copies >=4) {
      //document.getElementById(cardId).disabled = true
      alert("Maximum copies of card added to deck")
    }
    //rebuild decklist here if worked. if not, else: decrement card count 
  } else {
    decklist[decklistId][cardId].count -= 1;
  }
  
    document.getElementById(cardId).disabled = false
}


