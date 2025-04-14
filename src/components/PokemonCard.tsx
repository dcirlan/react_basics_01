import React from 'react';
import styles from './PokemonCard.module.css';

interface PokemonCardProps {
  pokemon: {
    name: string;
    imgSrc?: string;
    color: string;
  };
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  const cardStyle = {
    backgroundColor: pokemon.color,
  };

  return (
    <figure className={styles.card} style={cardStyle}>
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
