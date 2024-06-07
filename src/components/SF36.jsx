import { useState, useEffect } from "react";
import { Card } from "antd";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BateriaPerguntasSF from "./BateriaPerguntasSF";
import ScoreQuestsSF from "./ScoreQuestsSF";
export default function QuestionarioSF36({ onDataChange }) {

    const [perguntas, setPerguntas] = useState({})
    const [data, setData] = useState({
        s36: 0
    })



    const [soma, setSoma] = useState()
    useEffect(() => {
        setSoma(Object.values(data).reduce((acc, curr) => acc + curr, 0))
        onDataChange(soma)
    }, [perguntas])
    useEffect(() => {
        setData({ s36: soma })
    }, [soma])

    const handleDataChange = (value, key) => {
        setPerguntas({ ...perguntas, [key]: value })
    }

    return (

        <Accordion>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                expandIcon={<ExpandMoreIcon />}
                sx={{ padding: "30px" }}
            >
                <h2 className='text-2xl md:text-3xl font-bold text-cyan-700 pb-3 text-center'>SF36</h2>

            </AccordionSummary>
            <AccordionDetails>
                <Card className="bg-gray-100">
                    <p className="text-justify text-sm md:text-xl"><strong>Instruções:</strong> Esta pesquisa questiona você sobre sua saúde e quão bem você é capaz de fazer suas
                        actividades de vida diária. <strong>Não há respostas certas ou erradas</strong> relativamente a qualquer um dos
                        itens. Responda cada questão marcando a resposta como indicado. Caso você esteja inseguro em
                        como responder, por favor, tente responder o melhor que puder. Este questionário é de natureza
                        confidencial. O tratamento deste, por sua vez, é efectuado de uma forma global, não sendo sujeito a
                        uma análise individualizada, o que significa que o <strong>anonimato</strong> do colaborador é respeitado.</p>
                </Card>
                <ScoreQuestsSF
                
                    index={0}
                    prompt="Em geral, você diria que sua saúde é:"
                    options={["Excelente", "Muito boa", "Boa", "Regular", "Ruim"]}
                    scores={[1, 2, 3, 4, 5]}
                    onDataChange={(e) => handleDataChange(e, 0)}
                />





            </AccordionDetails>



        </Accordion>
    )
}