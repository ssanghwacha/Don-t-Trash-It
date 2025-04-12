# React + Vite

# Don’t Trash It! 🌱

An interactive simple game that encourages users to choose sustainability by picking up trash instead of throwing it away. Through emotional visual storytelling and interactions, the project builds environmental awareness, especially among youth.

## 🎯 Purpose

Littering is a harmful habit that damages our environment, yet people often do it without thinking. "Don’t Trash It!" transforms this message into an emotional experience using simple visuals: two buttons **Throw** and **Pick** that affect the health of a tree character. Users immediately see the consequences of their actions, making the issue of littering more tangible and engaging.

This project was created as part of the term assignment for **MDIA 3292 - Web Design & Interaction** at BCIT, focusing on _Design for Social Change_.

---

## 👥 Target Audience

-   **Primary**: Children and teens (ages 6–14) learning environmental responsibility
-   **Secondary**: Educators, eco-conscious organizations, and the general public interested in sustainability tools

---

## 🕹️ Features

-   **Throw Button**: Drops trash, decreases heart count, tree becomes sad → if hearts reach 0, the tree falls over and the user sees the Game Over (bad) ending.
-   **Pick Button**: Cleans up trash, increases hearts (max 5), tree becomes happy → if hearts reach 5, the user sees the Good ending.
-   **Tree Expressions**: Change based on user actions (neutral → happy/sad → crying or cheerful)
-   **Responsive Design**: Works across desktop and mobile devices
-   **Simple Game Logic**: Emotion-driven consequences with 3 starting hearts
-   **Visual Feedback**: Trash flies in/out, tree reacts, hearts change in real-time

---

## 🛠️ Tech Stack

-   **HTML/CSS**: Semantic structure and clean styling
-   **JavaScript**: Core game logic and interactive DOM updates
-   **React.js**: Component-based structure
-   **Assets**: Custom-made pixel-art trees, trash, and background visuals
-   **Routing**: Using `react-router-dom` for screen navigation
-   **Animation**: DOM-based animations for object movement and tree state changes

---

## 📂 Folder Structure

Don’t-Trash-It/
├── public/
│ └── index.html
├── src/
│ ├── assets/images/ // all visual assets (trees, trash, hearts, background)
│ ├── pages/
│ │ ├── Title.jsx
│ │ ├── Game.jsx
│ │ ├── Loading.jsx
│ │ ├── PickEnding.jsx
│ │ └── ThrowEnding.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── styles/ // CSS files per page
│ ├── Game.css
│ └── App.css
├── package.json
└── README.md

---

## 📜 Credits

All code and artwork were created by Jenny Kim & Sangwha Cha.
Images used in the game were generated using ChatGPT (DALL·E) and refined in Adobe Illustrator and Figma to ensure a cohesive visual style.

---

## 🔗 License

This project is for educational purposes only. Not for commercial use.
