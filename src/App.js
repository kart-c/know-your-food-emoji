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
  const [text, setText] = useState("");
  const emojis = Object.keys(foodEmojis);

  const emojiClickHandler = (emoji) => {
    emojis.map((e) => {
      if (e === emoji) {
        setText(foodEmojis[e]);
      }
    });
  };

  const inputChangeHandler = (e) => {
    const inputValue = e.target.value;
    emojis.map((emoji) => {
      if (inputValue === emoji) {
        setText(foodEmojis[inputValue]);
      }
    });
  };

  return (
    <div className="App">
      <h1>Welcome to Know your food</h1>

      <div>
        <input
          className="input"
          placeholder="Enter your favourite food emojis"
          onChange={inputChangeHandler}
        ></input>
        <div className="text-displayed">{text}</div>
      </div>
      <div className="emoji-list-tag">Emojis we Know</div>
      <ul className="emoji-list">
        {emojis.map((emoji) => {
          return (
            <li key={emoji} onClick={() => emojiClickHandler(emoji)}>
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
