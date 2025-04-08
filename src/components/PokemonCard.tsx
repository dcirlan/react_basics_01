function PokemonCard({ pokemon }) {
  return (
    <figure>
      <img 
        src={pokemon.imgSrc} 
        alt={`Cette image représente le Pokémon ${pokemon.name}`} 
      />
      <figcaption>
        {pokemon.name}
      </figcaption>
    </figure>
  );
}

export default PokemonCard;
