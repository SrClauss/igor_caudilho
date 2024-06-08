import { useState, useEffect } from "react";
import { Card } from "antd";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScoreQuestsSF from "./ScoreQuestsSF";
import InstrucoesSF36 from "./InstrucoesSF36";
import { set } from "firebase/database";
export default function QuestionarioSF36({ onDataChange }) {

    const [itens, setItens] = useState({})
    const [score8, setScore] = useState([6.0, 4.75, 3.5, 2.25, 1.0])
    const [label, setLabel] = useState("0 de 36 itens respondidos")
   


    const handleDataChange = (value, index) => {
        setItens({
            ...itens,
            [index]: value
        })
    }
    useEffect(() => {
        if (itens[21]) {
            if (itens[21] === 6.0) {
                setScore([6, 6, 6, 6, 6])
            } else if (itens[21] >= 2.0 && itens[21] <= 5.4) {
                setScore([5, 4, 3, 2, 1])
            } else {
                setScore([6.0, 4.75, 3.5, 2.25, 1.0])
            }
        }
    }, [itens[21]])

    useEffect(() => {
        const count = Object.values(itens).filter(item => item !== undefined).length
        console.log("count", count)
        if (count === 36) {

            const total = Object.values(itens).reduce((acc, item) => acc + item)
            onDataChange(total)
            setLabel(`Total de ${total} pontos`)
        }
        else {
            setLabel(`${count} de 36 itens respondidos`)
        }
    }, [itens])



    return (

        <Accordion>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                expandIcon={<ExpandMoreIcon />}
                sx={{ padding: "30px" }}
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
                        labelIndex={1}
                        prompt="Em geral, você diria que sua saúde é:"
                        options={["Excelente", "Muito boa", "Boa", "Regular", "Ruim"]}
                        scores={[5.0, 4.4, 3.4, 2.0, 1.0]}
                        onDataChange={(e) => handleDataChange(e, 1)}
                    />
                    <ScoreQuestsSF
                        labelIndex={2}
                        prompt="Comparado com o ano passado, como você classificaria sua saúde em geral?"
                        options={["Muito melhor agora do que há um ano", "Um pouco melhor agora do que há um ano", "A mesma de um ano para cá", "Um pouco pior do que há um ano", "Muito pior agora do que há um ano"]}
                        scores={[5.0, 4.4, 3.4, 2.0, 1.0]}
                        onDataChange={(e) => handleDataChange(e, 2)}
                    />
                </InstrucoesSF36>
                <InstrucoesSF36
                    instrucoes={`3. Os seguintes itens são sobre actividades que você poderia fazer actualmente 
                        durante um dia comum. Devido à sua saúde, você teria dificuldade para fazer estas actividades?                       
                        Neste caso, quando?`}>
                    <ScoreQuestsSF
                        labelIndex={"a"}
                        prompt="Atividades vigorosas, que exigem muito esforço, tais como correr, levantar objectos pesados, praticar desportos extenuantes."
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(e) => handleDataChange(e, 3)}
                    />
                    <ScoreQuestsSF
                        labelIndex={"b"}
                        prompt="Atividades moderadas, tais como mover uma mesa, passar aspirador de pó, jogar bola, varrer a casa."
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(e) => handleDataChange(e, 4)}
                    />
                    <ScoreQuestsSF
                        labelIndex={"c"}
                        prompt="Levantar ou carregar mantimentos"
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(e) => handleDataChange(e, 5)}
                    />
                    <ScoreQuestsSF
                        labelIndex={"d"}
                        prompt="Subir vários lances de escada"
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(e) => handleDataChange(e, 6)}
                    />
                    <ScoreQuestsSF
                        labelIndex={"e"}
                        prompt="Subir um lance de escada"
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(e) => handleDataChange(e, 7)}
                    />
                    <ScoreQuestsSF
                        labelIndex={"f"}
                        prompt="Curvar-se, ajoelhar-se ou dobrar-se"
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(e) => handleDataChange(e, 8)}
                    />
                    <ScoreQuestsSF
                        labelIndex={"g"}
                        prompt="Andar mais de 1 quilómetro"
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(e) => handleDataChange(e, 9)}
                    />
                    <ScoreQuestsSF
                        labelIndex={"h"}
                        prompt="Andar vários quarteirões"
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(e) => handleDataChange(e, 10)}
                    />
                    <ScoreQuestsSF
                        labelIndex={"i"}
                        prompt="Andar um quarteirão"
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(e) => handleDataChange(e, 11)}
                    />
                    <ScoreQuestsSF
                        labelIndex={"j"}
                        prompt="Tomar banho ou vestir-se"
                        options={["Sim, dificulta muito", "Sim, dificulta um pouco", "Não, não dificulta de modo algum"]}
                        scores={[1, 2, 3]}
                        onDataChange={(e) => handleDataChange(e, 12)}
                    />


                </InstrucoesSF36>
                <InstrucoesSF36
                    instrucoes={`4. Durante as últimas 4 semanas, você teve algum dos seguintes problemas com seu trabalho
                                    ou com alguma atividade regular, como conseqüência de sua saúde física?`}>
                    <ScoreQuestsSF
                        labelIndex={"a"}
                        prompt="Você diminuiu a quantidade de tempo que se dedicava ao seu trabalho ou a outras atividades?"
                        options={["Sim", "Não"]}
                        scores={[1, 2]}
                        onDataChange={(e) => handleDataChange(e, 13)}
                    />
                    <ScoreQuestsSF
                        labelIndex={"b"}
                        prompt="Realizou menos tarefas do que você gostaria?"
                        options={["Sim", "Não"]}
                        scores={[1, 2]}
                        onDataChange={(e) => handleDataChange(e, 14)} />

                    <ScoreQuestsSF
                        labelIndex={"c"}
                        prompt="Esteve limitado no seu tipo de trabalho ou a outras atividades."
                        options={["Sim", "Não"]}
                        scores={[1, 2]}
                        onDataChange={(e) => handleDataChange(e, 15)} />

                    <ScoreQuestsSF
                        labelIndex={"d"}
                        prompt="Teve dificuldade de fazer seu trabalho ou outras atividades (p. ex. necessitou de um esforço extra)."
                        options={["Sim", "Não"]}
                        scores={[1, 2]}
                        onDataChange={(e) => handleDataChange(e, 16)} />

                </InstrucoesSF36>
                <InstrucoesSF36
                    instrucoes={`5. Durante as últimas 4 semanas, você teve algum dos seguintes problemas com seu trabalho
                                    ou outra atividade regular diária, como conseqüência de algum problema emocional (como
                                    se sentir deprimido ou ansioso)? `}>
                    <ScoreQuestsSF
                        labelIndex={"a"}
                        prompt="Você diminuiu a quantidade de tempo que se dedicava ao seu trabalho ou a outras atividades?"
                        options={["Sim", "Não"]}
                        scores={[1, 2]}
                        onDataChange={(e) => handleDataChange(e, 17)} />
                    <ScoreQuestsSF
                        labelIndex={"b"}
                        prompt="Realizou menos tarefas do que você gostaria?"
                        options={["Sim", "Não"]}
                        scores={[1, 2]}
                        onDataChange={(e) => handleDataChange(e, 18)} />

                    <ScoreQuestsSF
                        labelIndex={"c"}
                        prompt="Não realizou ou fez qualquer das atividades com tanto cuidado como geralmente faz."
                        options={["Sim", "Não"]}
                        scores={[1, 2]}
                        onDataChange={(e) => handleDataChange(e, 19)} />
                </InstrucoesSF36>
                <InstrucoesSF36
                    instrucoes={``}>
                    <ScoreQuestsSF
                        labelIndex={6}
                        prompt="Durante as últimas 4 semanas, de que maneira sua saúde física ou problemas emocionais
                            interferiram nas suas atividades sociais normais, em relação à família, amigos ou em grupo?"
                        options={["De forma alguma", "Um pouco", "Moderadamente", "Bastante", "Extremamente"]}
                        scores={[5, 4, 3, 2, 1]}
                        onDataChange={(e) => handleDataChange(e, 20)} />
                </InstrucoesSF36>
                <InstrucoesSF36
                    instrucoes={""}>
                    <ScoreQuestsSF
                        labelIndex={7}
                        prompt="Quanta dor no corpo você teve durante as últimas 4 semanas?"
                        options={["Nenhuma", "Muito Leve", "Leve", "Moderada", "Grave", "Muito Grave"]}
                        scores={[6.0, 5.4, 4.2, 3.1, 2.0, 1.0]}
                        onDataChange={(e) => handleDataChange(e, 21)} />
                </InstrucoesSF36>

                <InstrucoesSF36
                    instrucoes={""}>
                    <ScoreQuestsSF
                        labelIndex={8}
                        prompt=" Durante as últimas 4 semanas, quanto a dor interferiu com seu trabalho normal (incluindo o trabalho dentro de casa)?"
                        options={["De forma alguma", "Um pouco", "Moderadamente", "Bastante", "Extremamente"]}
                        scores={score8}
                        onDataChange={(e) => handleDataChange(e, 22)} />

                </InstrucoesSF36>
                <InstrucoesSF36

                    instrucoes={`9- Para cada questão abaixo, por favor dê uma resposta que mais se 
                                    aproxime da maneira como você se sente, em relação às últimas 4 semanas.`}>

                    <ScoreQuestsSF
                        labelIndex={"a"}
                        prompt="Por quanto tempo você se sente cheio de vigor, força, e animado?"
                        options={["Sempre", "A maior parte do tempo", "Boa parte do tempo", "Alguma parte do tempo", "Um pouco do tempo", "Nunca"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(e) => handleDataChange(e, 23)} />
                    <ScoreQuestsSF
                        labelIndex={"b"}
                        prompt="Por quanto tempo se sente nervosa(o)?"
                        options={["Nunca", "Quase nunca", "Às vezes", "Quase sempre", "Sempre"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(e) => handleDataChange(e, 24)} />
                    <ScoreQuestsSF
                        labelIndex={"c"}
                        prompt="Por quanto tempo se sente tão deprimido que nada pode animá-lo?"
                        options={["Nunca", "Quase nunca", "Às vezes", "Quase sempre", "Sempre"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(e) => handleDataChange(e, 25)} />

                    <ScoreQuestsSF
                        labelIndex={"d"}
                        prompt="Por quanto tempo se sente calmo ou tranquilo?"
                        options={["Sempre", "A maior parte do tempo", "Boa parte do tempo", "Alguma parte do tempo", "Um pouco do tempo", "Nunca"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(e) => handleDataChange(e, 26)} />
                    <ScoreQuestsSF
                        labelIndex={"e"}
                        prompt="Por quanto tempo se sente com muita energia?"
                        options={["Sempre", "A maior parte do tempo", "Boa parte do tempo", "Alguma parte do tempo", "Um pouco do tempo", "Nunca"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(e) => handleDataChange(e, 27)} />
                    <ScoreQuestsSF
                        labelIndex={"f"}
                        prompt="Por quanto tempo se sente desanimado ou abatido?"
                        options={["Nunca", "Quase nunca", "Às vezes", "Quase sempre", "Sempre"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(e) => handleDataChange(e, 28)} />
                    <ScoreQuestsSF
                        labelIndex={"g"}
                        prompt="Por quanto tempo se sente esgotado?"
                        options={["Nunca", "Quase nunca", "Às vezes", "Quase sempre", "Sempre"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(e) => handleDataChange(e, 29)} />
                    <ScoreQuestsSF
                        labelIndex={"h"}
                        prompt="Por quanto tempo se sente uma pessoa feliz?"
                        options={["Sempre", "A maior parte do tempo", "Boa parte do tempo", "Alguma parte do tempo", "Um pouco do tempo", "Nunca"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(e) => handleDataChange(e, 30)} />

                    <ScoreQuestsSF
                        labelIndex={"i"}
                        prompt="Por quanto tempo se sente cansado?"
                        options={["Nunca", "Quase nunca", "Às vezes", "Quase sempre", "Sempre"]}
                        scores={[6, 5, 4, 3, 2, 1]}
                        onDataChange={(e) => handleDataChange(e, 31)} />

                </InstrucoesSF36>
                <InstrucoesSF36
                    instrucoes={""}>
                    <ScoreQuestsSF
                        labelIndex={10}
                        prompt="Durante as últimas 4 semanas, por quanto tempo a sua saúde física ou problemas emocionais interferiram em suas atividades sociais (como visitar amigos, parentes, etc)?"
                        options={["Sempre", "A maior parte do tempo", "Boa parte do tempo", "Poucas Vezes", "Nunca"]}
                        scores={[1, 2, 3, 4, 5]}
                        onDataChange={(e) => handleDataChange(e, 32)} />
                </InstrucoesSF36>
                <InstrucoesSF36
                    instrucoes={"11. O quanto verdadeiro ou falso é cada uma das afirmações para você?"}>
                    <ScoreQuestsSF
                        labelIndex={"a"}
                        prompt="Eu costumo adoecer um pouco mais facilmente que as outras pessoas"
                        options={["Definitivamente verdadeiro", "A maioria das vezes verdadeiro", "Não sei", "A maioria das vezes falso", "Definitivamente falso"]}
                        scores={[1, 2, 3, 4, 5]}
                        onDataChange={(e) => handleDataChange(e, 33)} />
                    <ScoreQuestsSF
                        labelIndex={"b"}
                        prompt="Eu sou tão saudável quanto qualquer pessoa que eu conheça"
                        options={["Definitivamente verdadeiro", "A maioria das vezes verdadeiro", "Não sei", "A maioria das vezes falso", "Definitivamente falso"]}
                        scores={[5, 4, 3, 2, 1]}
                        onDataChange={(e) => handleDataChange(e, 34)} />

                    <ScoreQuestsSF
                        labelIndex={"c"}
                        prompt="Eu acho que a minha saúde vai piorar"
                        options={["Definitivamente verdadeiro", "A maioria das vezes verdadeiro", "Não sei", "A maioria das vezes falso", "Definitivamente falso"]}
                        scores={[1, 2, 3, 4, 5]}
                        onDataChange={(e) => handleDataChange(e, 35)} />
                    <ScoreQuestsSF
                        labelIndex={"d"}
                        prompt="Minha saúde é excelente"
                        options={["Definitivamente verdadeiro", "A maioria das vezes verdadeiro", "Não sei", "A maioria das vezes falso", "Definitivamente falso"]}
                        scores={[5, 4, 3, 2, 1]}
                        onDataChange={(e) => handleDataChange(e, 36)} />
                </InstrucoesSF36>
            </AccordionDetails>



        </Accordion >
    )
}