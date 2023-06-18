import { createContext } from "react";

const PokemonContext = createContext({
  pokemons: [{}],
  setPokemons: (pokemons: {}[]) => {},
  pokemonDetails: { name: "", types: [{ type: { name: "" } }] },
  setPokemonDetails: (pokemonDetails: {}) => {},
});

export default PokemonContext;
