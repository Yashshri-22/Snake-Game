# 🐍 Snake Game — Classic Snake in JavaScript
A simple, fun, and colorful Snake Game built using HTML, CSS, and JavaScript.
The game includes sound effects, scoring, high-score saving, and smooth gameplay using grid-based movement.

## 📁 Folder Structure
```bash
project-folder/
│
├── assets/
│   ├── snake_bg.jpg
│   ├── bg.webp
│   └── sounds/
│       ├── eat.mp3
│       ├── losing.mp3
│       ├── moving.mp3
│       └── theme.mp3
│
├── css/
│   └── style.css
│
├── js/
│   └── index.js
│
├── index.html
└── README.md
```

## Game Features
- Smooth Snake Movement using CSS Grid
- Random Food Generation
- Collision Detection (wall + self-collision)
- Audio Effects
  - Eat sound
  - Movement sound
  - Losing sound
  - Background theme
- HighScore saved using LocalStorage
- Beautiful UI with gradients, custom fonts & background image
- Runs at a controlled FPS using requestAnimationFrame

## Game Screen
<img width="1919" height="948" alt="Screenshot 2025-12-04 013752" src="https://github.com/user-attachments/assets/ba97d9a5-75be-4ba7-bce8-a98f91532dbd" />

## How to Run
### Option 1 — Open Directly
Just double-click:
`index.html`

### Option 2 — Run with Live Server (Recommended)
VS Code → Right-click `index.html` → Open with Live Server

## Controls
| Key            | Action     |
|----------------|------------|
| ⬆️ Arrow Up     | Move Up    |
| ⬇️ Arrow Down   | Move Down  |
| ⬅️ Arrow Left   | Move Left  |
| ➡️ Arrow Right  | Move Right |

## Game Logic Overview

- Snake is represented as an array of (x, y) positions.
- Movement direction stored in:
```bash
inputDir = { x: 0, y: 0 };
```
- Game loop uses:
```bash
window.requestAnimationFrame(main);
```
- When snake eats food:
  - Score increases
  - Snake grows
  - New food appears
  - HighScore saved in localStorage
- Collision checks:
  - If snake hits wall ➝ Game Over
  - If snake hits itself ➝ Game Over

## Technologies Used
| Component   | Technology         |
|-------------|--------------------|
| Structure   | HTML5              |
| Styling     | CSS3, CSS Grid     |
| Game Logic  | JavaScript         |
| Audio       | HTML5 Audio API    |
| Storage     | LocalStorage       |

## Future Improvements
- Add pause/resume button
- Add levels with increasing speed
- Add mobile touch controls
- Add game themes & skins

## Author
### **Developed by Yashshri Mule**
Feel free to fork, modify, and improve!
