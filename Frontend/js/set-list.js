let testDeckList = [];

window.addEventListener('click', (event) => {
  let positionClick = event.target;
  if(positionClick.classList.contains('add-to-deck')){
    alert('hey, you pressed the button');
  }
})

const getID = () => {
  // get data from base-1 json
  fetch('base-1.json')
  .then(response => response.json())
  .then(data => {
    testDeckList = data;
    console.log("I see the base-1.json")
    console.log(testDeckList);
  })
}

getID();