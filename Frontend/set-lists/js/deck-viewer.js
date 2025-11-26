// Loads deck cards into the page

const cardContainer = document.getElementById("card-container");
if (cardContainer) {
  for (let index = 0; index < 10; index++) {
    const card = document.createElement("div");
    card.innerHTML = `<div class="card-item">
          <img src="/set-lists/card-face-test.png" />
        </div>`;
    cardContainer.appendChild(card);
  }
}
