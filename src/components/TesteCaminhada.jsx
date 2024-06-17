import { useState, useEffect } from 'react';
import *  as tw from './tailwind'
import SliderDor from './SliderDor'
import { Card } from 'antd';


export default function TesteCaminhada({ onDataChange, initialData = null}) {
    const [data, setData] = useState(initialData ||{})
    const [distanciaPercorrida, setDistanciaPercorrida] = useState(0)
    const [distanciaPredita, setDistanciaPredita] = useState(0)
    const [deficit, setDeficit] = useState(0)



    useEffect(() => {

        if (distanciaPercorrida && distanciaPredita) {
            setDeficit(parseFloat(distanciaPercorrida / distanciaPredita * 100).toFixed(1) + "%")
        }


    }, [distanciaPercorrida, distanciaPredita])
    const handleDataChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: parseFloat(value)
        })
    }
    const handleSliderChange = (value) => {
        setData({
            ...data,
            dorCaminhada: parseInt(value)
        })
    }
    useEffect(() => {
        let def = data.distanciaPredita !== 0 && data.distanciaPredita >= data.distanciaPercorrida
            ? parseFloat(((data.distanciaPredita - data.distanciaPercorrida) / data.distanciaPredita * 100).toFixed(1))
            : 0;


   
        const newData = {
            ...data,
            deficit: def
        }
        onDataChange({testeCaminhada: newData})
        setDeficit(def)
        
    }, [data])

    return (
        <Card>

            <div className="w-full text-center text-cyan-600 font-bold text-2xl md:text-3xl p-3">
                Teste de Caminhada
            </div>
            <div className="col-auto px-2 py-3 bg-transparent text-cyan-800 text-lg">
                <SliderDor title="Nivel de dor no final do teste" 
                initialData={initialData?.dorCaminhada?initialData.dorCaminhada:null} 
                onSliderChange={handleSliderChange} />

            </div>
            <div className="grid grid-cols-2 w-full bg-slate-300 border-t border-t-1 border-cyan-800">
                <div className={tw.sideValue}>
                    Distância Percorrida
                </div>
                <div className="col-auto bg-transparent text-cyan-800 text-lg">
                    <input type="number" name="distanciaPercorrida" value={data.distanciaPercorrida} onChange={(e)=>{
                        handleDataChange(e);
                        setDistanciaPercorrida(e.target.value);
                    
                    }} className={tw.inputTransparent} />
                </div>
            </div>
            <div className="grid grid-cols-2 w-full bg-white ">
                <div className={tw.sideValue}>
                    Distância Predita
                </div>
                <div className="col-auto bg-transparent">
                    <input type="number" 
                    name="distanciaPredita" 
                    value={data.distanciaPredita}
                    onChange={
                        (e) => {
                            handleDataChange(e);
                            setDistanciaPredita(e.target.value);
                        }
                    } className={tw.inputTransparent} />
                </div>
            </div>
            <div className="grid grid-cols-2 w-full bg-slate-300 border-b border-b-1 border-cyan-800 ">
                <div className={tw.sideValue}>
                    Deficit em relação ao normativo
                </div>
                <div className="col-auto bg-transparent">
                    <input type="number"  name="extensores" disabled value={deficit} className={tw.inputTransparentBold} />
                </div>
            </div>
           
        </Card>
    )
}