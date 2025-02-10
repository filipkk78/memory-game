import "./styles/App.css";
import Score from "./components/Score";
import Card from "./components/Card";
import { useState } from "react";

function App() {
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
  function randomizePokeArr() {
    const newPokeArr = [...pokeArr];
    newPokeArr.sort(() => 0.5 - Math.random());
    setPokeArr(newPokeArr);
    console.log(pokeArr);
  }

  return (
    <div className="wrapper">
      <header onClick={randomizePokeArr}>
        <h1>Pokémon Memory Game</h1>
        <Score></Score>
      </header>
      <main>
        <h2>
          Get points by clicking images you haven't clicked yet. Game is over if
          you click on one that you've already clicked on before
        </h2>
        <div className="cards">
          <Card pokeName={pokeArr[0]}></Card>
          <Card pokeName={pokeArr[1]}></Card>
          <Card pokeName={pokeArr[2]}></Card>
          <Card pokeName={pokeArr[3]}></Card>
          <Card pokeName={pokeArr[4]}></Card>
          <Card pokeName={pokeArr[5]}></Card>
          <Card pokeName={pokeArr[6]}></Card>
          <Card pokeName={pokeArr[7]}></Card>
          <Card pokeName={pokeArr[8]}></Card>
          <Card pokeName={pokeArr[9]}></Card>
          <Card pokeName={pokeArr[10]}></Card>
          <Card pokeName={pokeArr[11]}></Card>
        </div>
      </main>
    </div>
  );
}

export default App;
