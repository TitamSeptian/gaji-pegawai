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
    localStorage.setItem('gapok', JSON.stringify(gapok));
  }, [pegawai]);

  const [gapok, setGapok] = useState(
    () =>
      JSON.parse(localStorage.getItem('gapok')) || [
        {
          gol: 'Ia',
          gapok: 2335800,
        },
        {
          gol: 'Ib',
          gapok: 2472900,
        },
        {
          gol: 'Ib',
          gapok: 2472900,
        },
        {
          gol: 'Id',
          gapok: 2686500,
        },
        {
          gol: 'IIa',
          gapok: 3373600,
        },
        {
          gol: 'IIb',
          gapok: 3516300,
        },
        {
          gol: 'IIb',
          gapok: 3665000,
        },
        {
          gol: 'IId',
          gapok: 3820000,
        },
        {
          gol: 'IIIa',
          gapok: 4236400,
        },
        {
          gol: 'IIIb',
          gapok: 4415600,
        },
        {
          gol: 'IIIb',
          gapok: 4602400,
        },
        {
          gol: 'IIId',
          gapok: 4797000,
        },
        {
          gol: 'IVa',
          gapok: 5000000,
        },
        {
          gol: 'IVb',
          gapok: 5211600,
        },
        {
          gol: 'IVb',
          gapok: 5431900,
        },
        {
          gol: 'IVd',
          gapok: 5661700,
        },
        {
          gol: 'IVe',
          gapok: 5901200,
        },
      ]
  );

  function gapokByGol(gol) {
    return gapok.filter(gapok => gapok.gol === gol)[0].gapok;
  }

  function updateConfigGapok(gol, newGapok) {
    setGapok(
      gapok.map(t => {
        if (t.gol === gol) {
          return { ...t, gapok: newGapok };
        }
        return t;
      })
    );
  }

  function getTotal(gapok, tunjangan, potongan) {
    gapok = Number(gapok);
    tunjangan = Number(tunjangan);
    potongan = Number(potongan);
    return gapok + tunjangan - potongan;
  }

  function addPegawai(x) {
    const gapok = gapokByGol(x.gol);
    x.gapok = gapok;
    x.total = getTotal(gapok, x.tunjangan, x.potongan);
    console.log(x);
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
