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
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import { memo } from "react";
import { usePokemonStore } from "../store/PokemonProvider";
import useFetchPokemonDetails from "../hooks/useFetchPokemonDetails";
import useFetchPokemonColor from "../hooks/useFetchPokemonColor";

const PokemonDetailCard = (props: any) => {
  const { pokemonDetails } = usePokemonStore();
  const pokemonId = pokemonDetails?.id;
  const pokemonName = props.pokemon;

  //fetching pokemon details and its color
  const { isLoading } = useFetchPokemonDetails(pokemonName);
  const { pokemonColor } = useFetchPokemonColor(pokemonName);

  console.log(pokemonDetails);
  console.log(pokemonColor);

  // finding svg image of pokemon is present or not
  const svgImgPresent = pokemonDetails.sprites.other.dream_world.front_default;

  return (
    <>
      {isLoading ? (
        <Spinner
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%,-50%)"}
          thickness="4px"
          speed="0.75s"
          emptyColor="primary"
          color="button"
          size="xl"
        />
      ) : (
        <>
          {!pokemonDetails ? (
            <Box />
          ) : (
            <Box transition={"all 2s ease-out "} key={pokemonId}>
              <Stack p={4}>
                <Box>
                  <Flex justifyContent={"space-between"}>
                    <Flex direction={"column"}>
                      <Heading
                        color={
                          pokemonColor === undefined
                            ? "primary"
                            : `${pokemonColor}.500`
                        }
                        fontSize={{ md: "3rem" }}
                      >
                        {pokemonDetails.name !== "" &&
                          pokemonDetails.name.charAt(0).toUpperCase() +
                            pokemonDetails.name.slice(1)}
                      </Heading>
                      <Flex justifyContent={"center"} opacity={0.7}>
                        {pokemonDetails.types.map((type) => {
                          return (
                            <Text
                              key={type.type.name}
                              p={"7px"}
                              borderRadius={"25px"}
                              bg={
                                pokemonColor === undefined
                                  ? "primary"
                                  : pokemonColor
                              }
                              margin={"5px"}
                              color={"aqua"}
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
                    transition={"ease-in-out all .8s"}
                    _hover={{ transform: "scale(1.2) rotate(10deg) " }}
                  />
                </Center>
              </Stack>
              <Box
                mt={{ base: -14, md: -24 }}
                minH={"300px"}
                bgColor={pokemonColor === undefined ? "primary" : pokemonColor}
                borderRadius={"10%"}
                color={"gray.300"}
                opacity={0.7}
              >
                <Tabs>
                  <TabList color={"HighlightText"} textColor={"secondary"}>
                    <Tab fontWeight={"bold"}>About</Tab>
                    <Tab fontWeight={"bold"}>Base Stats</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Stack fontWeight={"medium"}>
                        <Table>
                          <Tbody>
                            <Tr fontWeight={"bold"}>
                              <Td>Species </Td>
                              <Td>
                                {pokemonDetails.species.name !== "" &&
                                  pokemonDetails.species.name
                                    .charAt(0)
                                    .toUpperCase() +
                                    pokemonDetails.species.name.slice(1)}
                              </Td>
                            </Tr>
                            <Tr fontWeight={"bold"}>
                              <Td>Height </Td>
                              <Td>{Number(pokemonDetails.height) * 10}cm</Td>
                            </Tr>
                            <Tr fontWeight={"bold"}>
                              <Td>Weight </Td>
                              <Td>{Number(pokemonDetails.weight) / 10}kg </Td>
                            </Tr>
                            <Tr fontWeight={"bold"}>
                              <Td>Ablities </Td>
                              <Td>
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
                          </Tbody>
                        </Table>
                      </Stack>
                    </TabPanel>
                    <TabPanel>
                      <Table fontWeight={"bold"}>
                        {pokemonDetails.stats.map((stat) => {
                          return (
                            <Tr key={Math.random() * stat.base_stat}>
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
                                  colorScheme={
                                    stat.base_stat < 50 ? "red" : "green"
                                  }
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

export default memo(PokemonDetailCard);
