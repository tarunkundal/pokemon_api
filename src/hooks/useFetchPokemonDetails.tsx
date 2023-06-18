import { useCallback, useEffect, useState } from "react";
import { usePokemonStore } from "../store/PokemonProvider";

const useFetchPokemonDetails = async (id: number) => {
  const { setPokemonDetails, pokemons } = usePokemonStore();
  const [data, setData] = useState([{}]);

  const fetchData = useCallback(async () => {
    if (pokemons.length === null || undefined) {
      return;
    }

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const result = await res.json();
    // setData([{ result }]);
  }, [data, id, pokemons.length]);

  useEffect(() => {
    fetchData();
  }, [fetchData, id]);
};

export default useFetchPokemonDetails;
