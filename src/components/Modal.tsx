import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";

const BackdropOverlay = (props: any) => {
  return (
    <>
      <Modal onClose={props.onClose} isOpen={true}>
        <ModalOverlay />
        <ModalContent
          bgColor={"primary"}
          borderRadius={"10%"}
          minW={{ md: "700px" }}
        >
          <ModalHeader color={"button"}>
            <FiArrowLeft size={25} cursor={"pointer"} onClick={props.onClose} />
          </ModalHeader>

          <ModalBody> {props.children} </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BackdropOverlay;
