import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
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
    Checkbox,
} from '@mui/material'
import { useEffect, useState } from 'react';
1
export default function DadosPessoais({ onSubmitData, initialData = null }) {

    const [nome, setNome] = useState(initialData?.nome || '')
    const [cpf, setCpf] = useState(initialData?.cpf || '')
    const [idade, setIdade] = useState(initialData?.idade || '')
    const [altura, setAltura] = useState(initialData?.altura || '')
    const [peso, setPeso] = useState(initialData?.peso || '')
    const [sexo, setSexo] = useState(initialData?.sexo || 'Masculino')
    const [lados, setLados] = useState(initialData?.lados || [])
    const [membro, setMembro] = useState(initialData?.membro || 'direito')
    const [data, setData] = useState(dayjs(initialData?.data) || dayjs())
    const [hora, setHora] = useState(dayjs(initialData?.hora) || dayjs())
    const [queixa, setQueixa] = useState(initialData?.queixa || '')

    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        onSubmitData(JSON.parse(JSON.stringify({ dadosPessoais: { nome, idade, altura, peso, sexo, lados, membro, data, hora, queixa, cpf } })));
    }, [nome, idade, altura, peso, sexo, lados, membro, data, hora, queixa, cpf])

    const validateCPF = (cpf) => {
        cpf = cpf.replace(/[^\d]+/g,'');	
        if(cpf === '') return false;	
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length !== 11 || 
            cpf === "00000000000" || 
            cpf === "11111111111" || 
            cpf === "22222222222" || 
            cpf === "33333333333" || 
            cpf === "44444444444" || 
            cpf === "55555555555" || 
            cpf === "66666666666" || 
            cpf === "77777777777" || 
            cpf === "88888888888" || 
            cpf === "99999999999")
                return false;		
        // Valida 1o digito	
        let add = 0;	
        for (let i=0; i < 9; i ++)		
            add += parseInt(cpf.charAt(i)) * (10 - i);	
            let rev = 11 - (add % 11);	
            if (rev === 10 || rev === 11)		
                rev = 0;	
            if (rev !== parseInt(cpf.charAt(9)))		
                return false;		
        // Valida 2o digito	
        add = 0;	
        for (let i = 0; i < 10; i ++)		
            add += parseInt(cpf.charAt(i)) * (11 - i);	
        rev = 11 - (add % 11);	
        if (rev === 10 || rev === 11)	
            rev = 0;	
        if (rev !== parseInt(cpf.charAt(10)))
            return false;		
        return true;   
    }

    const onCPFChange = (e) => {
        const { target: { value } } = e;
        setCpf(value)
        if (!validateCPF(value)) {
            alert('CPF inválido')
        
        }

        else{

            //coloque um ponto entre o terceiro e o quarto dígito
            //coloque outro ponto entre o sexto e o sétimo dígito
            //coloque um hífen entre o nono e o décimo dígito
            let cpf = value.replace(/\D/g, ''); //Remove tudo o que não é dígito
            cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos

            cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
            cpf = cpf.replace(/(\d{3})(\d)/, '$1-$2'); //Coloca um hífen entre o terceiro e o quarto dígitos


            setCpf(cpf)
        }


    }
    return (

        <div id="dadosPessoais" className="mt-2 md:mt-8 p-4 md:p-10">
            <Box
                component="form"
                noValidate
                className="w-full flex"
                autoComplete="off"
            >
                <TextField

                    disabled={disabled}
                    id="nome"
                    label="Nome"
                    variant="outlined"
                    className="w-full"
                    size="medium"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

            </Box>

            <Grid container spacing={2} className='pt-4'>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        disabled={disabled}
                        id="idade"
                        label="Idade"
                        variant="outlined"
                        type="number"
                        className='w-full'
                        size="medium"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">Anos</InputAdornment>,
                        }}
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}

                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField

                        disabled={disabled}
                        id="altura"
                        label="Altura"
                        variant="outlined"
                        type="number"
                        className='w-full'
                        size="medium"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                        }}
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}

                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        disabled={disabled}
                        id='peso'
                        label='Peso'
                        type="text"
                        variant='outlined'
                        className='w-full'
                        size='medium'
                        InputProps={{
                            endAdornment: <InputAdornment position="end">kg</InputAdornment>,

                        }}
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}

                    />
                </Grid>
            </Grid>


            <Grid container spacing={2} className='pt-4'>
                <Grid item xs={12} sm={6} md={4}>
                    <FormControl className="w-full">
                        <InputLabel id="sexo">Sexo</InputLabel>
                        <Select
                            disabled={disabled}
                            labelId="sexo"
                            id="sexo"
                            label="Sexo"
                            className='w-full text-left'
                            size='medium'
                            value={sexo}
                            onChange={(e) => setSexo(e.target.value)}
                        >
                            <MenuItem value={"Masculino"}>Masculino</MenuItem>
                            <MenuItem value={"Feminino"}>Feminino</MenuItem>

                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FormControl className="w-full">
                        <InputLabel id="lados">Membros Lesados</InputLabel>
                        <Select



                            multiple
                            disabled={disabled}
                            labelId="lados"
                            id="lados"
                            label="Lados"
                            className='w-full text-left'
                            size='medium'
                            input={<OutlinedInput label="Membros Lesados" />}
                            value={lados}
                            renderValue={(selected) => selected.join(', ')}
                            onChange={(e) => {

                                const { target: { value } } = e;
                                setLados(
                                    e.target.value

                                )
                            }}
                        >
                            <MenuItem value={'Braço Direito'}>
                                <Checkbox checked={lados.indexOf('Braço Direito') > -1} />
                                Braço Direito
                            </MenuItem>
                            <MenuItem value={'Braço Esquerdo'}>
                                <Checkbox checked={lados.indexOf('Braço Esquerdo') > -1} />
                                Braço Esquerdo
                            </MenuItem>
                            <MenuItem value={'Perna Direita'}>
                                <Checkbox checked={lados.indexOf('Perna Direita') > -1} />
                                Perna Direita
                            </MenuItem>
                            <MenuItem value={'Perna Esquerda'}>
                                <Checkbox checked={lados.indexOf('Perna Esquerda') > -1} />
                                Perna Esquerda
                            </MenuItem>

                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FormControl className="w-full">
                        <InputLabel id="lado">Membro Dominante</InputLabel>
                        <Select

                            disabled={disabled}
                            labelId="lado"
                            id="lado"
                            label="Lado"
                            className='w-full text-left'
                            size='medium'
                            input={<OutlinedInput label="Membro Dominante" />}
                            value={membro}
                            onChange={(e) => setMembro(e.target.value)}
                        >
                            <MenuItem value={'direito'}>Direito</MenuItem>
                            <MenuItem value={'esquerdo'}>Esquerdo</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>
            </Grid>

            <Grid container spacing={2} className='pt-4'>

                <Grid item xs={12} sm={6} md={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                            disabled={disabled}
                            ampm={false}
                            views={['hours', 'minutes']}
                            id="hora"
                            label="Hora"
                            type="text"
                            variant="outlined"
                            className='w-full'
                            size="medium"
                            value={hora}
                            onChange={(e) => setHora(e.target.value)}


                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>

                        <DatePicker
                            disabled={disabled}
                            className='w-full'
                            label="Data"
                            value={data}
                            format='DD/MM/YYYY'

                            onChange={(e) => setData(e.target.value)}

                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>


                    <TextField

                        disabled={disabled}
                        id="cpf"
                        label="CPF"
                        variant="outlined"
                        type="text"
                        className='w-full'
                        size="medium"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        onBlur={(e) => {onCPFChange(e)}}
                        onFocus={(e) => {
                            setCpf(cpf.replace(/\D/g, ''))
                        }}

                    />
                </Grid>





            </Grid>
            <Box className='pt-4'>
                <FormControl className="w-full">
                    <TextField

                        disabled={disabled}
                        id="queixa"
                        className="text-justify"
                        label="Queixa Principal"
                        multiline
                        rows={4}
                        variant="outlined"
                        value={queixa}
                        onChange={(e) => setQueixa(e.target.value)}
                    />
                </FormControl>
            </Box>
            <Box className='pt-4'>
                <button type="submit" onClick={() => {
                    onSubmitData(JSON.parse(JSON.stringify({ dadosPessoais: { nome, idade, altura, peso, sexo, lados, membro, data, hora, queixa, cpf} })));
                    Cookies.set('lastRegister', JSON.stringify({ nome, idade, altura, peso, sexo, lados, membro, data, hora, cpf }))
                    Cookies.set('lastQueixa', JSON.stringify(queixa))

                    setDisabled(!disabled)


                }}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded w-full">
                    {disabled ? 'Editar' : 'Salvar'}
                </button>
                <button type="button"
                    disabled={Cookies.get('lastRegister') ? false : true}
                    onClick={(e) => {
                        const paciente = Cookies.get('lastRegister') ? JSON.parse(Cookies.get('lastRegister')).nome : null
                        const response = window.confirm(`Deseja recuperar os dados do último registro do paciente ${paciente}?`)
                        if (response) {
                            setNome(JSON.parse(Cookies.get('lastRegister')).nome)
                            setIdade(JSON.parse(Cookies.get('lastRegister')).idade)
                            setAltura(JSON.parse(Cookies.get('lastRegister')).altura)
                            setPeso(JSON.parse(Cookies.get('lastRegister')).peso)
                            setSexo(JSON.parse(Cookies.get('lastRegister')).sexo)
                            setLados(JSON.parse(Cookies.get('lastRegister')).lados)
                            setMembro(JSON.parse(Cookies.get('lastRegister')).membro)
                            setData(dayjs(JSON.parse(Cookies.get('lastRegister')).data, 'DD-MM-YY'))
                            setHora(dayjs(JSON.parse(Cookies.get('lastRegister')).hora, 'HH:mm'))
                            setQueixa(JSON.parse(Cookies.get('lastQueixa')))
                            setCpf(JSON.parse(Cookies.get('lastRegister')).cpf)

                        }
                        setDisabled(true)


                    }}








                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
                    Recuperar Dados
                </button>
            </Box>



        </div>
    )

}