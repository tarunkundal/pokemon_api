import { useEffect } from "react";
import { usePokemonStore } from "../store/PokemonProvider";

const useFetchPokemons = () => {
  const { setPokemons } = usePokemonStore();
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000`
        );
        const data = await response.json();
        const pokemons = data.results;
        setPokemons([...pokemons]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useFetchPokemons;
