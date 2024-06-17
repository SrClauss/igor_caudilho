import { useState, useEffect, useRef } from 'react'
import { Accordion, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BateriaPerguntas from './BateriaPerguntas';
import { Button, Card } from 'antd';
import { set } from 'firebase/database';



export default function Womac({ onDataChange, initialData = null}) {

    const [expanded, setExpanded] = useState(false)
    const [data, setData] = useState(initialData||{})
    const [soma, setSoma] = useState(initialData?.soma || 0)

    



    const handleSetData = (womac, object) => {
      
        const newData = {...data}
        newData[womac] = object
        setData(newData)
    }
    useEffect(() => {



     
        let sum = 0
        Object.keys(data).forEach((key) => {

            sum += data[key].soma
        })

        onDataChange({womac:{...data, soma:sum}})
        setSoma(sum)
     

        
    }, [data])
    







    return (
        <Accordion expanded={expanded} onChange={(e) => setExpanded(!expanded)} >
            <AccordionSummary

                expandIcon={<ExpandMoreIcon />}
            >
                <h2 className='text-2xl md:text-3xl font-bold text-cyan-700 pb-3 text-center'>WOMAC ({soma?parseFloat(soma/24).toFixed(1):data?.soma?data.soma:0})</h2>


            </AccordionSummary>
            <div className="text-center">

                <BateriaPerguntas
                    initialData={initialData?.womac1}
                    onDataChange={(object) => { handleSetData("womac1", object) }}
                    prompt="Intensidade da Dor"
                    index={0}
                    perguntas={[

                        "Caminhando em lugar plano.",
                        "Subindo ou descendo escadas.",
                        "À noite deitado na cama.",
                        "Sentando-se ou deitando-se.",
                        "Ficando de pé.",
                    ]} >


                    <Card className="text-justify text-sm md:text-xl bg-gray-100">As perguntas a seguir se referem à INTENSIDADE DA DOR que você está atualmente sentindo
                        devido a artrite de seu joelho. Para cada situação, por favor, coloque a intensidade da dor que sentiu nas últimas
                        72 horas (3 dias).</Card>
                </BateriaPerguntas>



                <BateriaPerguntas
                    initialData={initialData?.womac2}                  
                    onDataChange={(object) => { handleSetData("womac2", object) }}
                    prompt="Intensidade da Rigidez"
                    index={1} perguntas={[
                        "Qual é a intensidade de sua rigidez logo após acordar de manhã?",
                        "Qual é a intensidade de sua rigidez após se sentar, se deitar ou repousar no decorrer do dia?"]}
                >

                    <Card className="text-justify text-sm md:text-xl bg-gray-100">As perguntas a seguir se referem a intensidade de RIGIDEZ nas juntas (não dor), que você está
                        atualmente sentindo devido a artrite em seu joelho nas últimas 72 horas. Rigidez é uma sensação de restrição
                        ou dificuldade para movimentar suas juntas.</Card>
                </BateriaPerguntas>


                <BateriaPerguntas
                    initialData={initialData?.womac3}   
                    onDataChange={(object) => { handleSetData("womac3", object) }}
                    prompt="Atividade Física"
                    index={2}
                    perguntas={[
                        "Descer escadas.",
                        "Subir escadas.",
                        "Levantar-se estando sentada.",
                        "Ficar em pé.",
                        "Abaixar-se para pegar algo.",
                        "Andar no plano",
                        "Entrar e sair do carro",
                        "Ir fazer compras",
                        "Colocar meias",
                        "Levantar-se da cama",
                        "Tirar as meias",
                        "Ficar deitado na cama",
                        "Entrar e sair do banho",
                        "Se sentar.",
                        "Sentar e levantar do vaso sanitário.",
                        "Fazer tarefas domésticas pesadas.",
                        "Fazer tarefas domésticas leves"
                    ]} >

                    <Card className="text-justify text-sm md:text-xl bg-gray-100">As perguntas a seguir se referem a sua ATIVIDADE FÍSICA. Nós chamamos atividade física, sua
                        capacidade de se movimentar e cuidar de você mesmo(a). Para cada uma das atividades a seguir, por favor,
                        indique o grau de dificuldade que você está tendo devido à artrite em seu joelho durante as últimas 72 horas.
                    </Card>
                </BateriaPerguntas>
                <Button type="text" className="block mx-auto mt-10 w-full" size="large" onClick={(e) => setExpanded(false)}>
                    Esconder
                </Button>




            </div>
        </Accordion>
    )
}