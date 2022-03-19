import React, { useEffect, useState } from 'react';
import { ChakraProvider, VStack, Heading, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Gaji from './components/Gaji';
import AddGaji from './components/AddGaji';

function App() {
  const [pegawai, setPegawai] = useState(
    () => JSON.parse(localStorage.getItem('pegawai')) || []
  );

  useEffect(() => {
    localStorage.setItem('pegawai', JSON.stringify(pegawai));
  }, [pegawai]);

  // const
  function addPegawai(x) {
    setPegawai([...pegawai, x]);
  }

  function deletePegawai(id) {
    const newPegawai = pegawai.filter(pegawai => pegawai.id !== id);
    setPegawai(newPegawai);
  }
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <ColorModeSwitcher alignSelf="flex-end" p={4} mt={4} mx={2} />
        <Heading mb={8} fontWeight="bold" size="2xl">
          GAJI PEGAWAI
        </Heading>
        <Gaji pegawais={pegawai} deletePegawai={deletePegawai} />
        <AddGaji addPegawai={addPegawai} />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
