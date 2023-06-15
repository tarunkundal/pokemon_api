import {
  Box,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";

const Header = () => {
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

      <InputGroup w={"40%"}>
        <Input
          placeholder="Search Your Faviourate Pokemon"
          border={"2px"}
          borderColor={"teritory"}
          variant={"outline"}
          fontWeight={"medium"}
        />
        <InputRightElement
          fontSize={"22px"}
          color={"button"}
          _hover={{ cursor: "pointer", color: "teritory" }}
        >
          <FiSearch />
        </InputRightElement>
      </InputGroup>
      <Box />
    </Stack>
  );
};

export default Header;
