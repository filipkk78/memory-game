import "../styles/Card.css";
import { useState, useEffect } from "react";

function Card({ pokeName, handleScore }) {
  const [pokemon, setPokemon] = useState(null);
  const [pokeKey, setPokeKey] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => response.json())
      .then((json) => {
        setPokemon(json.sprites.front_default);
        setPokeKey(json.id);
      })
      .catch((error) => console.error(error));
  }, [pokeName]);

  function handleChoice() {
    handleScore(pokeKey);
  }

  return (
    <div className="card" key={pokeKey} onClick={handleChoice}>
      <h3>{pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}</h3>
      <img src={pokemon} alt={pokeName + " sprite"} />
    </div>
  );
}

export default Card;
