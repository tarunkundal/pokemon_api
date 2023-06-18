import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { usePokemonStore } from "../store/PokemonProvider";

const PokemonDetailCard = (props: any) => {
  const { setPokemonDetails, pokemonDetails } = usePokemonStore();
  console.log(props.id);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${props.id}`
        );

        const data = await res.json();

        setPokemonDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemonDetail();
  }, [props.id]);

  console.log(pokemonDetails);

  return (
    <>
      {!pokemonDetails ? (
        <Box />
      ) : (
        <Box>
          <Box>
            <Flex justifyContent={"space-between"}>
              <Box />
              <Flex direction={"column"}>
                <Heading>{pokemonDetails.name}</Heading>
                <Flex justifyContent={"center"} opacity={0.5}>
                  {pokemonDetails.types.map((type) => {
                    return (
                      <Text
                        p={"7px"}
                        borderRadius={"25px"}
                        bg={"green.300"}
                        margin={"5px"}
                        color={"white"}
                      >
                        {type.type.name}
                      </Text>
                    );
                  })}
                </Flex>
              </Flex>
              <Heading opacity={0.3}>#0{props.id}</Heading>
            </Flex>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PokemonDetailCard;
