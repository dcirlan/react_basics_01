import React from 'react';

interface NavBarProps {
  pokemonList: string[];
  pokemonName: string;
  setPokemonName: (name: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ pokemonList, pokemonName, setPokemonName }) => {
  return (
    <nav className="button-container">
      {pokemonList.map((name) => (
        <button
          key={name}
          onClick={() => setPokemonName(name)}
          className={pokemonName === name ? 'active' : ''}
        >
          {name}
        </button>
      ))}
    </nav>
  );
};

export default NavBar;