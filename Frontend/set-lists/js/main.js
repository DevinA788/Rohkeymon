const BASE_SET_ONE_UNIQUES = 102
var cardId = 0

window.addEventListener('load', function() { 
  const setList=document.getElementById("cardgrid")
    for (cardId; cardId < BASE_SET_ONE_UNIQUES; cardId++){
        const card=document.createElement("div")
        const img=document.createElement("img")
        const addToDeck=document.createElement("BUTTON")
        addToDeck.className='add-to-deck'
        addToDeck.id = cardId + 1  
        const removeFromDeck=document.createElement("BUTTON")
        removeFromDeck.className='remove-from-deck'
        addToDeck.innerText = '+'
        // addToDeck.addEventListener("click", addingToDeck) //When you don't specify paraenthesis - passing e into function
        addToDeck.addEventListener("click", async (event)=>addingToDeck(event.target.id))
          // alert(`Pokemon card #${e.target.id}`)
          
     
          
        removeFromDeck.innerText = '-'
        img.src=`https://images.pokemontcg.io/base1/${cardId+1}.png`

        card.className="card-item"
        card.appendChild(addToDeck)
        card.appendChild(removeFromDeck)
        card.appendChild(img)
        setList.appendChild(card)
      }
    // NOTE: innerText for variables.
});

async function addingToDeck(id) {
  //document.getElementById(event.target.id).disabled = true
  const response = await fetch("http://localhost:8080/Rohkeymon/add-to-deck")
  method: "POST"
  body: JSON.stringify({
    card_copies: "1",
    card_id: `base1-${id}`,
    decklist_id: "44764e09-bf3d-11f0-a784-d8bbc1d9bfc1",
    decklist_order: "6"
  })

  if (!response.ok) {
    const message = `There was a problem: Error ${response.status}`
    throw new Error(message)
  }

  //document.getElementById(event.target.id).disabled = false
}


/*async function addingToDeck(id) {
  //Disable button
  await fetch(`https://api.pokemontcg.io/v2/cards/base1/${cardId}`).then(r=r.json()).then(data=>{
    console.log(data)
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  }).finally(()=>{
    // TODO: Add alert
    alert(`Pokemon card #${event.target.id}`)
    //Reenable Button
  })
}*/