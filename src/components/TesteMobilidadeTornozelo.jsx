import { useState, useRef, useEffect } from 'react'
import { Card } from 'antd'
import * as tw from './tailwind'


export default function TesteMobilidadeTornozelo({onDataChange, initialData = null}) {
    const [data, setData] = useState(initialData||{})
    useEffect(() => {
        onDataChange({testeMobilidadeTornozelo:data})
    }, [data])
    const handleChange = (e) => {
        const newData = {
            ...data,
            [e.target.name]: parseFloat(e.target.value)
        }
        setData(newData)
    }
    return (
        <Card>
            <div className={tw.componentTitle}>
                Teste Mobilidade do Tornozelo
            </div>



        <div className="grid grid-cols-2 gap-4 border-t  border-t-1 border-cyan-800 bg-slate-300 ">
                <div className={tw.sideValue}>
                    <label htmlFor="testeJoelho">Direito</label>
                </div>
                <div>
                    <input
                        type="number"
                        name="testeJoelhoDireito"
                        id="testeJoelho"
                        value={data.testeJoelhoDireito }
                        onChange={handleChange}
                        className={tw.inputTransparent} />
                </div>

            </div>
            <div className="grid grid-cols-2 gap-4 border-b border-b-1 border-cyan-800 ">
                <div className={tw.sideValue}>
                    <label htmlFor="testeJoelhoEsquerdo">Esquerdo</label>
                </div>
                <div>
                    <input
                        type="number"
                        name="testeJoelhoEsquerdo"
                        id="testeJoelhoEsquerdo"
                        value={data.testeJoelhoEsquerdo}
                        onChange={handleChange}
                        className={tw.inputTransparent} />
                </div>
            </div>

            
        </Card>
    )

}
