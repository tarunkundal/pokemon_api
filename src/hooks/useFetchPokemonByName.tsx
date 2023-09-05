import { useEffect } from "react";
import { usePokemonStore } from "../store/PokemonProvider";

const useFetchPokemonByName = (enteredSeachValue: string) => {
  const { setPokemons, pokemons } = usePokemonStore();

  useEffect(() => {
    // const filteredPokemons = () => {
    //   if (enteredSeachValue === "") {
    //     setPokemons(pokemons);
    //     return;
    //   }
    //   // const filterPokemon = pokemons.filter((pokemon) => {
    //   //   if (
    //   //     pokemon.name.toLowerCase().includes(enteredSeachValue.toLowerCase())
    //   //   ) {
    //   //     return pokemon.name;
    //   //   }
    //   // });
    //   setPokemons(filterPokemon);
    // };
    // filteredPokemons();

    // eslint-disable-next-line react-hooks/exhaustive-deps

    const fetchPokemonByName = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${enteredSeachValue}`
        );
        const data = await response.json();

        setPokemons([data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemonByName();
  }, [enteredSeachValue]);
};

export default useFetchPokemonByName;
