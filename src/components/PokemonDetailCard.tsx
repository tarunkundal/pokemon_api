import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
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
          <Stack p={4}>
            <Box>
              <Flex justifyContent={"space-between"}>
                <Box />
                <Flex direction={"column"}>
                  <Heading color={"button"}>
                    {" "}
                    {pokemonDetails.name !== "" &&
                      pokemonDetails.name.charAt(0).toUpperCase() +
                        pokemonDetails.name.slice(1)}
                  </Heading>
                  <Flex justifyContent={"center"} opacity={0.5}>
                    {pokemonDetails.types.map((type) => {
                      return (
                        <Text
                          p={"7px"}
                          borderRadius={"25px"}
                          bg={"teritory"}
                          margin={"5px"}
                          color={"white"}
                        >
                          {type.type.name !== "" &&
                            type.type.name.charAt(0).toUpperCase() +
                              type.type.name.slice(1)}
                        </Text>
                      );
                    })}
                  </Flex>
                </Flex>
                <Heading opacity={0.3}>#0{props.id}</Heading>
              </Flex>
            </Box>
            <Center>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`}
                alt="Image"
                boxSize={{ base: 40, md: 56 }}
              />
            </Center>
          </Stack>
          <Box
            border={"2px"}
            mt={-24}
            h={"300px"}
            bgColor={"white"}
            borderRadius={"10%"}
          >
            <Tabs>
              <TabList>
                <Tab fontWeight={"bold"}>About</Tab>
                <Tab fontWeight={"bold"}>Base Stats</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Stack spacing={6} fontWeight={"medium"}>
                    <Text>Species : </Text>
                    <Text>Height : {Number(pokemonDetails.height) * 10}cm</Text>
                    <Text>
                      Weight : {Number(pokemonDetails.weight) / 10}kg{" "}
                    </Text>
                    <Text>Abilities</Text>
                  </Stack>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PokemonDetailCard;
