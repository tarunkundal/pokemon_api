import {
  Box,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";
import { SetStateAction, useEffect, useState } from "react";
import useFetchPokemonByName from "../hooks/useFetchPokemonByName";

const Header = () => {
  const [searchVal, setSearchVal] = useState("");
  useFetchPokemonByName(searchVal);

  const handlePokemonSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  useEffect(() => {
    const delayBounceFn = setTimeout(() => {}, 2000);
    return clearTimeout(delayBounceFn);
  }, [searchVal]);

  const handleValOnChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchVal(e.target.value);
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
        src={
          "https://cdn-icons-png.flaticon.com/512/528/528098.png?w=1380&t=st=1686712774~exp=1686713374~hmac=939f3d110d2ffbf74c52d619dae6785dac5704cfb6958bb4ebbba4271232e7eb"
        }
        alt="logo"
        w={"12"}
        left={"2rem"}
      />
      <Stack w={"40%"}>
        <form onSubmit={handlePokemonSearch}>
          <InputGroup>
            <Input
              placeholder="Search Your Faviourate Pokemon"
              border={"2px"}
              borderColor={"teritory"}
              variant={"outline"}
              fontWeight={"medium"}
              value={searchVal}
              onChange={handleValOnChange}
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
