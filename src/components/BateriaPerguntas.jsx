import { useState, useEffect } from "react";
import ScoreQuestsSF from "./ScoreQuestsSF";
import { Card } from "antd";



export default function BateriaPerguntas({ onDataChange, prompt, index, perguntas, children, initialData = null}) {
    const [data, setData] = useState(initialData?.respostas || {})  
    const [soma, setSoma] = useState(initialData?.soma || 0)
    const [media, setMedia] = useState(initialData?.media || 0)



    const handleDataChange = (result, response, indexPergunta) => {
      
        let newData = { ...data }
        newData[indexPergunta] = {
            result,
            response
        }

        setData(newData)








    }

    useEffect(() => {
        let sum = 0
        let average = 0
        Object.keys(data).forEach((key) => {
            sum += data[key].result
        })
        average = sum / Object.keys(data).length

        onDataChange({
            soma: sum,
            media: average,
            respostas: data
        
        })
        setSoma(sum)
        setMedia(average)

    }, [data])

    


    return (
        <Card className="p-2 m-2">
            {children}
            <h2 className="flex p-5 text-xl text-cyan-800">{index + 1}. {prompt}</h2>
            {perguntas.map((pergunta, index) => (
                <ScoreQuestsSF

                    initialData={initialData?.respostas?initialData.respostas[index]:null}
                    
                    key={index}
                    options={['Nunca', 'Poucas vezes', 'As vezes', 'Quase sempre', 'Sempre']}
                    scores={[0, 25, 50, 75, 100]}
                    prompt={pergunta}
                    onDataChange={(result, response) => handleDataChange(result, response, index)}
                />
            ))}

            <div className="text-start py-2 text-xl">Media: <strong>{media?parseFloat(media).toFixed(2):0}</strong> </div>
            <div className="text-start py-2 text-xl">Soma: <strong>{soma?soma:0}</strong> </div>
        </Card>
    )

}


