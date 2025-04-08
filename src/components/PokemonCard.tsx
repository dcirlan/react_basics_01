import React from 'react';

interface PokemonCardProps {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}

function PokemonCard({ pokemon }: PokemonCardProps) {
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
