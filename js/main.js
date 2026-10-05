import { createHeader } from './header.js';
import { resetGame } from './game-field.js';
import { createCounters } from './counters.js';



document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.createElement("div")
    mainContainer.className = "main-container";
    document.body.appendChild(mainContainer);

    const header = createHeader();
    const counters = createCounters();
    resetGame();

    header.newGameBtn.addEventListener("click", () => {
        resetGame();
        });
    });