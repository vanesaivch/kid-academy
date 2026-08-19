// Home Page flipping cards
function flipCard(card) {
    card.classList.toggle("flipped");
}

const cards = document.querySelectorAll(".game1-container, .game2-container");

cards.forEach(card => {
    card.addEventListener("click", () => {
        flipCard(card);
    });
});