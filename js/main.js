import { createHeader } from './header.js';
import { resetGame } from './game-field.js';



document.addEventListener("DOMContentLoaded", () => {

    const header = createHeader();
    resetGame();


    header.newGameBtn.addEventListener("click", () => {
        resetGame();
        });
    });