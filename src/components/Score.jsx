import { useState } from "react";
import "../styles/Score.css";

function Score() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <div className="score">
      <p>Current: {score}</p>
      <p>Personal best: {highScore}</p>
    </div>
  );
}

export default Score;
