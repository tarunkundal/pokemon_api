import { useEffect, useState } from "react";

const useFetchPokemonColor = (pokemonName: string) => {
  const [pkColor, setPkColor] = useState();
  const [isLoading, setIsLoding] = useState(false);
  useEffect(() => {
    const fetchPokemonColor = async () => {
      try {
        setIsLoding(true);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`
        );
        const data = await response.json();

        setIsLoding(false);

        let color = data.color.name;
        setPkColor(color);
      } catch (error) {
        console.log("Error while fetching pokemon color", error);
      }
    };
    fetchPokemonColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { pkColor, isLoading };
};

export default useFetchPokemonColor;
