import { extendTheme } from "@chakra-ui/react";
import bg from "../utils/output-onlinepngtools.png";

const theme = extendTheme({
  fonts: {
    body: "Playfair Display, serif",
    heading: "Lumanosimo, cursive",
  },

  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.50",
        backgroundImage: bg,
        heading: "",
      },
    },
  },
  colors: {
    primary: "#FFF3E2",
    secondary: "#FFE5CA",
    teritory: "#FA9884",
    button: "#E74646",
  },
});

export default theme;
