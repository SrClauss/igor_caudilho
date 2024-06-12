import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useState, useEffect } from "react";
import ScoreQuestsSF from "./ScoreQuestsSF";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Button}  from "@mui/material";


export default function Lysholm({ onDataChange }) {
    const [expanded, setExpanded] = useState(false)
    const [score, setScore] = useState({})
    const [response, setResponse] = useState({})
    const [soma, setSoma] = useState(0)



    const handleDataChange = (result, response, index) => {
        const newScore = {
            ...score,
            [index]: result
        }
        const newResponse = {
            ...response,
            [index + 1]: response
        }

        setScore(newScore)
        setResponse(newResponse)




    }
    useEffect(() => {
        const values = Object.values(score).map((value) => value === undefined ? 0 : value)




        const sum = values.reduce((acc, value) => acc + value, 0)
        setSoma(sum)


        onDataChange({
            lysholmScore: score,
            lysholResponse: response,
            lysholmSoma: sum
        })



    }, [score])
    return (

        <Accordion expanded={expanded} onChange={(e) => setExpanded(!expanded)}>

            <AccordionSummary

                expandIcon={<ExpandMoreIcon />}

                
                >
                <h2 className='text-2xl md:text-3xl font-bold text-cyan-700 pb-3 text-center'>Lysholm ({soma})</h2>


            </AccordionSummary>
            <AccordionDetails>
                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 1) }}
                    prompt={"Ao andar, vc manca?"}
                    options={["Nunca", "Leve ou Periodicamento", "Intenso e Constantemente"]}
                    scores={[5, 3, 0]}
                    labelIndex={1}
                />
                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 2) }}
                    prompt={"Você precisa de apoio para andar?"}
                    options={["Não preciso", "Bengala ou muleta", "Não consigo andar de nenhuma maneira"]}
                    scores={[5, 2, 0]}
                    labelIndex={2}
                />
                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 3) }}
                    prompt={"Você sente seu joelho travar?"}
                    options={["Nenhum travamento ou sensação de travamento", "Tem sensação, mas sem travamento", "Travamento ocasional", "Frequente", "Articulação (junta) travada no exame"]}
                    scores={[15, 10, 6, 2, 0]}
                    labelIndex={3}

                />
                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 4) }}
                    prompt={"Você sente instabilidade no joelho?"}
                    multiline={true}
                    elementsPerRow={3}
                    options={["Nunca falseia", "Raramente, durante atividades atléticas ou outros exercícios pesados", "Frequentemente durante atividades atléticas ou outros exercícios pesados (ou incapaz de participação)", "Ocasionalmente em atividades diárias", "Frequentemente em atividades diárias", "Em cada passo"]}
                    scores={[25, 20, 15, 10, 5, 0]}
                    labelIndex={4}
                />
                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 5) }}
                    multiline={true}
                    prompt={"Você sente dor no joelho?"}
                    options={["Nenhuma", "Inconstante ou leve durante exercícios pesados", "Durante exercícios pesados", "Durante ou após caminhar mais de 2 Km", "Durante ou após caminhar menos de 2 Km", "Constante"]}
                    scores={[25, 20, 15, 10, 5, 0]}
                    labelIndex={5}
                />
                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 6) }}
                    prompt={"O seu joelho incha?"}
                    options={["Nunca", "Com exercícios pesados", "Com exercícios comuns", "Constante"]}
                    scores={[10, 6, 2, 0]}
                    labelIndex={6}
                />

                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 7) }}
                    prompt={"Ao subir escadas você sente:"}
                    options={["Nenhum problema", "Levemente prejudicado", "Um degrau cada vez", "Impossível"]}
                    scores={[10, 6, 2, 0]}
                    labelIndex={7}
                />
                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 8) }}
                    prompt={"Ao agachar"}
                    options={["Nenhum problema", "Levemente prejudicado", "Não além de 90 graus", "Impossível"]}
                    scores={[5, 4, 2, 0]}
                    labelIndex={8}
                />




                <Button type="text" className="block mx-auto mt-10 w-full" size="large" onClick={(e) => setExpanded(false)}>
                    Esconder
                </Button>

            </AccordionDetails>








        </Accordion>
    )
}