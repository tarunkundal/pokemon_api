import { useEffect } from "react";
import { usePokemonStore } from "../store/PokemonProvider";

const useFetchPokemonByName = (enteredSeachValue: string) => {
  const { pokemons, setPokemons } = usePokemonStore();

  useEffect(() => {
    const filteredPokemons = () => {
      if (enteredSeachValue === "") {
        setPokemons(pokemons);
        return;
      }
      // eslint-disable-next-line array-callback-return
      const filterPokemon = pokemons.filter((pokemon) => {
        if (
          pokemon.name.toLowerCase().includes(enteredSeachValue.toLowerCase())
        ) {
          return pokemon.name;
        }
      });
      setPokemons(filterPokemon);
    };
    filteredPokemons();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enteredSeachValue]);
};

export default useFetchPokemonByName;
