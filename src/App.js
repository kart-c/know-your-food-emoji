import React, { useState } from "react";
import "./styles.css";

const foodEmojis = {
  "🍄": "Mushroom",
  "🍞": "Bread",
  "🥐": "Croissant",
  "🥨": "Pretzel",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🌮": "Taco",
  "🥚": "Egg",
  "🍚": "Cooked Rice",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🍩": "Doughnut",
  "🥪": "Sandwich",
  "🍡": "Dango"
};

export default function App() {
  const [text, setText] = useState("");
  const emojisList = Object.keys(foodEmojis);
  console.log(emojisList.length);

  const emojiClickHandler = (emoji) => {
    emojisList.map((e) => {
      if (e === emoji) {
        setText(foodEmojis[e]);
      }
    });
  };

  const inputChangeHandler = (e) => {
    const inputValue = e.target.value;
    emojisList.map((emoji) => {
      if (inputValue === emoji) {
        setText(foodEmojis[inputValue]);
      } else {
        setText("Sorry we do not have that emoji in out database");
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
        {emojisList.map((emoji) => {
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
