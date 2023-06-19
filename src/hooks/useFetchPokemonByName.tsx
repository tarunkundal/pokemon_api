import React, { useCallback } from "react";
import { usePokemonStore } from "../store/PokemonProvider";

const useFetchPokemonByName = (enteredText: string) => {
  const { pokemons } = usePokemonStore();

  console.log(pokemons);
  console.log(enteredText);
};

export default useFetchPokemonByName;
