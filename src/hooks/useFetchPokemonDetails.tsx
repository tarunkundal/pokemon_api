import { useEffect, useState } from "react";
import { usePokemonStore } from "../store/PokemonProvider";

const useFetchPokemonDetails = (pokemonName: string) => {
  const { setPokemonDetails } = usePokemonStore();
  const [isLoading, setIsLoding] = useState(false);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      setIsLoding(true);
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = await res.json();
      setPokemonDetails(data);
      setIsLoding(false);
    };
    fetchPokemonDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonName]);

  return { isLoading };
};

export default useFetchPokemonDetails;
