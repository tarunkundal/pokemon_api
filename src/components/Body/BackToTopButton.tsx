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
        m={2}
        ml={{ md: "80%" }}
        onClick={handleBackToTop}
        color={"white"}
        colorScheme="orange"
      >
        Back To Top <BsArrowUp fontSize={"2rem"} />
      </Button>
    </>
  );
};

export default BackToTop;
