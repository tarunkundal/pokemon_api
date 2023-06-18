import { createContext } from "react";

const PokemonContext = createContext({
  pokemons: [{}],
  setPokemons: (pokemons: {}[]) => {},
  pokemonDetails: {
    name: "",
    types: [{ type: { name: "" } }],
    abilities: [{ ability: { name: "" } }],

    height: "",
    weight: "",
  },
  setPokemonDetails: (pokemonDetails: {}) => {},
});

export default PokemonContext;
