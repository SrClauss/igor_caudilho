import { useState, useEffect } from 'react';
import *  as tw from './tailwind'
import SliderDor from './SliderDor'
import { Card } from 'antd';


export default function TesteCaminhada({ onDataChange }) {
    const [data, setData] = useState({
        dor: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    useEffect(() => {
        onDataChange(data)
    }, [data])

    return (
        <Card>
            <h2 className={tw.componentTitle}>Teste de Caminhada</h2>
            <div className={"grid grid-cols-2 w-full bg-white"}>
                <div className={tw.colTransparent}>
                    <label className={tw.columnHeader}>Distância percorrida</label>
                    <input className={tw.inputTransparentBold} type="text" name="distancia" onChange={handleChange} />
                </div>
                <div className={tw.colTransparent}>
                    <label className={tw.columnHeader}>Tempo</label>
                    <input className={tw.inputTransparentBold} type="text" name="tempo" onChange={handleChange} />
                </div>
            </div>
            <div>
                <SliderDor label="Dor" name="dor" onChange={handleChange} />
            </div>
        </Card>
    )
}