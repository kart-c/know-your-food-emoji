import React, { useState } from "react";
import "./styles.css";

const foodEmojis = {
  "🍞": "Bread",
  "🍔": "Hamburger",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🌮": "Taco",
  "🍚": "Cooked Rice",
  "🍨": "Ice Cream",
  "🥨": "Pretzel",
  "🥚": "Egg",
  "🍤": "Fried Shrimp",
  "🥓": "Bacon"
};

export default function App() {
  const emojis = Object.keys(foodEmojis);
  return (
    <div className="App">
      <h1>Welcome to Know your food Emojis</h1>

      <div>
        <input
          className="input"
          placeholder="Enter your favourite food emojis"
        ></input>
        <div className="text-displayed"></div>
      </div>
      <div className="emoji-list-tag">Emojis we Know</div>
      <ul className="emoji-list">
        {emojis.map((emoji) => {
          return <li key={emoji}>{emoji}</li>;
        })}
      </ul>
    </div>
  );
}
