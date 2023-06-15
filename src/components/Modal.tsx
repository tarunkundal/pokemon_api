import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

const BackdropOverlay = (props: any) => {
  return (
    <>
      <Modal onClose={props.onClose} isOpen={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            left={"2px"}
            color={"secondary"}
            bg={"teritory"}
            _hover={{ bg: "button" }}
            size={"md"}
          />
          <ModalBody> {props.children} </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BackdropOverlay;
