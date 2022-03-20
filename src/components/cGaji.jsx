import React, { useEffect, useState } from 'react';
import {
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Container,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { FaEye } from 'react-icons/fa';
import toRupiah from '@develoka/angka-rupiah-js';

class cGaji {
  constructor(id, nik, nama, golongan, gapok, tunjangan, potongan, jk) {
    this._id = id;
    this._nama = nama;
    this._nik = nik;
    this._gapok = Number(gapok);
    this._tunjangan = Number(tunjangan);
    this._potongan = Number(potongan);
    this._golongan = golongan;
    this._jk = jk;
  }
  get nik() {
    return this._nik;
  }
  get nama() {
    return this._nama;
  }
  get tunjangan() {
    return this._tunjangan;
  }
  get potongan() {
    return this._potongan;
  }
  get golongan() {
    return this._golongan;
  }
  get total_gaji() {
    return this._gapok + this._tunjangan - this._potongan;
  }
  get gapok() {
    return this._gapok;
  }
  get jk() {
    return this._jk;
  }
}

const CGajis = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const gajis = new cGaji(
    props.pegawai.id,
    props.pegawai.nik,
    props.pegawai.nama,
    props.pegawai.gol,
    props.pegawai.gapok,
    props.pegawai.tunjangan,
    props.pegawai.potongan,
    props.pegawai.jk
  );
  useEffect(() => {
    console.log(gajis);
  }, []);
  return (
    <>
      <IconButton icon={<FaEye />} onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="bold">
            Detai Pegawai {gajis.nama}
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Container>
              <VStack spacing={4} alignItems="left">
                <Heading as="h1" size="2xl">
                  {gajis.nama}
                </Heading>
                <Text>NIK : {gajis.nik}</Text>
                <Text>Jenis Kelamin : {gajis.jk}</Text>
                <Text>Golongan : {gajis.golongan}</Text>
                <Table variant="simple" px="8">
                  <TableCaption>
                    gaji pegawai sesuai dengan golongan dan di kalkilasikan
                    dengan potongan dan tunjangan
                  </TableCaption>
                  <Heading as="h1" size="md">
                    Gaji Pegawai
                  </Heading>
                  <Tbody>
                    <Tr>
                      <Td>Gaji Pokok</Td>
                      <Td isNumeric>{toRupiah(gajis.gapok)}</Td>
                    </Tr>
                    <Tr>
                      <Td>Tunjangan</Td>
                      <Td isNumeric>{toRupiah(gajis.tunjangan)}</Td>
                    </Tr>
                    <Tr>
                      <Td>Potongan</Td>
                      <Td isNumeric>{toRupiah(gajis.potongan)}</Td>
                    </Tr>
                    <Tr>
                      <Td textAlign="right" fontWeight="bold">
                        Total Gaji
                      </Td>
                      <Td isNumeric>{toRupiah(gajis.total_gaji)}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </VStack>
            </Container>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CGajis;
