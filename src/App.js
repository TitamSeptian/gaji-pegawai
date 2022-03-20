import React, { useEffect, useState } from 'react';
import { ChakraProvider, VStack, Heading, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Gaji from './components/Gaji';
import AddGaji from './components/AddGaji';
import ConfigGapok from './components/ConfigGapok';

function App() {
  const [pegawai, setPegawai] = useState(
    () => JSON.parse(localStorage.getItem('pegawai')) || []
  );
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
          gol: 'Ic',
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
          gol: 'IIc',
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
          gol: 'IIIc',
          gapok: 4602400,
        },
        {
          gol: 'IIId',
          gapok: 4797000,
        },
        {
          gol: 'IVa',
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

  function syncGajiPegawai(value) {
    const x = value;
    if (!pegawai.length) {
      return;
    }
    console.log('gapok : ', gapok);
    value.forEach(p => {
      console.log(p.gapok);
      p.gapok = gapokByGol(p.gol);
      p.total = getTotal(p.total, p.tunjangan, p.gapok);
    });
    console.log('new pegawai :', value);
    console.log('old pegawai :', pegawai);
    setPegawai(value);
  }

  function updateConfigGapok(gol, newGapok) {
    const x = {
      gol: gol,
      gapok: newGapok,
    };
    const gapokIndex = gapok.findIndex(gapok => gapok.gol === gol);
    const updateGapok = { ...gapok[gapokIndex], gapok: newGapok };
    const updatedGapok = [
      ...gapok.slice(0, gapokIndex),
      updateGapok,
      ...gapok.slice(gapokIndex + 1),
    ];
    console.log('new gapok :', updatedGapok);
    console.log('old gapok :', gapok);
    setGapok(updatedGapok);
    syncGajiPegawai(pegawai);
  }

  function getTotal(gapok, tunjangan, potongan) {
    return Number(gapok) + Number(tunjangan) - Number(potongan);
  }

  function addPegawai(x) {
    const gapok = gapokByGol(x.gol);
    x.gapok = gapok;
    x.total = Number(getTotal(gapok, x.tunjangan, x.potongan));
    // console.log(x);
    setPegawai([...pegawai, x]);
  }

  function deletePegawai(id) {
    const newPegawai = pegawai.filter(pegawai => pegawai.id !== id);
    setPegawai(newPegawai);
  }
  useEffect(() => {
    localStorage.setItem('pegawai', JSON.stringify(pegawai));
    localStorage.setItem('gapok', JSON.stringify(gapok));
    // syncGapokPegawai(pegawai);
    // syncGajiPegawai(pegawai);
  }, [pegawai, gapok]);
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <ColorModeSwitcher alignSelf="flex-end" p={4} mt={4} />
        <ConfigGapok
          alignSelf="flex-end"
          p={4}
          mx={2}
          ConfigGapok={gapok}
          updateConfigGapok={updateConfigGapok}
        />
        <Heading mb={8} fontWeight="bold" size="2xl">
          GAJI PEGAWAI
        </Heading>

        <AddGaji addPegawai={addPegawai} />
        <Gaji
          pegawais={pegawai}
          deletePegawai={deletePegawai}
          GetTotal={getTotal}
          // mt={4}
        />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
