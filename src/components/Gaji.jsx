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
  // Badge,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function Gaji({ pegawais, deletePegawai }) {
  if (!pegawais.length) {
    return (
      <Alert status="info">
        <AlertIcon />
        Belum ada pegawai
      </Alert>
    );
  }
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
      {pegawais.map(pegawai => (
        <HStack key={pegawai.id}>
          <VStack alignItems="left">
            <Text
              fontSize="xs"
              fontWeight="extrabold"
              textTransform="uppercase"
            >
              {pegawai.nik}
            </Text>
            <Text color="green.700">{pegawai.nama}</Text>
            <Table size="sm">
              <Tbody>
                <Tr>
                  <Td>
                    <Text>Tunjuangan</Text>
                  </Td>
                  <Td textAlign="right">{pegawai.gapok}</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>Gaji Pokok</Text>
                  </Td>
                  <Td textAlign="right">{pegawai.gapok}</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>Potongan</Text>
                  </Td>
                  <Td textAlign="right">{pegawai.potongan}</Td>
                </Tr>
                <Tr>
                  <Td textAlign="right">
                    <Text fontWeight="bold">Total</Text>
                  </Td>
                  <Td textAlign="right">{pegawai.total}</Td>
                </Tr>
              </Tbody>
            </Table>
          </VStack>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            onClick={() => deletePegawai(pegawai.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default Gaji;
