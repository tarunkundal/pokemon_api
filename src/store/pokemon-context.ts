import { createContext } from "react";

const PokemonContext = createContext({
  pokemons: [{}],
  setPokemons: (pokemons: {}[]) => {},
  pokemonDetails: {
    name: "",
    types: [{ type: { name: "" } }],
    abilities: [{ ability: { name: "" } }],
    species: { name: "" },
    height: "",
    weight: "",
    stats: [{ base_stat: 0, stat: { name: "" } }],
  },
  setPokemonDetails: (pokemonDetails: {}) => {},
});

export default PokemonContext;
