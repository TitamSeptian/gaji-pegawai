import React from 'react';
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  useEditableControls,
  ButtonGroup,
  IconButton,
  Flex,
  Editable,
  EditablePreview,
  EditableInput,
  Stack,
} from '@chakra-ui/react';
import { AiFillSetting } from 'react-icons/ai';
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';

const ConfigGapok = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();
    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
      </Flex>
    );
  }
  const submitHandle = e => {
    e.preventDefault();
    alert('assd');
    const inputGol = document.querySelectorAll('.golongan');
    // inputGol.forEach(input => {
    //   const gol = input.gol;
    //   const gapok = input.gapok;
    //   props.updateConfigGapok(gol, gapok);
    // });
  };

  return (
    <>
      <Button leftIcon={<AiFillSetting />} {...props} onClick={onOpen}>
        Konfigurasi Gaji
      </Button>
      <Modal isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pegawai</ModalHeader>
          <ModalCloseButton />

          <form onSubmit={submitHandle}>
            <ModalBody>
              <VStack>
                {props.ConfigGapok.map(gapok => (
                  <Editable
                    textAlign="right"
                    defaultValue={gapok.gapok}
                    fontSize="md"
                    isPreviewFocusable={false}
                    key={gapok.gol}
                    // onChange={e => console.log(e)}
                    onSubmit={e => props.updateConfigGapok(gapok.gol, e)}
                  >
                    <HStack justifyContent="space-between">
                      <FormLabel>Golongan {gapok.gol}</FormLabel>
                      <EditablePreview />
                      {/* Here is the custom input */}
                      <Input
                        as={EditableInput}
                        name={gapok.gol}
                        className="golongan"
                      />
                      <EditableControls />
                    </HStack>
                  </Editable>
                ))}
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Submit
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConfigGapok;
