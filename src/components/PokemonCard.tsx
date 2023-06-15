import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import useFetchPokemonDetails from "../hooks/useFetchPokemonDetails";
import BackdropOverlay from "./Modal";
import { useState } from "react";
import PokemonDetailCard from "./PokemonDetailCard";

const PokemonCard = (props: any) => {
  const pokemonId = props.data + 1;
  useFetchPokemonDetails(pokemonId);

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <BackdropOverlay isOpen={isOpen} onClose={closeModal}>
          <PokemonDetailCard />
        </BackdropOverlay>
      )}
      <Card
        overflow="hidden"
        w={"400px"}
        h={"270px"}
        m={"1%"}
        bgColor={"teritory"}
        boxShadow={"2xl"}
        borderRadius={"50px"}
        transition={"0.3s all ease-in "}
        _hover={{ transform: "scale(1.01)", cursor: "pointer" }}
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
                  ? props.pokemon.name.toUpperCase()
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
                {"#0"}
                {pokemonId}
              </Text>
              <Image
                boxSize={"90%"}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
              />
            </Stack>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default PokemonCard;
