import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import BackdropOverlay from "./Modal";
import { useEffect, useState } from "react";
import PokemonDetailCard from "./PokemonDetailCard";
import { usePokemonStore } from "../store/PokemonProvider";

const PokemonCard = (props: any) => {
  const [pkColor, setPkColor] = useState();
  const [isLoading, setIsLoding] = useState(false);
  const { pokemonDetails } = usePokemonStore();
  const pokemonId = props.data + 1;

  // const pokemonId = pokemonDetails.id;
  const pokemonName = props.pokemon.name;

  console.log(props.pokemon);

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

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

  useEffect(() => {
    fetchPokemonColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonName]);

  return (
    <>
      {isOpen && (
        <BackdropOverlay isOpen={isOpen} onClose={closeModal}>
          <PokemonDetailCard id={pokemonId} pokemon={pokemonName} />
        </BackdropOverlay>
      )}
      {isLoading ? (
        <Spinner size={"xl"} />
      ) : (
        <Card
          overflow="hidden"
          w={"400px"}
          h={"270px"}
          m={"1%"}
          bgColor={pkColor === undefined ? "primary" : pkColor}
          opacity={0.7}
          boxShadow={"2xl"}
          borderRadius={"50px"}
          transition={"0.3s all ease-in "}
          _hover={{ transform: "scale(1.08)", cursor: "pointer" }}
          bgImage={
            "url(https://img.freepik.com/free-icon/pokeball_318-694460.jpg?size=626&ext=jpg&ga=GA1.1.823988085.1685946705&semt=ais)"
          }
          bgSize={"25%"}
          bgRepeat={"no-repeat"}
          bgPosition={"top"}
          p={"5px"}
          onClick={() => setIsOpen(true)}
        >
          <CardBody>
            <Flex>
              <Stack w={"50%"} spacing={5}>
                <Heading color={"primary"} my={"auto"} fontSize={"25px"}>
                  {props.pokemon.name !== undefined
                    ? pokemonName.toUpperCase()
                    : ""}
                </Heading>
              </Stack>
              <Stack w={"50%"}>
                <Text
                  opacity={0.6}
                  color={"secondary"}
                  fontWeight={"bold"}
                  fontSize={"3xl"}
                  ml={"50%"}
                >
                  {"#"}
                  {+pokemonId < 100 ? (
                    <>
                      {"0"}
                      {pokemonId}
                    </>
                  ) : (
                    pokemonId
                  )}
                </Text>
                <Image
                  boxSize={"90%"}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                />
              </Stack>
            </Flex>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default PokemonCard;
