import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Progress,
  Spinner,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  Tabs,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { usePokemonStore } from "../store/PokemonProvider";

const PokemonDetailCard = (props: any) => {
  const { setPokemonDetails, pokemonDetails } = usePokemonStore();
  const [pokemonColor, setPokemonColor] = useState();
  const [isLoading, setIsLoding] = useState(false);
  const pokemonId = pokemonDetails?.id;

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        setIsLoding(true);
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${props.pokemon}`
        );

        const data = await res.json();

        setPokemonDetails(data);
        setIsLoding(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemonDetail();

    const fetchPokemonColor = async () => {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${props.pokemon}/`
        );
        const data = await res.json();
        setPokemonColor(data.color.name);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemonColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.pokemon]);

  console.log(pokemonDetails);
  console.log(pokemonColor);

  const svgImgPresent = pokemonDetails.sprites.other.dream_world.front_default;

  return (
    <>
      {isLoading ? (
        <Spinner
          size={"xl"}
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%,-50%)"}
        />
      ) : (
        <>
          {!pokemonDetails ? (
            <Box />
          ) : (
            <Box transition={"all 2s ease-out "}>
              <Stack p={4}>
                <Box>
                  <Flex justifyContent={"space-between"}>
                    <Flex direction={"column"}>
                      <Heading
                        color={
                          pokemonColor === undefined ? "primary" : pokemonColor
                        }
                        fontSize={{ md: "3rem" }}
                      >
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
                              bg={
                                pokemonColor === undefined
                                  ? "primary"
                                  : pokemonColor
                              }
                              margin={"5px"}
                              color={"gray.200"}
                            >
                              {type.type.name !== "" &&
                                type.type.name.charAt(0).toUpperCase() +
                                  type.type.name.slice(1)}
                            </Text>
                          );
                        })}
                      </Flex>
                    </Flex>
                    <Heading opacity={0.8}>#0{pokemonId}</Heading>
                  </Flex>
                </Box>
                <Center>
                  <Image
                    src={
                      svgImgPresent
                        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`
                        : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemonId}.png`
                    }
                    alt="Image"
                    boxSize={{ base: 40, md: 56 }}
                    zIndex={2}
                  />
                </Center>
              </Stack>
              <Box
                mt={{ base: -14, md: -24 }}
                minH={"300px"}
                bgColor={pokemonColor === undefined ? "primary" : pokemonColor}
                borderRadius={"10%"}
                color={"gray.200"}
                opacity={0.7}
              >
                <Tabs colorScheme="whiteAlpha">
                  <TabList>
                    <Tab fontWeight={"bold"}>About</Tab>
                    <Tab fontWeight={"bold"}>Base Stats</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Stack fontWeight={"medium"}>
                        <Table>
                          <Tr>
                            <Td>Species </Td>
                            <Td fontWeight={"bold"}>
                              {pokemonDetails.species.name !== "" &&
                                pokemonDetails.species.name
                                  .charAt(0)
                                  .toUpperCase() +
                                  pokemonDetails.species.name.slice(1)}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Height </Td>
                            <Td fontWeight={"bold"}>
                              {Number(pokemonDetails.height) * 10}cm
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Weight </Td>
                            <Td fontWeight={"bold"}>
                              {Number(pokemonDetails.weight) / 10}kg{" "}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Ablities </Td>
                            <Td fontWeight={"bold"}>
                              {pokemonDetails.abilities.map((ability) => {
                                return (
                                  <Text>
                                    {ability.ability.name !== "" &&
                                      ability.ability.name
                                        .charAt(0)
                                        .toUpperCase() +
                                        ability.ability.name.slice(1)}
                                  </Text>
                                );
                              })}
                            </Td>
                          </Tr>
                        </Table>
                      </Stack>
                    </TabPanel>
                    <TabPanel>
                      <Table>
                        {pokemonDetails.stats.map((stat) => {
                          return (
                            <Tr>
                              <Td w={"25%"}>
                                {stat.stat.name !== ""
                                  ? stat.stat.name.charAt(0).toUpperCase() +
                                    stat.stat.name.slice(1)
                                  : ""}
                              </Td>
                              <Td fontWeight={"bold"} w={"15%"}>
                                {stat.base_stat}
                              </Td>
                              <Td w={"60%"}>
                                <Progress
                                  borderRadius={"25px"}
                                  colorScheme="red"
                                  size="sm"
                                  value={
                                    stat.base_stat !== 0 ? stat.base_stat : 0
                                  }
                                />
                              </Td>
                            </Tr>
                          );
                        })}
                      </Table>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default PokemonDetailCard;
