import React, { useEffect, Component, useState } from "react";
import "./App.css";
import Card from './component/Card';
import "bootstrap/dist/css/bootstrap.min.css"
import CardSpecies from "./component/CardSpecies";

const useFetch = (url, initialState) => {
  const [pokemon, setPokemon] = useState(initialState);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((pokemon) => {
        setPokemon(pokemon);
      });
  }, [url]);

  return [pokemon];
};

function App() {
  const [pokemones] = useFetch("https://pokeapi.co/api/v2/pokedex/2", {});

  return (
    <div>
      <Card
        pokemones = {pokemones.pokemon_entries}
      />
      {/* <CardSpecies/> */}
    </div>
  );
}

export default App;
