import React from 'react';
import { ChakraProvider, VStack, Heading, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Gaji from './components/Gaji';
import AddGaji from './components/AddGaji';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <ColorModeSwitcher alignSelf="flex-end" p={4} mt={4} mx={2} />
        <Heading mb={8} fontWeight="bold" size="2xl">
          GAJI PEGAWAI
        </Heading>
        <Gaji />
        <AddGaji />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
