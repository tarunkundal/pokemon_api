import {
  Box,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import useFetchPokemonByName from "../hooks/useFetchPokemonByName";
import useDebounce from "../hooks/useDebounce";

const Header = () => {
  const [searchVal, setSearchVal] = useState("");

  useFetchPokemonByName(searchVal);

  // handle onchange
  const handleOnChange = (e: { target: { value: any } }) => {
    setSearchVal(e.target.value);
  };

  // debounced func
  const processChange = useDebounce((e) => handleOnChange(e), 500);

  // submit form handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Stack
      h={"80px"}
      borderBottom={"2px"}
      borderBottomColor={"secondary"}
      p={"1rem"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-around"}
      bg={"primary"}
    >
      <Image
        src={"https://img.icons8.com/?size=2x&id=13708&format=png"}
        alt="logo"
        w={"12"}
        left={"2rem"}
      />
      <Stack w={{ base: "70%", md: "40%" }} color={"black"}>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              placeholder="Search Your Faviourate Pokemon"
              border={"2px"}
              borderColor={"teritory"}
              variant={"outline"}
              fontWeight={"medium"}
              defaultValue={searchVal}
              name="pokemonName"
              onKeyUp={processChange}
              _placeholder={{ color: "red" }}
            />
            <InputRightElement
              fontSize={"22px"}
              color={"button"}
              _hover={{ cursor: "pointer", color: "teritory" }}
            >
              <FiSearch type="submit" />
            </InputRightElement>
          </InputGroup>
        </form>
      </Stack>
      <Box />
    </Stack>
  );
};

export default Header;
