import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useState, useEffect } from "react";
import ScoreQuestsSF from "./ScoreQuestsSF";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Button} from 'antd'
export default function Kujala({ onDataChange,  initialData = null}) {
    const [expanded, setExpanded] = useState(false)
    const [data, setData] = useState(initialData || {})
    const [soma, setSoma] = useState(initialData?.soma || 0)

    const handleDataChange = (result, response, index) => {
        const newData = {...data}
        newData[index] = {result, response}

        setData(newData)




    }


    useEffect(() => {
        let sum = 0
        Object.keys(data).forEach((key) => {
            if (data[key].result) {
                sum += data[key].result
            }
        })

        onDataChange({kujala:{...data, soma:sum}})
        setSoma(sum)

        
    }, [data])
    const defInitialData = (number) => {
        if (!initialData) {
            return null
        }
        if (!initialData[number]) {
            return null
        }
        return initialData[number]

    }

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


                    initialData={defInitialData(1)}
                    onDataChange={(result, response) => { handleDataChange(result, response, 1) }}
                    prompt={"Ao andar, você manca?"}
                    options={["Não", "As vezes", "Sempre"]}
                    scores={[5, 3, 0]}
                    labelIndex={1}

                />
                <ScoreQuestsSF
                    initialData={defInitialData(2)}
                    onDataChange={(result, response) => { handleDataChange(result, response, 2) }}
                    prompt={"Você sustenta o peso do corpo?"}
                    options={["Sim, totalmente sem dor", "Sim, mas com dor", "Não, é impossível"]}
                    scores={[5, 3, 0]}
                    labelIndex={2}
                />
                <ScoreQuestsSF
                    initialData={defInitialData(3)}
                    onDataChange={(result, response) => { handleDataChange(result, response, 3) }}
                    prompt={"Você caminha:"}
                    options={["Sem limite de distância", "Mais de 2 km", "Entre 1 a 2 km", "Sou incapaz de caminhar"]}
                    scores={[5, 3, 2, 0]}
                    labelIndex={3}
                />
                <ScoreQuestsSF
                    initialData={defInitialData(4)}
                    onDataChange={(result, response) => { handleDataChange(result, response, 4) }}
                    prompt={"Para subir e descer escadas você:"}
                    options={["Não tem dificuldade", "Tem leve dor apenas ao descer", "Tem dor ao descer e ao subir", "Não consegue subir nem descer escadas"]}
                    scores={[10, 8, 5, 0]}
                    labelIndex={4}
                />
                <ScoreQuestsSF
                    initialData={defInitialData(5)}
                    onDataChange={(result, response) => { handleDataChange(result, response, 5) }}
                    prompt={"Para agachar você:"}
                    multiline={true}

                    options={["Não tem dificuldade", "Sente dor após vários agachamentos", "Sente dor em um/cada agachamento", "Só é possível descarregando parcialmente o peso do corpo na perna afetada", "Não consegue"]}
                    scores={[5, 4, 3, 2, 0]}
                    labelIndex={5}
                />
                <ScoreQuestsSF
                    initialData={defInitialData(6)}
                    onDataChange={(result, response) => { handleDataChange(result, response, 6) }}
                    prompt={"Para correr você"}
                    options={["Não tem dificuldade", "Sente dor após 2km", "Sente dor leve desde o início", "Sente dor forte", "Não consegue"]}
                    scores={[10, 8, 6, 3, 0]}
                    labelIndex={6}
                />
                <ScoreQuestsSF
                    initialData={defInitialData(7)}
                    onDataChange={(result, response) => { handleDataChange(result, response, 7) }}
                    prompt={"Para pular você:"}
                    options={["Não tem dificuldade", "Tem leve dificuldade", "Tem dor constante", "Não consegue"]}
                    scores={[10, 7, 2, 0]}
                    labelIndex={7}
                />
                <ScoreQuestsSF
                    initialData={defInitialData(8)}
                    onDataChange={(result, response) => { handleDataChange(result, response, 8) }}
                    prompt={"Em relação á sentar-se prolongadamente com os joelhos flexionados:"}
                    multiline={true}
                    options={["Não sente dor", "Sente dor ao sentar somente após realização de exercícios", "Sente dor constante", "Sente dor que faz com que tenha que estender os joelhos por um tempo", "Não consegue"]}
                    scores={[10, 8, 6, 4, 0]}
                    labelIndex={8}
                />
                <ScoreQuestsSF
                    initialData={defInitialData(9)}
                    onDataChange={(result, response) => { handleDataChange(result, response, 9) }}
                    prompt={"Você sente dor no joelho afetado?"}
                    options={["Não", "Leve e ás vezes", "Tenho dor que prejudica o sono", "Forte e ás vezes", "Forte e constante"]}
                    scores={[10, 8, 6, 3, 0]}
                    labelIndex={9}
                />
                <ScoreQuestsSF
                    initialData={defInitialData(10)}
                    onDataChange={(result, response) => { handleDataChange(result, response, 10) }}
                    prompt={"Quanto ao inchaço:"}
                    options={["Não apresento", "Tenho apenas após muito esforço", "Tenho após atividades diárias", "Tenho toda noite", "Tenho constantemente"]}
                    scores={[10, 8, 6, 4, 0]}
                    labelIndex={10}
                />
                <ScoreQuestsSF
                    initialData={defInitialData(11)}
                    onDataChange={(result, response) => { handleDataChange(result, response, 11) }}
                    multiline={true}
                    prompt={"Movimento anormal doloroso da patela ao ajoelhar-se (subluxação)"}
                    options={["Está ausente", "Ás vezes em atividades esportivas", "Ás vezes em atividades diárias", "Pelo menos um deslocamento comprovado", "Mais de dois deslocamentos"]}
                    scores={[10, 6, 4, 2, 0]}
                    labelIndex={11}
                />
                <ScoreQuestsSF
                    initialData={defInitialData(12)}
                    onDataChange={(result, response) => { handleDataChange(result, response, 12) }}
                    prompt={"Você perdeu massa muscular (atrofia) da coxa?"}
                    options={["Nenhuma", "Pouca", "Muita"]}
                    scores={[5, 3, 0]}
                    labelIndex={12}
                />

                <ScoreQuestsSF
                    initialData={defInitialData(13)}
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