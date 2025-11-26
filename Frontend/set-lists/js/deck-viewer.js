// Loads deck cards into the page

const MAX_CARDS = 10;

const cardContainer = document.getElementById("card-container");
if (cardContainer) {
  for (let index = 0; index < MAX_CARDS; index++) {
    const card = document.createElement("div");
    card.innerHTML = `<div class="card-item">
          <img src="/set-lists/card-face-test.png" />
        </div>`;
    cardContainer.appendChild(card);
  }
}
