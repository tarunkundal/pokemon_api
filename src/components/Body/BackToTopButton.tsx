import { Button } from "@chakra-ui/react";
import { BsArrowUp } from "react-icons/bs";

const BackToTop = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Button
        ml={"80%"}
        onClick={handleBackToTop}
        color={"red"}
        colorScheme="orange"
      >
        Back To Top <BsArrowUp fontSize={"2rem"} />
      </Button>
    </>
  );
};

export default BackToTop;
