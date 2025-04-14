import React from 'react';

interface NavBarProps {
  pokemonList: string[];
  pokemonName: string;
  setPokemonName: (name: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ pokemonList, pokemonName, setPokemonName }) => {
  const handlePokemonClick = (name: string) => {
    setPokemonName(name);
    if (name === 'pikachu') {
      alert('pika pikachu !!!');
    }
  };

  return (
    <nav className="button-container">
      {pokemonList.map((name) => (
        <button
          key={name}
          onClick={() => handlePokemonClick(name)}
          className={pokemonName === name ? 'active' : ''}
        >
          {name}
        </button>
      ))}
    </nav>
  );
};

export default NavBar;