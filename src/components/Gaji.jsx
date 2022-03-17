import React from 'react';
import {
  VStack,
  HStack,
  Text,
  IconButton,
  Spacer,
  StackDivider,
  Table,
  Tr,
  //   Th,
  Tbody,
  //   THead,
  Td,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function Gaji() {
  const gajis = [
    {
      id: 1,
      nik: '111111111111',
      nama: 'Nama Pegawai 1',
      jns_klm: 'Laki-laki',
      golongan: 'I',
      gapok: 1000000,
      tunjangan: 500000,
      potongan: 100000,
      total: 15000000,
    },
    {
      id: 2,
      nik: '211111111111',
      nama: 'Nama Pegawai 2',
      jns_klm: 'Laki-laki',
      golongan: 'I',
      gapok: 1000000,
      tunjangan: 500000,
      potongan: 100000,
      total: 15000000,
    },
  ];
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems="stretch"
    >
      {gajis.map(gaji => (
        <HStack>
          <VStack alignItems="left">
            <Text
              fontSize="xs"
              fontWeight="extrabold"
              textTransform="uppercase"
            >
              {gaji.nik}
            </Text>
            <Text color="green.700">{gaji.nama}</Text>
            <Table size="sm">
              <Tbody>
                <Tr>
                  <Td>
                    <Text>Tunjuangan</Text>
                  </Td>
                  <Td textAlign="right">{gaji.gapok}</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>Gaji Pokok</Text>
                  </Td>
                  <Td textAlign="right">{gaji.gapok}</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>Gaji Potongan</Text>
                  </Td>
                  <Td textAlign="right">{gaji.potongan}</Td>
                </Tr>
                <Tr>
                  <Td textAlign="right">
                    <Text fontWeight="bold">Total</Text>
                  </Td>
                  <Td textAlign="right">{gaji.total}</Td>
                </Tr>
              </Tbody>
            </Table>
          </VStack>
          <Spacer />
          <IconButton icon={<FaTrash />} />
        </HStack>
      ))}
    </VStack>
  );
}

export default Gaji;
