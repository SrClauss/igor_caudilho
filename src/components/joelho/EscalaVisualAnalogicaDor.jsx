import { Card } from "@mui/material"
import SliderDor from "./SliderDor"
import QuestaoBilateral from "./QuestaoBilateral"
import { useState, useEffect } from "react"
export default function EscalaAnalogicaDor({ onDataChange }) {
    const [data, setData] = useState({
        direito: false,
        esquerdo: false,
        menorDireito: 0,
        menorEsquerdo: 0,
        maiorDireito: 0,
        maiorEsquerdo: 0
    })
    useEffect(() => {
       
        onDataChange(data)

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
           
            <SliderDor title="Dor no momento da avaliacao (direito)"  onSliderChange={(data)=>handleDataChange('dorMomentoDireito', data)} />
            <SliderDor title="Dor no momento da avaliacao (esquerdo)" onSliderChange={(data)=> handleDataChange('dorMomentoEsquerdo', data) } />
            <SliderDor title="Menor nível de dor no melhor momento do dia (direito)"  onSliderChange={(data)=>handleDataChange('dorMenorDireito', data)} />
            <SliderDor title="Menor nível de dor no melhor momento do dia (esquerdo)" onSliderChange={(data)=> handleDataChange('dorMenorEsquerdo', data) } />
            <SliderDor title="Maior nível de dor no pior momento do dia (direito)" onSliderChange={(data)=> handleDataChange('dorMaiorDireito', data) } />
            <SliderDor title="Maior nível de dor no pior momento do dia (esquerdo)" onSliderChange={(data)=> handleDataChange('dorMaiorEsquerdo', data) } />

            

        </Card>


    )
}