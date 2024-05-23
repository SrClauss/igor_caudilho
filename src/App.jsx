import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Layout'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Grid,
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  
} from '@mui/material'

function App() {
  const [count, setCount] = useState(0)


  return (
    <Layout>
      <h1 className="text-2xl lg:text-3xl text-center font-bold text-cyan-600 mt-14">
        AVALIAÇÃO FUNCIONAL DO JOELHO
      </h1>
      <form className="mt-2 md:mt-8 p-4 md:p-10">
        <Box
          component="form"
          noValidate
          className="w-full flex"
          autoComplete="off"
        >
          <TextField
            id="nome"
            label="Nome"
            variant="outlined"
            className="w-full"
            size="medium"
          />

        </Box>

        <Grid container spacing={2} className='pt-4'>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              id="idade"
              label="Idade"
              variant="outlined"
              type="number"
              className='w-full'
              size="medium"
              InputProps={{
                endAdornment: <InputAdornment position="end">Anos</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              id="altura"
              label="Altura"
              variant="outlined"
              type="number"
              className='w-full'
              size="medium"
              InputProps={{
                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              id='peso'
              label='Peso'
              type="text"
              variant='outlined'
              className='w-full'
              size='medium'
              InputProps={{
                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                
              }}
            
            />
          </Grid>
        </Grid>


        <Grid container spacing={2} className='pt-4'>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl className="w-full">
              <InputLabel id="sexo">Sexo</InputLabel>
              <Select
                labelId="sexo"
                id="sexo"
                label="Sexo"
                className='w-full text-left'
                size='medium'
              >
                <MenuItem value={10}>Masculino</MenuItem>
                <MenuItem value={20}>Feminino</MenuItem>
                <MenuItem value={30}>Outro</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl className="w-full">
              <InputLabel id="lado">Membro Lesado</InputLabel>
              <Select
                labelId="lado"
                id="lado"
                label="Lado"
                className='w-full text-left'
                size='medium'
                input={<OutlinedInput label="Membro Lesado" />}
              >
                <MenuItem value={10}>Braço Direito</MenuItem>
                <MenuItem value={20}>Braço Esquerdo</MenuItem>
                <MenuItem value={30}>Perna Direita</MenuItem>
                <MenuItem value={40}>Perna Esquerda</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl className="w-full">
              <InputLabel id="lado">Membro Dominante</InputLabel>
              <Select
                labelId="lado"
                id="lado"
                label="Lado"
                className='w-full text-left'
                size='medium'
                input={<OutlinedInput label="Membro Dominante" />}
              >
                <MenuItem value={10}>Direito</MenuItem>
                <MenuItem value={20}>Esquerdo</MenuItem>
              </Select>
            </FormControl>

          </Grid>
        </Grid>

        <Grid container spacing={2} className='pt-4'>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              id="data"
              label="HD"
              type="text"
              variant="outlined"
              className='w-full'
              size="medium"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              id="hora"
              label="Hora"
              type="text"
              variant="outlined"
              className='w-full'
              size="medium"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>

                <DatePicker
                  className='w-full'
                  label="Data"

                />
            </LocalizationProvider>
          </Grid>

        </Grid>
        <Box className='pt-4'>
          <FormControl className="w-full">
            <TextField
              id="queixa"
              className="text-justify"
              label="Queixa Principal"
              multiline
              rows={4}
              variant="outlined"



            />
          </FormControl>
        </Box>
        <Box className="mt-10 md:mt-16">
          <h2 className="text-lg md:text-2xl font-bold text-cyan-600 pb-3">
            Escala Visual Analógica de dor de Dor
          </h2>
          <img src="src/assets/escala_dor.png" alt="escala dor" />
        </Box>
        <Box>
          <h3></h3>
        </Box>
        

      </form>


      




    </Layout >


  )
}

export default App
