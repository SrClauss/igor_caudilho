import { useState, useEffect } from "react";
import FiveOptionsQuery from "./FiveOptionsQuery";
import { Card } from "antd";
import { set } from "firebase/database";
import { red } from "@mui/material/colors";


export default function BateriaPerguntas({ onDataChange, prompt, index, perguntas, children }) {
    const [media, setMedia] = useState(0)
    const [soma, setSoma] = useState(0)
    const [data, setData] = useState({})



    const handleDataChange = (value, index) => {
        let newData = { ...data }
        newData[index] = value
        setData(newData)
       
        

    }
    useEffect(() => {
        let soma = 0
        let media = 0
        for (const key in data) {
            soma += data[key]
        }
        media = soma / perguntas.length
        setSoma(soma)
        setMedia(media)
        onDataChange(media, soma)
    }, [data])

    return (
        <Card className="p-2 m-2">
            {children}
            <h2 className="flex p-5 text-xl text-cyan-800">{index + 1}. {prompt}</h2>
            {perguntas.map((pergunta, index) => (
                <FiveOptionsQuery onDataChange={(value) => handleDataChange(value, index)} prompt={pergunta} index={index} />
            ))}
            <div className="text-start py-2 text-xl">Media: <strong>{parseFloat(media).toFixed(2)}</strong> </div>
            <div className="text-start py-2 text-xl">Soma: <strong>{soma}</strong> </div>
        </Card>
    )

}


