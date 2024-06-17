import { useState, useEffect } from 'react'
import { Card } from 'antd'
import { Switch } from '@mui/material'
import * as tw from './tailwind'


export default function StepDown({ onDataChange , initialData = {stepDownDireito: false, stepDownEsquerdo: false}}) {
    const [data, setData] = useState(initialData||{})



    const handleChange = (e) => {
        const newData = {
            ...data,
            [e.target.name]: e.target.checked ? true : false
        }
        setData(newData);
    }
    useEffect(() => {
        onDataChange({stepDown: data})
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
                        checked={data.stepDownDireito}
                        onChange={handleChange}
                        className={tw.inputTransparent} />
                    <div>


                        <span className={`text-cyan-800 text-sm  ${data.stepDownDireito===false?"font-bold":""}` }>Normal</span>
                        <span className={"text-cyan-800 text-sm"}> / </span>
                        <span className={`text-cyan-800 text-sm ${data.stepDownDireito===true?"font-bold":""}`}>Alterado</span>

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
                        checked={data.stepDownEsquerdo}
                        onChange={handleChange}
                        className={tw.inputTransparent} />
                    <div>

                    <span className={`text-cyan-800 text-sm ${data.stepDownEsquerdo===false?"font-bold":""}`}>Normal</span>
                    <span className={"text-cyan-800 text-sm"}> / </span>
                    <span className={`text-cyan-800 text-sm ${data.stepDownEsquerdo===true?"font-bold":""}`}>Alterado</span>	
                    </div>
                </div>
            </div>
        </Card>
    )



}