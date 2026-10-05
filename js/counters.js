let movesCount = 0;
let pairsCount = 0;

export let moveCounterElement = null;
export let pairCounterElement = null;

export function createCounters() {

const counterContainer = document.createElement("div")
counterContainer.className = "counter-container";

const moveCounter = document.createElement("div")
moveCounter.className = "move-counter counter";
moveCounter.textContent = `Moves: ${movesCount}`;

const pairCounter = document.createElement("div")
pairCounter.className = "pair-counter counter";
pairCounter.textContent = `Opened pairs: ${pairsCount}`;

document.querySelector(".main-container").appendChild(counterContainer);
counterContainer.appendChild(moveCounter);
counterContainer.appendChild(pairCounter);

moveCounterElement = moveCounter;
pairCounterElement = pairCounter;

return { moveCounter, pairCounter };
}

export function addMove() {
  movesCount++;
  if (moveCounterElement) {
    moveCounterElement.textContent = `Moves: ${movesCount}`;
  }
}

export function addPair() {
  pairsCount++;
  if (pairCounterElement) {
    pairCounterElement.textContent = `Opened pairs: ${pairsCount}`;
  }


  if (pairsCount === 8) {
    setTimeout(() => {
        showVictoryModal();
    }, 500);
}
}

export function showVictoryModal() {
  const modal = document.createElement("div");
  modal.className = "victory-modal";
  document.body.appendChild(modal);

  const modalMessage = document.createElement("div");
  modalMessage.className = "modal-message";
  modalMessage.textContent = `Congratulations! You won in ${movesCount} moves!`;
  modal.appendChild(modalMessage);

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  modal.appendChild(closeButton);
  closeButton.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
}

export function resetCounters() {
  movesCount = 0;
  pairsCount = 0;
  if (moveCounterElement) {
    moveCounterElement.textContent = `Moves: ${movesCount}`;
  }
  if (pairCounterElement) {
    pairCounterElement.textContent = `Opened pairs: ${pairsCount}`;
  }
}