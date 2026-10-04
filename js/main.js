import { createHeader } from './header.js';
import { createGameField } from './game-field.js';



document.addEventListener("DOMContentLoaded", () => {

    const header = createHeader();

    header.newGameBtn.addEventListener("click", () => {
        createGameField ();
    })
});