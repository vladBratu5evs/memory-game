export function createHeader() {

  const header = document.createElement("header");
  header.className = "header";

    const newGameBtn = document.createElement("button");
    // newGameBtn.className = "";
    newGameBtn.textContent = "New Game";

    const leaderboardBtn = document.createElement("button");
    // leaderboardBtn.className = "";
    leaderboardBtn.textContent = "Leaderboard";

    document.body.prepend(header);
    header.appendChild(newGameBtn);
    header.appendChild(leaderboardBtn);

  return { header, newGameBtn, leaderboardBtn };
}