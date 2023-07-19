import { useEffect, useState } from "react";

const useFetchPokemonColor = (pokemonName: string) => {
  const [pokemonColor, setPokemonColor] = useState("");
  const [isLoading, setIsLoding] = useState(false);
  useEffect(() => {
    const fetchPokemonColor = async () => {
      try {
        setIsLoding(true);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${
            pokemonName ? pokemonName : "bulbasaur"
          }/`
        );
        const data = await response.json();

        setIsLoding(false);

        let color = data.color.name;
        setPokemonColor(color);
      } catch (error) {
        console.log("Error while fetching pokemon color", error);
      }
    };
    fetchPokemonColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonName]);

  return { pokemonColor, isLoading };
};

export default useFetchPokemonColor;
