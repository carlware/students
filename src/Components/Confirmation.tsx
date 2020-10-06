import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/core';
import React from 'react';

interface Props {
  onCancel: () => void
  onConfirm: () => void
  isOpen: boolean
  title: string
}

function Confirmation({ onCancel, onConfirm, isOpen, title, children }: React.PropsWithChildren<Props>) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onCancel}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>
          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onCancel}>Cancel</Button>
            <Button variant="ghost" onClick={onConfirm}>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Confirmation;
