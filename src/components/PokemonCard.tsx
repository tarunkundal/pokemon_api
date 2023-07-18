import {
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import BackdropOverlay from "./Modal";
import { memo, useEffect, useState } from "react";
import PokemonDetailCard from "./PokemonDetailCard";
import { usePokemonStore } from "../store/PokemonProvider";

const PokemonCard = (props: any) => {
  const [pkColor, setPkColor] = useState();
  const [pokemonId, setPokemonId] = useState();
  const [isLoading, setIsLoding] = useState(false);
  const { pokemonDetails } = usePokemonStore();

  const pokemonName = props.pokemon.name;

  // fetching pokemonId
  const fetchPokemonId = async () => {
    const res = await fetch(props.pokemon.url ? props.pokemon.url : "");
    const data = await res.json();

    setPokemonId(data.id);
  };
  fetchPokemonId();

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const fetchPokemonColor = async () => {
    try {
      setIsLoding(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${
          pokemonName ? pokemonName : ""
        }/`
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

  // finding svg image of pokemon is present or not
  const svgImgPresent = pokemonDetails.sprites.other.dream_world.front_default;

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
          opacity={0.6}
          boxShadow={"2xl"}
          borderRadius={"50px"}
          transition={"0.3s all ease-in "}
          _hover={{ transform: "scale(1.08)", cursor: "pointer" }}
          bgImage={
            "url('https://img.icons8.com/?size=512&id=Ody4hAHZW5Fa&format=png')"
          }
          bgRepeat={"no-repeat"}
          bgSize={"revert"}
          p={"5px"}
          onClick={() => setIsOpen(true)}
        >
          <CardBody>
            <Flex px={5} justifyContent={"space-between"}>
              <Heading
                color={"secondary"}
                my={"auto"}
                fontSize={"25px"}
                w={"60%"}
              >
                {props.pokemon.name !== undefined
                  ? pokemonName.toUpperCase()
                  : ""}
              </Heading>
              <Heading
                opacity={0.8}
                color={"teritory"}
                fontWeight={"bold"}
                fontSize={"3xl"}
              >
                {"#"}
                {pokemonId === undefined ? (
                  ""
                ) : +pokemonId < 100 ? (
                  <>
                    {"0"}
                    {pokemonId}
                  </>
                ) : (
                  pokemonId
                )}
              </Heading>
            </Flex>
            <Center>
              <Image
                src={
                  svgImgPresent
                    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`
                    : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemonId}.png`
                }
                transition={"ease-in-out all .5s"}
                _hover={{
                  transform: "scale(1.2)",
                }}
                alt="PokemonImg"
                h={"180px"}
              />
            </Center>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default memo(PokemonCard);
