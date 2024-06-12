import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useState, useEffect } from "react";
import ScoreQuestsSF from "./ScoreQuestsSF";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Button} from 'antd'
export default function Kujala({ onDataChange, initialValues = null}) {
    const [expanded, setExpanded] = useState(false)
    const [score, setScore] = useState(initialValues?.kujalaScore||{})
    const [response, setResponse] = useState(initialValues?.kujalaResponse|| {})
    const [soma, setSoma] = useState(initialValues?.kujalaSoma || 0)

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
            kujalaScore: score,
            kujalaResponse: response,
            kujaSoma: sum
        })

    }, [score])
   

    return (
        <Accordion expanded={expanded} onChange={(e, isExpanded) => setExpanded(isExpanded)}>

            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
    
                id="panel1bh-header"
            >
                <h2 className='text-2xl md:text-3xl font-bold text-cyan-700 pb-3 text-center'>Kujala ({soma})</h2>
            </AccordionSummary>

            <AccordionDetails>

                <ScoreQuestsSF

                    onDataChange={(result, response) => { handleDataChange(result, response, 1) }}
                    prompt={"Ao andar, você manca?"}
                    options={["Não", "As vezes", "Sempre"]}
                    scores={[5, 3, 0]}
                    labelIndex={1}

                />
                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 2) }}
                    prompt={"Você sustenta o peso do corpo?"}
                    options={["Sim, totalmente sem dor", "Sim, mas com dor", "Não, é impossível"]}
                    scores={[5, 3, 0]}
                    labelIndex={2}
                />
                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 3) }}
                    prompt={"Você caminha:"}
                    options={["Sem limite de distância", "Mais de 2 km", "Entre 1 a 2 km", "Sou incapaz de caminhar"]}
                    scores={[5, 3, 2, 0]}
                    labelIndex={3}
                />
                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 4) }}
                    prompt={"Para subir e descer escadas você:"}
                    options={["Não tem dificuldade", "Tem leve dor apenas ao descer", "Tem dor ao descer e ao subir", "Não consegue subir nem descer escadas"]}
                    scores={[10, 8, 5, 0]}
                    labelIndex={4}
                />
                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 5) }}
                    prompt={"Para agachar você:"}
                    multiline={true}

                    options={["Não tem dificuldade", "Sente dor após vários agachamentos", "Sente dor em um/cada agachamento", "Só é possível descarregando parcialmente o peso do corpo na perna afetada", "Não consegue"]}
                    scores={[5, 4, 3, 2, 0]}
                    labelIndex={5}
                />
                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 6) }}
                    prompt={"Para correr você"}
                    options={["Não tem dificuldade", "Sente dor após 2km", "Sente dor leve desde o início", "Sente dor forte", "Não consegue"]}
                    scores={[10, 8, 6, 3, 0]}
                    labelIndex={6}
                />
                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 7) }}
                    prompt={"Para pular você:"}
                    options={["Não tem dificuldade", "Tem leve dificuldade", "Tem dor constante", "Não consegue"]}
                    scores={[10, 7, 2, 0]}
                    labelIndex={7}
                />
                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 8) }}
                    prompt={"Em relação á sentar-se prolongadamente com os joelhos flexionados:"}
                    multiline={true}
                    options={["Não sente dor", "Sente dor ao sentar somente após realização de exercícios", "Sente dor constante", "Sente dor que faz com que tenha que estender os joelhos por um tempo", "Não consegue"]}
                    scores={[10, 8, 6, 4, 0]}
                    labelIndex={8}
                />
                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 9) }}
                    prompt={"Você sente dor no joelho afetado?"}
                    options={["Não", "Leve e ás vezes", "Tenho dor que prejudica o sono", "Forte e ás vezes", "Forte e constante"]}
                    scores={[10, 8, 6, 3, 0]}
                    labelIndex={9}
                />
                <ScoreQuestsSF

                    onDataChange={(result, response) => { handleDataChange(result, response, 10) }}
                    prompt={"Quanto ao inchaço:"}
                    options={["Não apresento", "Tenho apenas após muito esforço", "Tenho após atividades diárias", "Tenho toda noite", "Tenho constantemente"]}
                    scores={[10, 8, 6, 4, 0]}
                    labelIndex={10}
                />
                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 11) }}
                    multiline={true}
                    prompt={"Movimento anormal doloroso da patela ao ajoelhar-se (subluxação)"}
                    options={["Está ausente", "Ás vezes em atividades esportivas", "Ás vezes em atividades diárias", "Pelo menos um deslocamento comprovado", "Mais de dois deslocamentos"]}
                    scores={[10, 6, 4, 2, 0]}
                    labelIndex={11}
                />
                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 12) }}
                    prompt={"Você perdeu massa muscular (atrofia) da coxa?"}
                    options={["Nenhuma", "Pouca", "Muita"]}
                    scores={[5, 3, 0]}
                    labelIndex={12}
                />

                <ScoreQuestsSF
                    onDataChange={(result, response) => { handleDataChange(result, response, 13) }}
                    prompt={"Você tem dificuldade para dobrar o joelho afetado?"}
                    options={["Nenhuma", "Pouca", "Muita"]}
                    scores={[5, 3, 0]}
                    labelIndex={13}
                />
                <Button type="text" className="block mx-auto mt-10 w-full" size="large" onClick={(e)=>setExpanded(false)}>
                    Esconder
                </Button>

            </AccordionDetails>
        </Accordion>
    )

}