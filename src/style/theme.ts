import { extendTheme } from "@chakra-ui/react";
import bg from "../utils/output-onlinepngtools.png";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.50",
        backgroundImage: bg,
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
