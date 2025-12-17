document.querySelector('#decklistContainer');

const deckUUID = "44764e09-bf3d-11f0-a784-d8bbc1d9bfc1" //Temporarily hardcoded until users can be set-up. 

fetch("/templates/decklistTab.template.html?v=1").then(r=>r.text()).then(d=>{
  //console.log(d); /*Subject to CSS if user input is introduced*/
  document.getElementById("decklistContainer").innerHTML=d;
  // NOTE: innerText for variables.
  initializeDecklistTab();
  showDecklist();
});



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

function showDecklist(deckUUID) {
  const response = await fetch("http://localhost:8080/api/alldata", {
    method: "GET",
    headers: {"Content-Type": "application/json",},
    body: JSON.stringify({
      card_copies: "1",
      card_id: `base1-${id}`,
      decklist_id: "44764e09-bf3d-11f0-a784-d8bbc1d9bfc1"
    }),
  })
}
