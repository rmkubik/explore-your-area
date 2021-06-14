import React, { useState } from "react";
import ReactDOM from "react-dom";
import cardData from "./Card List 0b213d91cd41493193b34acbdbe9e15b.csv";

import "./styles.scss";

/**
 * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const CardView = ({ children }) => <div className="card-view">{children}</div>;
const Card = ({ children }) => <div className="card">{children}</div>;
const ButtonBar = ({ children }) => (
  <div className="button-bar">{children}</div>
);
const TopBar = ({ children }) => {
  return <div className="top-bar">{children}</div>;
};

const App = () => {
  const [cards, setCards] = useState(shuffle(cardData));
  const [currentIndex, setCurrentIndex] = useState(0);

  const draw = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const shuffleDeck = () => {
    setCards(shuffle(cards));
  };

  const { Name, Icon, Description, Category } = cards[currentIndex];

  return (
    <CardView>
      <TopBar>{`${currentIndex + 1}/${cards.length}`}</TopBar>
      <Card>
        <h1>{Name}</h1>
        <p>{Icon}</p>
        <p>{Description}</p>
        <p>{Category}</p>
      </Card>
      <ButtonBar>
        <button onClick={draw}>🃏 Draw</button>
        <button onClick={shuffleDeck}>🔀 Shuffle</button>
        {/* <button>📸 Camera</button> */}
        <input type="file" name="image" accept="image/*" capture="user" />
      </ButtonBar>
    </CardView>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
