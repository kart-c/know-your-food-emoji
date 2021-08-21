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
      <h1>Welcome to Know your food</h1>

      <div>
        <input placeholder="Enter your favourite food emojis to see what they mean"></input>
        <div></div>
      </div>
      <div>Emojis we Know</div>
      <ul>
        {emojis.map((emoji) => {
          return <li key={emoji}>{emoji}</li>;
        })}
      </ul>
    </div>
  );
}
