import { Card } from "@mui/material"
import SliderDor from "./SliderDor"
import { useState, useEffect } from "react"


export default function EscalaAnalogicaDor({ onDataChange, initialData = null}) {
    const [data, setData] = useState(initialData ||{})
    useEffect(() => {
       
        onDataChange({escalaAnalogicaDor:data})

    }, [data])
    const handleDataChange = (key, value) => {
        setData(prevData=>({
            ...prevData,
            [key]: value
        }))

       
        
    }
    return (
        <Card>
            <div className="w-full text-center text-cyan-800 text-3xl pb-6">Escala Visual Analógica da Dor</div>
           
            <SliderDor title="Dor no momento da avaliacao (direito)"  onSliderChange={(data)=>handleDataChange('dorMomentoDireito', data)} initialData={initialData?.dorMomentoDireito?initialData.dorMaiorDireito:0}/>
            <SliderDor title="Dor no momento da avaliacao (esquerdo)" onSliderChange={(data)=> handleDataChange('dorMomentoEsquerdo', data)} initialData={initialData?.dorMomentoEsquerdo?initialData.dorMomentoEsquerdo:0}/>
            <SliderDor title="Menor nível de dor no melhor momento do dia (direito)"  onSliderChange={(data)=>handleDataChange('dorMenorDireito', data)} initialData={initialData?.dorMenorDireito?initialData.dorMenorDireito:0}/>
            <SliderDor title="Menor nível de dor no melhor momento do dia (esquerdo)" onSliderChange={(data)=> handleDataChange('dorMenorEsquerdo', data)} initialData={initialData?.dorMenorEsquerdo?initialData.dorMenorEsquerdo:0}/>
            <SliderDor title="Maior nível de dor no pior momento do dia (direito)" onSliderChange={(data)=> handleDataChange('dorMaiorDireito', data)} initialData={initialData?.dorMaiorDireito?initialData.dorMaiorDireito:0}/>
            <SliderDor title="Maior nível de dor no pior momento do dia (esquerdo)" onSliderChange={(data)=> handleDataChange('dorMaiorEsquerdo', data)} initialData={initialData?.dorMaiorEsquerdo?initialData.dorMaiorEsquerdo:0}/>


            

        </Card>


    )
}