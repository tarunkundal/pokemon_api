import { useCallback, useEffect } from "react";
import { usePokemonStore } from "../store/PokemonProvider";

const useFetchPokemonDetails = async (id: number) => {
  const { setPokemonDetails, pokemons } = usePokemonStore();

  const fetchData = useCallback(async () => {
    if (pokemons.length === null || undefined) {
      return;
    }
    let data: string | any[] = [];

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const result = await res.json();
    data.concat(result);

    console.log(data);
  }, [id, pokemons.length]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData, id]);
  fetchData();
};

export default useFetchPokemonDetails;
