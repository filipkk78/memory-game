import "../styles/Card.css";
import { useState, useEffect } from "react";

function Card({ pokeName }) {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => response.json())
      .then((json) => setPokemon(json.sprites.front_default))
      .catch((error) => console.error(error));
  }, []);

  console.log(pokemon);

  return (
    <div className="card">
      <h3>{pokeName}</h3>
      <img src={pokemon} alt={pokeName + " sprite"} />
    </div>
  );
}

export default Card;
