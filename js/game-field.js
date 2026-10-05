function createGameField () {

    const fieldContainer = document.createElement("div");
    fieldContainer.className = "game-field";

    for (let i=1; i <= 16; i++) {
        const cardItem = document.createElement("div");
        cardItem.className = "card";
        cardItem.addEventListener('click', () => handleCardClick(cardItem));
        fieldContainer.appendChild(cardItem);
    }
    document.body.appendChild(fieldContainer);
    return fieldContainer;
}

function shuffleCards() {
const mainCards = [
    'assets/cards/acdc.png',
    'assets/cards/gojira.png',
    'assets/cards/korn.png',
    'assets/cards/metallica.png',
    'assets/cards/rammstein.png',
    'assets/cards/slipknot.png',
    'assets/cards/soad.png',
    'assets/cards/varangnord.png',
];

let deck = [...mainCards, ...mainCards];

for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  } return deck;
}

export function assignShuffledCards(deck) {
const cardElements = document.querySelectorAll('.card');
cardElements.forEach((cardItem, i) => {
    cardItem.dataset.value = deck[i];
    const imgElement = document.createElement('img');
    imgElement.src = deck[i];
    imgElement.alt = "band logo";
    imgElement.classList.add('bands');
    cardItem.appendChild(imgElement);
});
}

let flippedCards = [];

function handleCardClick(cardItem) {
  if (cardItem.classList.contains('isHidden') || cardItem.classList.contains('isClicked') || flippedCards.length >= 2) {
      return;
  }

  cardItem.classList.add('isClicked');
  flippedCards.push(cardItem);

  if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards;

      if (card1.dataset.value === card2.dataset.value) {
          setTimeout(() => {
              card1.classList.add('isHidden');
              card2.classList.add('isHidden');
              flippedCards = [];
          }, 600);
      } else {
          setTimeout(() => {
              card1.classList.remove('isClicked');
              card2.classList.remove('isClicked');
              flippedCards = [];
          }, 1000);
      }
  }
}



export function resetGame() {
    if (document.querySelector(".game-field")) {
        document.querySelector(".game-field").remove();
    }
    flippedCards = [];
    createGameField();
    const newDeck = shuffleCards();
    assignShuffledCards(newDeck)
}

