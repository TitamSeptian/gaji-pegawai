import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  // Text,
  useDisclosure,
  FormControl,
  FormLabel,
  // FormErrorMessage,
  // FormHelperText,
  Input,
  // Form,
  Stack,
  Radio,
  RadioGroup,
  useToast,
} from '@chakra-ui/react';
import { nanoid } from 'nanoid';

const AddGaji = ({ addPegawai }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [nama, setNama] = useState('');
  const [nik, setNik] = useState('');
  const [jk, setJk] = useState('');
  const [gol, setGol] = useState('');
  const submitHandle = e => {
    // console.log(
    //   `Nama: ${nama} | NIK: ${nik} | Jenis Kelamin: ${jk} | Golongan: ${gol}`
    // );
    const pegawai = {
      id: nanoid(),
      nik: nik,
      nama: nama,
      jk: jk,
      gol: gol,
    };
    e.preventDefault();
    addPegawai(pegawai);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pegawai</ModalHeader>
          <ModalCloseButton />

          <form onSubmit={submitHandle}>
            <ModalBody>
              <FormControl isRequired>
                <FormLabel htmlFor="nik">NIK</FormLabel>
                <Input
                  id="nik"
                  type="text"
                  variant="filled"
                  placeholder="Ex. 3211111111111111"
                  onChange={e => setNik(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired mt="4">
                <FormLabel htmlFor="nama">Nama</FormLabel>
                <Input
                  id="nama"
                  type="text"
                  variant="filled"
                  placeholder="Ex. Jhon Doe"
                  onChange={e => setNama(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired mt="4">
                <FormLabel htmlFor="jk">Jenis Kelamin</FormLabel>
                <RadioGroup name="jk" id="jk">
                  <Stack direction="row">
                    <Radio
                      value="Perempuan"
                      onChange={e => setJk(e.target.value)}
                    >
                      Perempuan
                    </Radio>
                    <Radio
                      value="Laki-Laki"
                      onChange={e => setJk(e.target.value)}
                    >
                      Laki-Laki
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <FormControl isRequired mt="4">
                <FormLabel htmlFor="gol">Golongan</FormLabel>
                <RadioGroup name="gol" id="gol">
                  <VStack>
                    <Stack direction="row">
                      <Radio value="I" onChange={e => setGol(e.target.value)}>
                        I
                      </Radio>
                      <Radio value="II" onChange={e => setGol(e.target.value)}>
                        II
                      </Radio>
                      <Radio value="III" onChange={e => setGol(e.target.value)}>
                        III
                      </Radio>
                      <Radio value="IV" onChange={e => setGol(e.target.value)}>
                        IV
                      </Radio>
                    </Stack>
                  </VStack>
                </RadioGroup>
              </FormControl>
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
export default AddGaji;
