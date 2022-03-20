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
  Text,
  Input,
  VStack,
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
  const [tunjangan, setTunjangan] = useState('');
  const [potongan, setPotongan] = useState('');
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
      tunjangan: tunjangan,
      gapok: 0,
      potongan: potongan,
      total: 0,
    };
    e.preventDefault();
    addPegawai(pegawai);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Tambah Pegawai</Button>

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
                  autoComplete="off"
                />
              </FormControl>
              <FormControl isRequired mt="4">
                <FormLabel htmlFor="nama">Nama</FormLabel>
                <Input
                  id="nama"
                  type="text"
                  variant="filled"
                  placeholder="Ex. Jhon Doe"
                  autoComplete="off"
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
                  <Stack
                    direction="column"
                    borderColor="gray.100"
                    borderWidth="2px"
                    p="4"
                    borderRadius="lg"
                  >
                    <Text>Golongan I</Text>
                    <Stack direction="row" alignContent="left">
                      <Radio value="Ia" onChange={e => setGol(e.target.value)}>
                        Ia
                      </Radio>
                      <Radio value="Ib" onChange={e => setGol(e.target.value)}>
                        Ib
                      </Radio>
                      <Radio value="Ic" onChange={e => setGol(e.target.value)}>
                        Ic
                      </Radio>
                      <Radio value="Id" onChange={e => setGol(e.target.value)}>
                        Id
                      </Radio>
                    </Stack>
                    <Text>Golongan II</Text>
                    <Stack direction="row" alignContent="left">
                      <Radio value="IIa" onChange={e => setGol(e.target.value)}>
                        IIa
                      </Radio>
                      <Radio value="IIb" onChange={e => setGol(e.target.value)}>
                        IIb
                      </Radio>
                      <Radio value="IIc" onChange={e => setGol(e.target.value)}>
                        IIc
                      </Radio>
                      <Radio value="IId" onChange={e => setGol(e.target.value)}>
                        IId
                      </Radio>
                    </Stack>
                    <Text>Golongan III</Text>
                    <Stack direction="row" alignContent="left">
                      <Radio
                        value="IIIa"
                        onChange={e => setGol(e.target.value)}
                      >
                        IIIa
                      </Radio>
                      <Radio
                        value="IIIb"
                        onChange={e => setGol(e.target.value)}
                      >
                        IIIb
                      </Radio>
                      <Radio
                        value="IIIc"
                        onChange={e => setGol(e.target.value)}
                      >
                        IIIc
                      </Radio>
                      <Radio
                        value="IIId"
                        onChange={e => setGol(e.target.value)}
                      >
                        IIId
                      </Radio>
                    </Stack>
                    <Text>Golongan IV</Text>
                    <Stack direction="row" alignContent="left">
                      <Radio value="IVa" onChange={e => setGol(e.target.value)}>
                        IVa
                      </Radio>
                      <Radio value="IVb" onChange={e => setGol(e.target.value)}>
                        IVb
                      </Radio>
                      <Radio value="IVc" onChange={e => setGol(e.target.value)}>
                        IVc
                      </Radio>
                      <Radio value="IVd" onChange={e => setGol(e.target.value)}>
                        IVd
                      </Radio>
                      <Radio value="IVe" onChange={e => setGol(e.target.value)}>
                        IVe
                      </Radio>
                    </Stack>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <FormControl isRequired mt="4">
                <FormLabel htmlFor="tunjangan">Tunjangan(Rp)</FormLabel>
                <Input
                  id="tunjanagan"
                  type="text"
                  variant="filled"
                  placeholder="200000000"
                  autoComplete="off"
                  onChange={e => setTunjangan(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired mt="4">
                <FormLabel htmlFor="tunjangan">Potongan(Rp)</FormLabel>
                <Input
                  id="potongan"
                  type="text"
                  variant="filled"
                  placeholder="300000000"
                  autoComplete="off"
                  onChange={e => setPotongan(e.target.value)}
                />
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
