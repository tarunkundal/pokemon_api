import React, { useState } from "react";
import PokemonCard from "../PokemonCard";
import { Box, Button, Center } from "@chakra-ui/react";
import useFetchPokemons from "../../hooks/useFetchPokemons";
import { usePokemonStore } from "../../store/PokemonProvider";
import BackToTop from "./BackToTopButton";

const Body = () => {
  const { pokemons } = usePokemonStore();
  useFetchPokemons();

  const [pokemonNumbersToShow, setpokemonNumbersToShow] = useState(21);

  const handlePokemonToShow = () => {
    setpokemonNumbersToShow(pokemonNumbersToShow + 18);
  };

  return (
    <>
      <Box
        display={{ base: "inline-grid", md: "inline-grid" }}
        gridTemplateColumns={{
          base: "repeat(auto , 30%)",
          md: "repeat(3 , 2fr)",
        }}
        gridGap={9}
        p={"5%"}
      >
        {pokemons.slice(0, pokemonNumbersToShow).map((pokemon, i) => {
          return <PokemonCard pokemon={pokemon} key={i} />;
        })}
      </Box>
      <BackToTop />
      {pokemons.length >= pokemonNumbersToShow && (
        <Center>
          <Button
            color="secondary"
            bg={"button"}
            onClick={handlePokemonToShow}
            _hover={{ bg: "teritory" }}
            m={5}
            mx={"auto"}
          >
            Load more Pokemons
          </Button>
        </Center>
      )}
    </>
  );
};

export default Body;
