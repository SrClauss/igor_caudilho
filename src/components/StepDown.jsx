import { useState, useEffect } from 'react'
import { Card } from 'antd'
import { Switch } from '@mui/material'
import * as tw from './tailwind'



export default function StepDown({ onDataChange }) {
    const [data, setData] = useState({
        stepDownDireito: 'normal',
        stepDownEsquerdo: 'normal'
    })
    const [diretoChecked, setDireitoChecked] = useState(false)
    const [esquerdoChecked, setEsquerdoChecked] = useState(false)


    const handleChange = (e) => {
        const newData = {
            ...data,
            [e.target.name]: e.target.checked ? 'alterado' : 'normal'
        }
        setData(newData);
    }
    useEffect(() => {
        onDataChange(data)
    }, [data])


    return (
        <Card>
            <div className={tw.componentTitle}> Step Down</div>

            <div className="grid grid-cols-2 gap-4 border-t border-t-1 border-cyan-800 bg-slate-300">

                <div className={tw.sideValue}>

                    <label htmlFor="stepDownDireito">Direito</label>
                </div>
                <div className={tw.rowTextCenter}>
                    <Switch
                        name="stepDownDireito"
                        id="stepDownDireito"
                        value={data.stepDownDireito}
                        onChange={handleChange}
                        className={tw.inputTransparent} />
                    <div>


                        <span className={`text-cyan-800 text-sm  ${data.stepDownDireito==="normal"?"font-bold":""}` }>Normal</span>
                        <span className={"text-cyan-800 text-sm"}> / </span>
                        <span className={`text-cyan-800 text-sm ${data.stepDownDireito==="alterado"?"font-bold":""}`}>Alterado</span>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 border-b border-b-1  border-cyan-800">
                <div className={tw.sideValue}>
                    <label htmlFor="stepDownEsquerdo">Esquerdo</label>
                </div>
                <div className={tw.rowTextCenter}>
                    <Switch
                        name="stepDownEsquerdo"
                        id="stepDownEsquerdo"
                        value={data.stepDownEsquerdo}
                        onChange={handleChange}
                        className={tw.inputTransparent} />
                    <div>

                    <span className={`text-cyan-800 text-sm ${data.stepDownEsquerdo==="normal"?"font-bold":""}`}>Normal</span>
                    <span className={"text-cyan-800 text-sm"}> / </span>
                    <span className={`text-cyan-800 text-sm ${data.stepDownEsquerdo==="alterado"?"font-bold":""}`}>Alterado</span>	
                    </div>
                </div>
            </div>
        </Card>
    )



}