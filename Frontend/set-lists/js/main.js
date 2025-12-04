window.addEventListener('load', function() { 
  const setList=document.getElementById("cardgrid")
    for (let i = 1; i < 103; i++){ //102 unique cards in base set 1 
        const card=document.createElement("div")
        const img=document.createElement("img")
        const addToDeck=document.createElement("BUTTON")
        addToDeck.className='add-to-deck'
        const removeFromDeck=document.createElement("BUTTON")
        removeFromDeck.className='remove-from-deck'
        addToDeck.innerText = '+'
        removeFromDeck.innerText = '-'
        img.src=`https://images.pokemontcg.io/base1/${i}.png`
        card.className="card-item"
        card.appendChild(addToDeck)
        card.appendChild(removeFromDeck)
        card.appendChild(img)
        setList.appendChild(card)
      }
    // NOTE: innerText for variables.
});

//<div class="card-item">
//<img src="https://images.pokemontcg.io/xy1/1.png" width="100" />
//</div>