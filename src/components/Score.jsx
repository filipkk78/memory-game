import "../styles/Score.css";

function Score({ score, highScore }) {
  return (
    <div className="score">
      <p>Current: {score}</p>
      <p>Personal best: {highScore}</p>
    </div>
  );
}

export default Score;
