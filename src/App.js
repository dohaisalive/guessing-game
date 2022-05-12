import "./App.css";
import React, { useState } from "react";

let max = 30;
let min = 1;
let randNum = 1 + Math.floor(Math.random() * max);
let attempts = 3;
let currentAttempt = 1;

function App() {
  console.log(randNum);
  const [guess, setGuess] = useState();
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(true);

  const startAgain = () => {
    randNum = Math.floor(Math.random() * max);
    setMessage("");
    setVisible(true);
    currentAttempt = 1;
  };

  const compareNumbers = () => {
    if (guess > max || guess < min || guess == "") {
      setMessage("wrong input");
    } else {
      currentAttempt++;
      attempts--;
      if (attempts === 0 && guess !== randNum) {
        setMessage(`you lost, the number was ${randNum}. play again`);
        setVisible(false);
      } else {
        if (guess == randNum) {
          setMessage("you won, congratulations");
          setVisible(false);
        } else if (guess > randNum) {
          setMessage("lower");
        } else if (guess < randNum) {
          setMessage("higher");
        } else {
          setMessage("why am i here");
        }
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>GUESS THE NUMBER</h1>
        {visible && <label>guess {currentAttempt}/3</label>}
        <input
          placeholder="a number from 1 to 30"
          type="number"
          onChange={(event) => setGuess(event.target.value)}
        />

        {visible && <button onClick={compareNumbers}>submit</button>}
        <button onClick={startAgain}>restart</button>

        <label>{message}</label>
      </header>
    </div>
  );
}

export default App;
