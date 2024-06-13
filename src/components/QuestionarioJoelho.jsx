
import { Card } from "antd";
import { useState, useEffect } from "react";
import * as tw from "./tailwind";



export function QuestionarioLysholm({ pontuacao }) {




    const boldPontuacao = (rangeMin, RangeMax) => {
        const styleBold = "text-cyan-800 text-md p-1 font-bold"
        if (pontuacao >= rangeMin && pontuacao <= RangeMax) {
            return styleBold;
        }

        return "text-cyan-800 text-md p-1";
    }


    return (
        <Card>
            
            <div className="w-full grid grid-cols-2 border-y border-y-1 border-cyan-800">
                <div className={tw.sideValue}>
                    Pontuação
                </div>
                <div className="col-auto bg-transparent">
                    <input
                        disabled
                        type="number"
                        name="pontuacaoLysholm"
                        id="pontuacaoLysholm"
                        value={pontuacao}
                        className={tw.inputTransparent} />
                </div>
            </div>
            <div>
                <div className="w-full text-cyan-800 pt-3">
                    Escalas de pontuação:
                </div>

                <div id="escala" className="w-full flex">
                    <div className="w-1/2">

                        <div className={boldPontuacao(95, 100)}>95-100 - Excelente</div>
                        <div className={boldPontuacao(84, 94)}>84-94 - Bom</div>
                    </div>
                    <div className="w-1/2">


                        <div className={boldPontuacao(65, 83)}>65-83 - Regular</div>
                        <div className={boldPontuacao(0, 64)}>64 ou menos - Ruim</div>
                    </div>
                </div>
            </div>
        </Card>



    )
}
export default function QuestionarioJoelho({ onDataChange }) {
    const [data, setData] = useState({
        pontuacaoLysholm: "",
        pontuacaoKujala: ""
    })


    useEffect(() => {
        onDataChange(data);
    }, [data])

    const handleChange = (e) => {
        const newData = {
            ...data,
            [e.target.name]: e.target.value
        }
        setData(newData)
    }
    const boldPontuacao = (rangeMin, RangeMax) => {
        const styleBold = "text-cyan-800 text-md p-1 font-bold"
        if (data.pontuacaoLysholm >= rangeMin && data.pontuacaoLysholm <= RangeMax) {
            return styleBold;
        }

        return "text-cyan-800 text-md p-1";



    }

    return (
        <Card>
            <div className="w-full text-center text-cyan-600 font-bold text-2xl md:text-3xl p-3">
                Questionário de Função Reportada do Joelho
            </div>
            <div className="w-full text-center text-cyan-800 font-bold text-xl md:text-2xl p-3">
                Questionário de Lysholm
            </div>
            <div className="w-full grid grid-cols-2 border-y border-y-1 border-cyan-800">
                <div className={tw.sideValue}>
                    Pontuação
                </div>
                <div className="col-auto bg-transparent">
                    <input
                        type="number"
                        name="pontuacaoLysholm"
                        id="pontuacaoLysholm"
                        value={data.pontuacaoLysholm}
                        onChange={handleChange}
                        className={tw.inputTransparent} />
                </div>
            </div>
            <div>
                <div className="w-full text-cyan-800 pt-3">
                    Escalas de pontuação:
                </div>

                <div id="escala" className="w-full flex">
                    <div className="w-1/2">

                        <div className={boldPontuacao(95, 100)}>95-100 - Excelente</div>
                        <div className={boldPontuacao(84, 94)}>84-94 - Bom</div>
                    </div>
                    <div className="w-1/2">


                        <div className={boldPontuacao(65, 83)}>65-83 - Regular</div>
                        <div className={boldPontuacao(0, 64)}>64 ou menos - Ruim</div>
                    </div>
                </div>
            </div>
            <div className="w-full text-center text-cyan-800 font-bold text-xl md:text-2xl p-3">
                Kujala
            </div>
            <div className="w-full grid grid-cols-2 border-y border-y-1 border-cyan-800">
                <div className={tw.sideValue}>
                    Pontuação
                </div>
                <div className="col-auto bg-transparent">
                    <input
                        type="number"
                        name="pontuacaoKujala"
                        id="pontuacaoKujala"
                        value={data.pontuacaoKujala}
                        onChange={handleChange}
                        className={tw.inputTransparent} />
                </div>
            </div>
            <div className="w-full text-cyan-800 pt-1 text-xs text-justify">
                <p>
                    A Pontuação Kujala ou Escala de Dor no Joelho Anterior (AKPS) é um questionário de autorrelato com 13 itens que avalia as reações subjetivas a determinadas atividades e sintomas que são conhecidos por se correlacionarem com a síndrome da dor anterior no joelho. O AKPS é classificado em uma escala de 0 a 100, sendo 100 a pontuação mais alta possível. Escores mais baixos refletem maior dor e incapacidade
                </p>
            </div>















        </Card >
    )

}