import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import useFetchPokemonDetails from "../hooks/useFetchPokemonDetails";

const PokemonDetailCard = (props: any) => {
  useFetchPokemonDetails(props.id);
  // console.log(props.id);

  return (
    <Stack>
      <Box>Modal</Box>
      <Box>
        <Text>jnfnd</Text>
        <Heading>This is the heading of backdrop</Heading>
      </Box>
    </Stack>
  );
};

export default PokemonDetailCard;
