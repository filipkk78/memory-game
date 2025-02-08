import "./styles/App.css";
import Score from "./components/Score";
import Card from "./components/Card";

function App() {
  return (
    <div className="wrapper">
      <header>
        <h1>Pokémon Memory Game</h1>
        <Score></Score>
      </header>
      <main>
        <h2>
          Get points by clicking images you haven't clicked yet. Game is over if
          you click on one that you've already clicked on before
        </h2>
        <div className="cards">
          <Card pokeName={"ditto"}></Card>
          <Card pokeName={"ekans"}></Card>
          <Card pokeName={"pikachu"}></Card>
          <Card pokeName={"geodude"}></Card>
          <Card pokeName={"snorlax"}></Card>
          <Card pokeName={"charmander"}></Card>
          <Card pokeName={"rattata"}></Card>
          <Card pokeName={"squirtle"}></Card>
          <Card pokeName={"bulbasaur"}></Card>
          <Card pokeName={"jigglypuff"}></Card>
          <Card pokeName={"zubat"}></Card>
          <Card pokeName={"psyduck"}></Card>
        </div>
      </main>
    </div>
  );
}

export default App;
