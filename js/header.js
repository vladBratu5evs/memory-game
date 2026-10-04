export function createHeader() {

  const header = document.createElement("header");
  header.className = "header";

    const newGameBtn = document.createElement("button");
    newGameBtn.className = "";
    newGameBtn.id = "new-game-btn";
    newGameBtn.textContent = "New Game";

    const leaderboardBtn = document.createElement("button");
    leaderboardBtn.className = "";
    leaderboardBtn.id = "leaderboard-btn";
    leaderboardBtn.textContent = "Leaderboard";

    // const leaderboardContainer = document.createElement("div");
    // leaderboardContainer.className = "leaderboard-container";
    // header.appendChild(leaderboardContainer);



    
    document.body.prepend(header);
    header.appendChild(newGameBtn);
    header.appendChild(leaderboardBtn);

  return { header, newGameBtn, leaderboardBtn };
}