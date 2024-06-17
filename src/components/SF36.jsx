import { useState, useEffect } from "react";
import { Button, Card } from "antd";
import { Accordion, AccordionSummary, AccordionDetails, CardHeader } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScoreQuestsSF from "./ScoreQuestsSF";
import InstrucoesSF36 from "./InstrucoesSF36";

export default function QuestionarioSF36({ onDataChange, initialData =null }) {

    const [data, setData] = useState(initialData || {})
    const [score8, setScore8] = useState([6.0, 4.75, 3.5, 2.25, 1.0])
    const [expanded, setExpanded] = useState(false)


    const generateLabel = (initialData) => {

        const totalRespondidas = Object.keys(initialData).filter(key => data[key]?.response).length

        
        if (totalRespondidas === 36) {

            let total = 0
            Object.keys(initialData).forEach(key => {
               if (initialData[key].score) {
                   total += initialData[key].score

              
               }
            })

            return `Total de pontos: ${total}`

        }
        else {
            return `${totalRespondidas} de 36 itens respondidos`
        }

    }
    const [label, setLabel] = useState(initialData ? generateLabel(initialData) : "0 de 36 itens respondidos")
    const handleDataChange = (score, response, index) => {

        const scoreResponse = { score, response }
        const newData = { ...data }
        newData[index] = scoreResponse
        setData(newData)




    }


    useEffect(() => {

    }, [data])
    useEffect(() => {
        const pontuacoes = Object.keys(data).map(key => data[key].score)
        if (pontuacoes[21]) {
            if (pontuacoes[21] === 6.0) {
                setScore8([6, 6, 6, 6, 6])
            } else if (pontuacoes[21] >= 2.0 && pontuacoes[21] <= 5.4) {
                setScore8([5, 4, 3, 2, 1])
            } else {
                setScore8([6.0, 4.75, 3.5, 2.25, 1.0])
            }
        }
    }, [data[21]])

    useEffect(() => {
        const totalRespondidas = Object.keys(data).filter(key => data[key].response).length
        if (totalRespondidas === 36) {

            let total = 0
            Object.keys(data).forEach(key => {
                if (data[key].score){


                    total += data[key].score
                }
            })


            setLabel(`Total de pontos: ${total}`)

            const dominions = calcDominions()
            onDataChange({ sf36: { ...data, total, dominions } })
        }
        else {
            setLabel(`${totalRespondidas} de 36 itens respondidos`)
        }


    }, [data])
    const range = (start, end) => {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }


    const calcDominions = () => {
        const pontuacoes = Object.keys(data).map(key => data[key].score)
        //capacidade funcinal = questões de label 3
        const capacidadeFuncional = parseFloat(((range(3, 8).map(i => pontuacoes[i]).reduce((acc, item) => acc + item) - 10) * 100) / 20).toFixed(2)
        //limitação aspectos fisicos = questões de label 4
        const limitacaoAspectosFisicos = parseFloat(((range(9, 12).map(i => pontuacoes[i]).reduce((acc, item) => acc + item) - 4) * 100) / 4).toFixed(2)
        //dor = questão 7 e 8
        const dor = parseFloat(((pontuacoes[7] + pontuacoes[8] - 2) * 100) / 6).toFixed(2)
        //estado geral de saúde = questões 1 e 11
        const estadoGeralSaude = parseFloat(((pontuacoes[1] + pontuacoes[11] - 5) * 100) / 20).toFixed(2)
        //vitalidade 09 somente os itens a e g i
        const vitalidade = parseFloat(((pontuacoes[23] + pontuacoes[27] + pontuacoes[29] + pontuacoes[31] - 4) * 100) / 20).toFixed(2)
        //aspectos sociais = questão 6 e 10
        const aspectosSociais = parseFloat(((pontuacoes[20] + pontuacoes[32] - 2) * 100) / 8).toFixed(2)
        //limitacos aspectos emocionais = todas questões 5
        const limitacoesAspectosEmocionais = parseFloat(((range(13, 16).map(i => pontuacoes[i]).reduce((acc, item) => acc + item) - 4) * 100) / 16).toFixed(2)
        //saude mental, 	09 (somente para os itens b,c,d,f,h)
        const saudeMental = parseFloat(((pontuacoes[24] + pontuacoes[25] + pontuacoes[26] + pontuacoes[28] + pontuacoes[30] - 5) * 100) / 20).toFixed(2)

        return {
            capacidadeFuncional,
            limitacaoAspectosFisicos,
            dor,
            estadoGeralSaude,
            vitalidade,
            aspectosSociais,
            limitacoesAspectosEmocionais,
            saudeMental



        }


    }
    const RenderDominions = () => {
        const dominions = calcDominions()
        return (

            <Card className="bg-gray-100 m-4">

                <CardHeader title="Resultados por domínios" />
                <ul className="list-none">
                    <li><strong>Capacidade Funcional: </strong>{isNaN(dominions.capacidadeFuncional) ? "" : dominions.capacidadeFuncional}</li>
                    <li><strong>Limitação por Aspectos Físicos: </strong>{isNaN(dominions.limitacaoAspectosFisicos) ? "" : dominions.limitacaoAspectosFisicos}</li>
                    <li><strong>Dor: </strong>{isNaN(dominions.dor) ? "" : dominions.dor}</li>
                    <li><strong>Estado Geral de Saúde: </strong>{isNaN(dominions.estadoGeralSaude) ? "" : dominions.estadoGeralSaude}</li>
                    <li><strong>Vitalidade: </strong>{isNaN(dominions.vitalidade) ? "" : dominions.vitalidade}</li>
                    <li><strong>Aspectos Sociais: </strong>{isNaN(dominions.aspectosSociais) ? "" : dominions.aspectosSociais}</li>
                    <li><strong>Limitações por Aspectos Emocionais: </strong>{isNaN(dominions.limitacoesAspectosEmocionais) ? "" : dominions.limitacoesAspectosEmocionais}</li>
                    <li><strong>Saúde Mental: </strong>{isNaN(dominions.saudeMental) ? "" : dominions.saudeMental}</li>






                </ul>

            </Card>


        )
    }
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

        <Accordion expanded={expanded} onChange={(e) => setExpanded(!expanded)}>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                expandIcon={<ExpandMoreIcon />}

            >
                <h2 className='text-2xl md:text-3xl font-bold text-cyan-700 pb-3 text-center'>SF36 ({label})</h2>

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
                <InstrucoesSF36 instrucoes="Escolha uma opção para cada item do questionário.">
                    <ScoreQuestsSF
                        initialData={defInitialData("1")}
                        labelIndex={1}
                        prompt="Em geral, você diria que sua saúde é:"
                        options={["Excelente", "Muito boa", "Boa", "Regular", "Ruim"]}
                        scores={[5.0, 4.4, 3.4, 2.0, 1.0]}
                        onDataChange={(score, response) => handleDataChange(score, response, 1)}
                    />
                    <ScoreQuestsSF
                        initialData={defInitialData("2")}
                        labelIndex={2}
                        prompt="Comparado com o ano passado, como você classificaria sua saúde em geral?"
                        options={["Muito melhor agora do que há um ano", "Um pouco melhor agora do que há um ano", "A mesma de um ano para cá", "Um pouco pior do que há um ano", "Muito pior agora do que há um ano"]}
                        scores={[5.0, 4.4, 3.4, 2.0, 1.0]}
                        onDataChange={(score, response) => handleDataChange(score, response, 2)}
                    />
                </InstrucoesSF36>
                <InstrucoesSF36
                    instrucoes={`3. Os seguintes itens são sobre actividades que você poderia fazer actualmente 
                        durante um dia comum. Devido à sua saúde, você teria dificuldade para fazer estas actividades?                       
                        Neste caso, quando?`}>
                    <ScoreQuestsSF

                        initialData={defInitialData("3")}
                        labelIndex={"a"}
                        prompt="Atividades vigorosas, que exigem muito esforço, tais como correr, levantar objectos pesados, praticar desportos extenuantes."
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(score, response) => handleDataChange(score, response, 3)}
                    />
                    <ScoreQuestsSF

                        initialData={defInitialData("4")}
                        labelIndex={"b"}
                        prompt="Atividades moderadas, tais como mover uma mesa, passar aspirador de pó, jogar bola, varrer a casa."
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(score, response) => handleDataChange(score, response, 4)}
                    />
                    <ScoreQuestsSF
                        initialData={defInitialData("5")}
                        labelIndex={"c"}
                        prompt="Levantar ou carregar mantimentos"
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(score, response) => handleDataChange(score, response, 5)}
                    />
                    <ScoreQuestsSF
                        initialData={defInitialData("6")}
                        labelIndex={"d"}
                        prompt="Subir vários lances de escada"
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(score, response) => handleDataChange(score, response, 6)}
                    />
                    <ScoreQuestsSF
                        initialData={defInitialData("7")}
                        labelIndex={"e"}
                        prompt="Subir um lance de escada"
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(score, response) => handleDataChange(score, response, 7)}
                    />
                    <ScoreQuestsSF
                        initialData={defInitialData("8")}
                        labelIndex={"f"}
                        prompt="Curvar-se, ajoelhar-se ou dobrar-se"
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(score, response) => handleDataChange(score, response, 8)}
                    />
                    <ScoreQuestsSF
                        initialData={defInitialData("9")}
                        labelIndex={"g"}
                        prompt="Andar mais de 1 quilómetro"
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(score, response) => handleDataChange(score, response, 9)}
                    />
                    <ScoreQuestsSF
                        initialData={defInitialData("10")}
                        labelIndex={"h"}
                        prompt="Andar vários quarteirões"
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(score, response) => handleDataChange(score, response, 10)}
                    />
                    <ScoreQuestsSF
                        initialData={defInitialData("11")}
                        labelIndex={"i"}
                        prompt="Andar um quarteirão"
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(score, response) => handleDataChange(score, response, 11)}
                    />
                    <ScoreQuestsSF

                        initialData={defInitialData("12")}
                        labelIndex={"j"}
                        prompt="Tomar banho ou vestir-se"
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(score, response) => handleDataChange(score, response, 12)}
                    />


                </InstrucoesSF36>
                <InstrucoesSF36
                    instrucoes={`4. Durante as últimas 4 semanas, você teve algum dos seguintes problemas com seu trabalho
                                    ou com alguma atividade regular, como conseqüência de sua saúde física?`}>
                    <ScoreQuestsSF
                        initialData={defInitialData("13")}
                        labelIndex={"a"}
                        prompt="Você diminuiu a quantidade de tempo que se dedicava ao seu trabalho ou a outras atividades?"
                        options={["Sim", "Não"]}
                        scores={[1, 2]}
                        onDataChange={(score, response) => handleDataChange(score, response, 13)}
                    />
                    <ScoreQuestsSF

                        initialData={defInitialData("14")}
                        labelIndex={"b"}
                        prompt="Realizou menos tarefas do que você gostaria?"
                        options={["Sim", "Não"]}
                        scores={[1, 2]}
                        onDataChange={(score, response) => handleDataChange(score, response, 14)}
                    />

                    <ScoreQuestsSF
                        initialData={defInitialData("15")}
                        labelIndex={"c"}
                        prompt="Esteve limitado no seu tipo de trabalho ou a outras atividades."
                        options={["Sim", "Não"]}
                        scores={[1, 2]}
                        onDataChange={(score, response) => handleDataChange(score, response, 15)}
                    />

                    <ScoreQuestsSF
                        initialData={defInitialData("16")}
                        labelIndex={"d"}
                        prompt="Teve dificuldade de fazer seu trabalho ou outras atividades (p. ex. necessitou de um esforço extra)."
                        options={["Sim", "Não"]}
                        scores={[1, 2]}
                        onDataChange={(score, response) => handleDataChange(score, response, 16)}
                    />

                </InstrucoesSF36>
                <InstrucoesSF36
                    instrucoes={`5. Durante as últimas 4 semanas, você teve algum dos seguintes problemas com seu trabalho
                                    ou outra atividade regular diária, como conseqüência de algum problema emocional (como
                                    se sentir deprimido ou ansioso)? `}>
                    <ScoreQuestsSF
                        initialData={defInitialData("17")}
                        labelIndex={"a"}
                        prompt="Você diminuiu a quantidade de tempo que se dedicava ao seu trabalho ou a outras atividades?"
                        options={["Sim", "Não"]}
                        scores={[1, 2]}
                        onDataChange={(score, response) => handleDataChange(score, response, 17)}
                    />
                    <ScoreQuestsSF
                        initialData={defInitialData("18")}
                        labelIndex={"b"}
                        prompt="Realizou menos tarefas do que você gostaria?"
                        options={["Sim", "Não"]}
                        scores={[1, 2]}
                        onDataChange={(score, response) => handleDataChange(score, response, 18)}

                    />

                    <ScoreQuestsSF
                        initialData={defInitialData("19")}
                        labelIndex={"c"}
                        prompt="Não realizou ou fez qualquer das atividades com tanto cuidado como geralmente faz."
                        options={["Sim", "Não"]}
                        scores={[1, 2]}
                        onDataChange={(score, response) => handleDataChange(score, response, 19)}
                    />
                </InstrucoesSF36>
                <InstrucoesSF36
                    instrucoes={``}>
                    <ScoreQuestsSF
                        initialData={defInitialData("20")}
                        labelIndex={6}
                        prompt="Durante as últimas 4 semanas, de que maneira sua saúde física ou problemas emocionais
                            interferiram nas suas atividades sociais normais, em relação à família, amigos ou em grupo?"
                        options={["De forma alguma", "Um pouco", "Moderadamente", "Bastante", "Extremamente"]}
                        scores={[5, 4, 3, 2, 1]}
                        onDataChange={(score, response) => handleDataChange(score, response, 20)}
                    />
                </InstrucoesSF36>
                <InstrucoesSF36
                    instrucoes={""}>
                    <ScoreQuestsSF
                        initialData={defInitialData("21")}
                        labelIndex={7}
                        prompt="Quanta dor no corpo você teve durante as últimas 4 semanas?"
                        options={["Nenhuma", "Muito Leve", "Leve", "Moderada", "Grave", "Muito Grave"]}
                        scores={[6.0, 5.4, 4.2, 3.1, 2.0, 1.0]}
                        onDataChange={(score, response) => handleDataChange(score, response, 21)}
                    />
                </InstrucoesSF36>

                <InstrucoesSF36
                    instrucoes={""}>
                    <ScoreQuestsSF
                        initialData={defInitialData("22")}
                        labelIndex={8}
                        prompt=" Durante as últimas 4 semanas, quanto a dor interferiu com seu trabalho normal (incluindo o trabalho dentro de casa)?"
                        options={["De forma alguma", "Um pouco", "Moderadamente", "Bastante", "Extremamente"]}
                        scores={score8}
                        onDataChange={(score, response) => handleDataChange(score, response, 22)}
                    />

                </InstrucoesSF36>
                <InstrucoesSF36

                    instrucoes={`9. Para cada questão abaixo, por favor dê uma resposta que mais se 
                                    aproxime da maneira como você se sente, em relação às últimas 4 semanas.`}>

                    <ScoreQuestsSF
                        initialData={defInitialData("23")}
                        labelIndex={"a"}
                        prompt="Por quanto tempo você se sente cheio de vigor, força, e animado?"
                        options={["Sempre", "A maior parte do tempo", "Boa parte do tempo", "Alguma parte do tempo", "Um pouco do tempo", "Nunca"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(score, response) => handleDataChange(score, response, 23)}

                    />
                    <ScoreQuestsSF
                        initialData={defInitialData("24")}
                        labelIndex={"b"}
                        prompt="Por quanto tempo se sente nervosa(o)?"
                        options={["Nunca", "Quase nunca", "Às vezes", "Quase sempre", "Sempre"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(score, response) => handleDataChange(score, response, 24)}
                    />
                    <ScoreQuestsSF
                        initialData={defInitialData("25")}
                        labelIndex={"c"}
                        prompt="Por quanto tempo se sente tão deprimido que nada pode animá-lo?"
                        options={["Nunca", "Quase nunca", "Às vezes", "Quase sempre", "Sempre"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(score, response) => handleDataChange(score, response, 25)}

                    />

                    <ScoreQuestsSF
                        initialData={defInitialData("26")}
                        labelIndex={"d"}
                        prompt="Por quanto tempo se sente calmo ou tranquilo?"
                        options={["Sempre", "A maior parte do tempo", "Boa parte do tempo", "Alguma parte do tempo", "Um pouco do tempo", "Nunca"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(score, response) => handleDataChange(score, response, 26)}
                    />
                    <ScoreQuestsSF
                        initialData={defInitialData("27")}
                        labelIndex={"e"}
                        prompt="Por quanto tempo se sente com muita energia?"
                        options={["Sempre", "A maior parte do tempo", "Boa parte do tempo", "Alguma parte do tempo", "Um pouco do tempo", "Nunca"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(score, response) => handleDataChange(score, response, 27)}

                    />
                    <ScoreQuestsSF
                        initialData={defInitialData("28")}
                        labelIndex={"f"}
                        prompt="Por quanto tempo se sente desanimado ou abatido?"
                        options={["Nunca", "Quase nunca", "Às vezes", "Quase sempre", "Sempre"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(score, response) => handleDataChange(score, response, 28)}
                    />
                    <ScoreQuestsSF
                        initialData={defInitialData("29")}
                        labelIndex={"g"}
                        prompt="Por quanto tempo se sente esgotado?"
                        options={["Nunca", "Quase nunca", "Às vezes", "Quase sempre", "Sempre"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(score, response) => handleDataChange(score, response, 29)}
                    />
                    <ScoreQuestsSF
                        initialData={defInitialData("30")}
                        labelIndex={"h"}
                        prompt="Por quanto tempo se sente uma pessoa feliz?"
                        options={["Sempre", "A maior parte do tempo", "Boa parte do tempo", "Alguma parte do tempo", "Um pouco do tempo", "Nunca"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(score, response) => handleDataChange(score, response, 30)}
                    />

                    <ScoreQuestsSF
                        initialData={defInitialData("31")}
                        labelIndex={"i"}
                        prompt="Por quanto tempo se sente cansado?"
                        options={["Nunca", "Quase nunca", "Às vezes", "Quase sempre", "Sempre"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(score, response) => handleDataChange(score, response, 31)}

                    />

                </InstrucoesSF36>
                <InstrucoesSF36

                    instrucoes={""}>
                    <ScoreQuestsSF
                        initialData={defInitialData("32")}
                        labelIndex={10}
                        prompt="Durante as últimas 4 semanas, por quanto tempo a sua saúde física ou problemas emocionais interferiram em suas atividades sociais (como visitar amigos, parentes, etc)?"
                        options={["Sempre", "A maior parte do tempo", "Boa parte do tempo", "Poucas Vezes", "Nunca"]}
                        scores={[1, 2, 3, 4, 5]}
                        onDataChange={(score, response) => handleDataChange(score, response, 32)}
                    />
                </InstrucoesSF36>
                <InstrucoesSF36
                    instrucoes={"11. O quanto verdadeiro ou falso é cada uma das afirmações para você?"}>
                    <ScoreQuestsSF
                        initialData={defInitialData("33")}
                        labelIndex={"a"}
                        prompt="Eu costumo adoecer um pouco mais facilmente que as outras pessoas"
                        options={["Definitivamente verdadeiro", "A maioria das vezes verdadeiro", "Não sei", "A maioria das vezes falso", "Definitivamente falso"]}
                        scores={[1, 2, 3, 4, 5]}
                        onDataChange={(score, response) => handleDataChange(score, response, 33)}
                    />
                    <ScoreQuestsSF
                        initialData={defInitialData("34")}
                        labelIndex={"b"}
                        prompt="Eu sou tão saudável quanto qualquer pessoa que eu conheça"
                        options={["Definitivamente verdadeiro", "A maioria das vezes verdadeiro", "Não sei", "A maioria das vezes falso", "Definitivamente falso"]}
                        scores={[5, 4, 3, 2, 1]}
                        onDataChange={(score, response) => handleDataChange(score, response, 34)}
                    />

                    <ScoreQuestsSF

                        initialData={defInitialData("35")}
                        labelIndex={"c"}
                        prompt="Eu acho que a minha saúde vai piorar"
                        options={["Definitivamente verdadeiro", "A maioria das vezes verdadeiro", "Não sei", "A maioria das vezes falso", "Definitivamente falso"]}
                        scores={[1, 2, 3, 4, 5]}
                        onDataChange={(score, response) => handleDataChange(score, response, 35)}
                    />
                    <ScoreQuestsSF
                        initialData={defInitialData("36")}
                        labelIndex={"d"}
                        prompt="Minha saúde é excelente"
                        options={["Definitivamente verdadeiro", "A maioria das vezes verdadeiro", "Não sei", "A maioria das vezes falso", "Definitivamente falso"]}
                        scores={[5, 4, 3, 2, 1]}
                        onDataChange={(score, response) => handleDataChange(score, response, 36)}
                    />
                </InstrucoesSF36>

                <RenderDominions />
                <Button type="text" className="block mx-auto mt-10 w-full" size="large" onClick={(e) => setExpanded(false)}>
                    Esconder
                </Button>
            </AccordionDetails>

        </Accordion >
    )
}