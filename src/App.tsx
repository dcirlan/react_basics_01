import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color: "lightgreen"
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    color: "lightsalmon"
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    color: "lightblue"
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    color: "lightyellow"
  },
  {
    name: "mew",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    color: "pink"
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <NavBar 
        pokemonList={pokemonList.map(p => p.name)}
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
      />
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;