import { useState } from "react";
import "../styles/StartScreen.css";
import Modal from "../components/Modal";
import OptionButton from "../components/OptionButton";
import clickSound from "../assets/pokemon-a-button.mp3";
import playAudio from "../playAudio";
const clickAudio = new Audio(clickSound);
clickAudio.volume = 0.3;

function RadioInput({ defaultChecked, value, labelText, onChange }) {
  return (
    <label>
      <input
        type="radio"
        className="nes-radio"
        defaultChecked={defaultChecked}
        name="answer"
        onChange={() => onChange(value)}
      />
      <span>{labelText}</span>
    </label>
  );
}

export default function StartScreen({ onStart }) {
  const cardGoals = [6, 12, 18];// No of cards that are shown per round(easy, medium, hard).

  const [cardGoal, setCardGoal] = useState(cardGoals[0]);

  const handleStartGame = (e) => {
    e.preventDefault();
    onStart(cardGoal);
  };

  const handleChange = (newCardGoal) => {
    setCardGoal(newCardGoal);
    playAudio(clickAudio);
  };

  return (
    <Modal>
      <div className="start-screen-modal-content modal-content">
        <p className="ask-text">Which level would you like to play?</p>

        <form onSubmit={handleStartGame}>
          <div className="level-options">
            <RadioInput
              value={cardGoals[0]}
              labelText="Easy"
              defaultChecked
              onChange={handleChange}
            />
            <RadioInput
              value={cardGoals[1]}
              labelText="Medium"
              onChange={handleChange}
            />
            <RadioInput
              value={cardGoals[2]}
              labelText="Hard"
              onChange={handleChange}
            />
          </div>

          <div className="start-options">
            <OptionButton type="submit" >Start Game</OptionButton>            
          </div>
          
        </form>
      </div>
    </Modal>
  );
}
