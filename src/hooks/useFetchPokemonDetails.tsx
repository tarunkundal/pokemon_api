import React, { useCallback, useEffect } from "react";
import { usePokemonStore } from "../store/PokemonProvider";

const useFetchPokemonDetails = async (id: number) => {
  const { setPokemonDetails, pokemons } = usePokemonStore();

  const fetchData = useCallback(async () => {
    if (pokemons.length === null || undefined) {
      return;
    }
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const result = await res.json();

    const data = [];
    data.push(result);
    setPokemonDetails(data);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [id]);
};

export default useFetchPokemonDetails;

// const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
