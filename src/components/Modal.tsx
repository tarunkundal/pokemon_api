import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";

const BackdropOverlay = (props: any) => {
  return (
    <>
      <Modal onClose={props.onClose} isOpen={true}>
        <ModalOverlay />
        <ModalContent>
          <FiArrowLeft size={25} cursor={"pointer"} onClick={props.onClose} />

          <ModalBody> {props.children} </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BackdropOverlay;
