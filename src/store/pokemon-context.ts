import { createContext } from "react";

const PokemonContext = createContext({
  pokemons: [{}],
  setPokemons: (pokemons: {}[]) => {},
  pokemonDetails: [{}],
  setPokemonDetails: (pokemonDetails: {}) => {},
});

export default PokemonContext;
