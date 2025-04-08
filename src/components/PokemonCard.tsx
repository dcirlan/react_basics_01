const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  const pokemonName = pokemonList[1].name;
  const pokemonImg = pokemonList[1].imgSrc;
  
  return (
    <figure>
      {pokemonImg !== undefined ? (
        <img src={pokemonImg} alt={pokemonName} />
      ) : (
        "???"
      )}
      <figcaption>{pokemonName}</figcaption>
    </figure>
  );
}

export default PokemonCard;
