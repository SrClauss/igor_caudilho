import { Box, Card } from "@mui/material"
import { useEffect, useState } from "react"
import * as tw from "./tailwind"

export default function RelacaoFlexoresExtensores({ onDataChange, initialData = null}) {

    const [data, setData] = useState(initialData || {})
    useEffect(() => {
        onDataChange({relacaoFlexoresExtensores:data})
    }, [data])


    const handleDataChange = (e) => {
        const newData = {
            ...data,
            [e.target.name]: parseFloat(e.target.value)
        }
        setData(newData)
    }



    return (
        <Card>

            <div className="w-full text-center text-cyan-600 font-bold text-2xl md:text-3xl p-3">
                Relação Flexores/Extensores
            </div>
            <div className="grid grid-cols-2 w-full bg-slate-300 border-t border-t-1 border-cyan-800">
                <div className="col-auto px-2 py-3 bg-transparent text-cyan-800 text-lg">
                    
                </div>
                <div className="col-auto px-2 py-3 text-center bg-transparent text-cyan-800 text-lg">
                    60°/s
                </div>
            </div>
            <div className="grid grid-cols-2 w-full bg-white ">
                <div className={tw.sideValue}>
                    Direito
                </div>
                <div className="col-auto bg-transparent">
                    <input type="text" name="direito" onChange={handleDataChange} value={data.direito} className={tw.inputTransparent} />
                </div>
            </div>
            <div className="grid grid-cols-2 w-full bg-slate-300 border-b border-b-1 border-cyan-800 ">
                <div className={tw.sideValue}>
                    Esquerdo
                </div>
                <div className="col-auto bg-transparent">
                    <input type="number" name="esquerdo" value={data.esquerdo} onChange={handleDataChange} className={tw.inputTransparent} />
                </div>
            </div>
           

        </Card>


    )
}