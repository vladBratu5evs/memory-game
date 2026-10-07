# 🤘 Rock & Metal Memory Match Game

An interactive, heavy-metal themed browser memory game. Test your focus and memory by matching iconic rock and metal band logos!

---

Local Setup Instructions

Follow these quick steps to get the game running on your local machine.

### 1. Clone the Repository
Open your terminal and clone the repository, ensuring you switch to the correct development branch:

```bash
# Clone the repository
git clone https://github.com

# Navigate into the project folder
cd memory-game

# Switch to the active game branch
git checkout memory-game
```

### 2. Launch the Application

Since this project consists of standard frontend files (`index.html`, CSS, and JS), you can run it using either of these quick methods:

#### Method A: Open Directly (Quickest)
Simply navigate to your local `memory-game` folder using your operating system's file explorer and **double-click `index.html`** to open the game inside your default web browser.

#### Method B: Use a Local Server (Recommended for Development)
To avoid potential browser restrictions (CORS) when scaling JavaScript files, serve the folder locally using **Node.js** or **Python**:

* **If you have Python installed:**
  ```bash
  python -m http.server 8000
  ```
  Then view the game at: 👉 **[http://localhost:8000](http://localhost:8000)**

* **If you use VS Code:**
  Install the popular **Live Server** extension, open the project folder, and click **"Go Live"** in the bottom status bar.

---

### Objective
The absolute goal of the game is to find and match all **8 identical pairs of band logos** (16 cards total) in the absolute fewest number of moves possible.

### Rules
1. When the application boots up, a fresh 16-card layout deck is automatically shuffled and laid face-down.
2. Click on any grid card item to flip it over and expose the band logo hidden on the other side.
3. Click a second card to flip it over alongside the first:
   - **If the logos match**: Success! Both card items will remain open and cleanly fade out of the active play arena, locking your progress.
   - **If the logos do not match**: Memorise what bands they were! Both cards will flip back face-down after a brief 1-second delay so you can try a different pair.
4. **Victory**: Keep matching until all 16 cards have been successfully cleared from the screen. A custom **Victory Modal Overlay** will drop down to celebrate your win and log your performance metrics.

---

### Future Improvements:
- **Score Logging**: Not implemented yet.
