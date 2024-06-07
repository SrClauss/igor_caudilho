import { useState, useEffect } from "react";
import FiveOptionsQuery from "./FiveOptionsQuery";
import { Card } from "antd";


export default function BateriaPerguntas({ onDataChange, prompt, index, perguntas, children }) {
    const [data, setData] = useState(0) //soma dos valores de data
    const [perguntasResult, setPerguntasResult] = useState(Array(perguntas.length).fill(0)) //array com os valores de cada pergunta


    useEffect(() => {
        onDataChange(data, index)
    }, [perguntasResult])

    const handleDataChange = (value, i) => {
        let newPerguntasResult = [...perguntasResult]
        newPerguntasResult[i] = value
        setPerguntasResult(newPerguntasResult)
        setData(newPerguntasResult.reduce((acc, curr) => acc + curr, 0)/perguntasResult.length)
    }



    return (
        <Card className="p-2 m-2">
            {children}
            <h2 className="flex p-5 text-xl text-cyan-800">{index + 1}. {prompt}</h2>
            {perguntas.map((pergunta, index) => (
                <FiveOptionsQuery onDataChange={(value) => handleDataChange(value, index)} prompt={pergunta} index={index} />
            ))}
            <div className="text-start py-2 text-xl">Total: <strong>{parseFloat(data).toFixed(2)}</strong> </div>
        </Card>
    )

}


