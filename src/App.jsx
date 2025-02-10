import "./styles/App.css";
import Score from "./components/Score";
import Card from "./components/Card";
import { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokeArr, setPokeArr] = useState([
    "ditto",
    "ekans",
    "pikachu",
    "geodude",
    "snorlax",
    "charmander",
    "rattata",
    "squirtle",
    "bulbasaur",
    "jigglypuff",
    "zubat",
    "psyduck",
  ]);
  const [chosen, setChosen] = useState([]);

  function randomizePokeArr() {
    const newPokeArr = [...pokeArr];
    newPokeArr.sort(() => 0.5 - Math.random());
    setPokeArr(newPokeArr);
  }

  function handleScore(id) {
    if (chosen.includes(id)) {
      setScore(0);
      return;
    }
    setChosen([...chosen, id]);
    console.log(chosen);
    randomizePokeArr();
    setScore(score + 1);
    if (score >= highScore) {
      setHighScore(score + 1);
    }
  }

  return (
    <div className="wrapper">
      <header>
        <h1>Pokémon Memory Game</h1>
        <Score score={score} highScore={highScore}></Score>
      </header>
      <main>
        <h2>
          Get points by clicking images you haven't clicked yet. Game is over if
          you click on one that you've already clicked on before
        </h2>
        <div className="cards">
          <Card pokeName={pokeArr[0]} handleScore={handleScore}></Card>
          <Card pokeName={pokeArr[1]} handleScore={handleScore}></Card>
          <Card pokeName={pokeArr[2]} handleScore={handleScore}></Card>
          <Card pokeName={pokeArr[3]} handleScore={handleScore}></Card>
          <Card pokeName={pokeArr[4]} handleScore={handleScore}></Card>
          <Card pokeName={pokeArr[5]} handleScore={handleScore}></Card>
          <Card pokeName={pokeArr[6]} handleScore={handleScore}></Card>
          <Card pokeName={pokeArr[7]} handleScore={handleScore}></Card>
          <Card pokeName={pokeArr[8]} handleScore={handleScore}></Card>
          <Card pokeName={pokeArr[9]} handleScore={handleScore}></Card>
          <Card pokeName={pokeArr[10]} handleScore={handleScore}></Card>
          <Card pokeName={pokeArr[11]} handleScore={handleScore}></Card>
        </div>
      </main>
    </div>
  );
}
