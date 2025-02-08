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
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </main>
    </div>
  );
}

export default App;
