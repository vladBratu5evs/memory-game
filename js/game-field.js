export function createGameField () {

    const fieldContainer = document.createElement("div");
    fieldContainer.className = "game-field";

    for (let i=1; i <= 16; i++) {
        const cardItem = document.createElement("div");
        cardItem.className = "card";
        fieldContainer.appendChild(cardItem);
    }
    document.body.appendChild(fieldContainer);
    return fieldContainer;
}