export function createLeaderboard() {

const leaderboard = document.createElement("div");
const mainContainer = document.querySelector(".main-container");
leaderboard.className = "leaderboard-container";
mainContainer.appendChild(leaderboard);

for (let i=1; i <= 10; i++) {
        const position = document.createElement("div");
        position.className = "line";
        position.textContent = `${i}. _____________________________________`;
        leaderboard.appendChild(position);
}
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  leaderboard.appendChild(closeButton);
  closeButton.addEventListener("click", () => {
    leaderboard.className = "leaderboard-container";
  });
return leaderboard;
}
