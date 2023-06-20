import React, { useContext, useReducer } from "react";
import PokemonContext from "./pokemon-context";

const initialState = {
  pokemons: [{}],
  pokemonDetails: {
    name: "",
    types: [],
    height: "",
    weight: "",
    species: { name: "" },
    abilities: [{ ability: { name: "" } }],
    stats: [{ base_stat: 0, stat: { name: "" } }],
  },
};

const reducerFunction = (state: any, action: any) => {
  if (action.type === "SET_POKEMONS") {
    return {
      ...state,
      pokemons: action.pokemons,
    };
  }

  if (action.type === "SET_POKEMONS_DETAILS") {
    return {
      ...state,
      pokemonDetails: action.pokemonDetails,
    };
  }

  return state;
};

const PokemonProvider = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [pokemons, dispatchPokemonAction] = useReducer(
    reducerFunction,
    initialState
  );

  // set pokemons
  const setPokemonHandler = (pokemons: {}[]) => {
    dispatchPokemonAction({
      type: "SET_POKEMONS",
      pokemons,
    });
  };

  // set pokemon details
  const setPokemonDetailsHandler = (pokemonDetails: {}) => {
    dispatchPokemonAction({
      type: "SET_POKEMONS_DETAILS",
      pokemonDetails,
    });
  };

  const contextValue = {
    pokemons: pokemons.pokemons,
    setPokemons: setPokemonHandler,
    pokemonDetails: pokemons.pokemonDetails,
    setPokemonDetails: setPokemonDetailsHandler,
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;

export const usePokemonStore = () => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }
  return context;
};
