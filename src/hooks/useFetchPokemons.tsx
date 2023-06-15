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
  }, []);
};

export default useFetchPokemons;
