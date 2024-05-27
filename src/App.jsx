import { useState } from 'react'
import Layout from './Layout'
import { Box, Card, Divider, Table } from '@mui/material'
import SliderDor from './components/SliderDor';
import QuestaoBilateral from './components/QuestaoBilateral';
import DadosPessoais from './components/DadosPessoais';
import AmplitudeMovimentoJoelho from './components/AmplitudeMovimentoJoelho';
import PerimetroCoxa from './components/PerimetroCoxa';
import DinamometroManual from './components/DinamometroManual';
import TableNormativoJoelho from './components/TableNormativoJoelho';

function App() {



  const handleChangeCheckboxes1 = (direito, esquerdo) => {

    console.log('direito', direito, esquerdo)


  }
  const handleSlide1change = (value) => {

    console.log('value', value)
  }


  return (
    <Layout>
      <h1 className="text-2xl lg:text-3xl text-center font-bold text-cyan-600 mt-14">
        AVALIAÇÃO FUNCIONAL DO JOELHO
      </h1>

      <DadosPessoais onSubmitData={(data) => console.log(data)} />

      <form id="avaliacao" className="mt-4 md:mt-8 p-4 md:p-10">
        <Card className='mt-4 p-2'>
          <Box className="mt-10 md:mt-16 text-center content-center">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-600 pb-3 mb-8">
              Escala Visual Analógica de dor de Dor
            </h2>
            <div className='flex justify-center'>

              < img src="/escala_dor.png" alt="escala dor" />
            </div>
          </Box>
          <div className='my-16'>

            <Divider className='mt-4' />
          </div>

          <QuestaoBilateral question={"Dor no joelho"} onChangeCheckboxes={handleChangeCheckboxes1} />
          <div className='my-16'>


          </div>
          <div className="text-center">
            <SliderDor title={"Melhor nivel de dor no melhor momento do dia (Direito)"} onSliderChange={handleSlide1change} />
          </div>
          <div className="text-center">
            <SliderDor title={"Melhor nivel de dor no melhor momento do dia (Esquerdo)"} onSliderChange={handleSlide1change} />
          </div>
        </Card >
        <AmplitudeMovimentoJoelho onDataChange={(data) => console.log(data)} />

        <PerimetroCoxa onDataChange={(data) => { console.log(data) }} />
        <DinamometroManual onDataChange={(data) => { console.log(data) }} />
        <TableNormativoJoelho />
     


      </form>







    </Layout >


  )
}

export default App
