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
  // useFetchPokemonByName(searchVal);

  // debouncing for optimization
  function debounce(
    func: (...args: any[]) => void,
    delay: number
  ): (...args: any[]) => void {
    let timeoutId: NodeJS.Timeout | null;

    return (...args: any[]) => {
      clearTimeout(timeoutId!);

      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  // function
  const handleValOnChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchVal(e.target.value);
    console.log(e.target.value);
  };

  const debouncedSearch = debounce(handleValOnChange, 500);

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
      <Stack w={"40%"} color={"black"}>
        <form>
          <InputGroup>
            <Input
              placeholder="Search Your Faviourate Pokemon"
              border={"2px"}
              borderColor={"teritory"}
              variant={"outline"}
              fontWeight={"medium"}
              value={searchVal}
              // onChange={handleValOnChange}
              // onKeyUp={debouncedSearch}
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
function debounceounce(
  handleValOnChange: (e: { target: { value: SetStateAction<string> } }) => void,
  arg1: number
) {
  throw new Error("Function not implemented.");
}
