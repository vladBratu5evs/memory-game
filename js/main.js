import { createHeader } from './header.js';
import { resetGame } from './game-field.js';
import { createCounters } from './counters.js';
import { createLeaderboard } from './leaderboard.js';



document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.createElement("div")
    mainContainer.className = "main-container";
    document.body.appendChild(mainContainer);

    const header = createHeader();
    createCounters();
    resetGame();
    createLeaderboard();

    header.newGameBtn.addEventListener("click", () => {
        resetGame();
        });

    header.leaderboardBtn.addEventListener("click", () => {
        const leaderboard = document.querySelector(".leaderboard-container");
        if (leaderboard) {
            leaderboard.classList.toggle("active");
        }
});
    });