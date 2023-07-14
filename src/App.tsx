import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import theme from "./style/theme";
import Body from "./components/Body";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Body />
  </ChakraProvider>
);
