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
  }, [enteredSeachValue]);

  console.log(enteredSeachValue);
  console.log(pokemons);
};

export default useFetchPokemonByName;
