import { createContext } from "react";

const PokemonContext = createContext({
  pokemons: [{ name: "", url: "" }],
  setPokemons: (pokemons: {}[]) => {},
  pokemonDetails: {
    name: "",
    types: [{ type: { name: "" } }],
    abilities: [{ ability: { name: "" } }],
    species: { name: "" },
    height: "",
    weight: "",
    stats: [{ base_stat: 0, stat: { name: "" } }],
    id: "",
    sprites: { other: { dream_world: { front_default: "" } } },
  },
  setPokemonDetails: (pokemonDetails: {}) => {},
});

export default PokemonContext;
