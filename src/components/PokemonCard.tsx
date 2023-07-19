import {
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Image,
  Spinner,
} from "@chakra-ui/react";
import BackdropOverlay from "./Modal";
import { memo, useState } from "react";
import PokemonDetailCard from "./PokemonDetailCard";
import { usePokemonStore } from "../store/PokemonProvider";
import useFetchPokemonColor from "../hooks/useFetchPokemonColor";

const PokemonCard = (props: any) => {
  const [pokemonId, setPokemonId] = useState();
  const { pokemonDetails } = usePokemonStore();

  const pokemonName = props.pokemon.name;

  // fetching pokemon color
  const { pokemonColor, isLoading } = useFetchPokemonColor(pokemonName);

  // fetching pokemonId
  const fetchPokemonId = async () => {
    const res = await fetch(props.pokemon.url ? props.pokemon.url : "");
    const data = await res.json();

    setPokemonId(data.id);
  };
  props.pokemon.url && fetchPokemonId();

  // state for modal
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

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
        <Center>
          <Spinner
            thickness="6px"
            speed="0.75s"
            emptyColor="primary"
            color="button"
            size="xl"
          />
        </Center>
      ) : (
        <Card
          overflow="hidden"
          w={"400px"}
          h={"270px"}
          m={"1%"}
          bgColor={pokemonColor === undefined ? "primary" : pokemonColor}
          opacity={0.6}
          boxShadow={"2xl"}
          borderRadius={"50px"}
          transition={"0.3s all ease-in "}
          _hover={{
            transform: "scale(1.08) ",
            cursor: "pointer",
          }}
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
                  transform: "scale(1.2) rotate(-5deg)",
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
