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
  Container,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import CGaji from './cGaji';
import toRupiah from '@develoka/angka-rupiah-js';

function Gaji({ pegawais, deletePegawai }) {
  function getTotal(gapok, tunjangan, potongan) {
    console.log(gapok, tunjangan, potongan);
    return Number(gapok) + Number(tunjangan) - Number(potongan);
  }

  if (!pegawais.length) {
    return (
      <Container>
        <Alert
          status="info"
          borderRadius="lg"
          maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
        >
          <AlertIcon />
          Belum ada pegawai
        </Alert>
      </Container>
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
            <Text color="grey.700">{pegawai.nama}</Text>
            <Table size="sm">
              <Tbody>
                <Tr>
                  <Td textAlign="left">
                    <Text fontWeight="bold">Gaji Total</Text>
                  </Td>
                  <Td textAlign="right">{toRupiah(parseInt(pegawai.total))}</Td>
                </Tr>
              </Tbody>
            </Table>
          </VStack>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            onClick={() => deletePegawai(pegawai.id)}
          />
          <CGaji pegawai={pegawai} />
        </HStack>
      ))}
    </VStack>
  );
}

export default Gaji;
