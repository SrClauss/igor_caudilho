import { useState, useRef, useEffect } from 'react'
import { Card } from 'antd'
import * as tw from './tailwind'


export default function TesteMobilidadeTornozelo({onDataChange}) {
    const [data, setData] = useState({})
    useEffect(() => {
        onDataChange(data)
    }, [data])
    const handleChange = (e) => {
        const newData = {
            ...data,
            [e.target.name]: e.target.value
        }
        setData(newData)
    }
    return (
        <Card>
            <div className={tw.componentTitle}>
                Teste Mobilidade do Tornozelo
            </div>



            <div className="grid grid-cols-2 gap-4 border-t border-b border-b-1 border-t-1 border-cyan-800 ">
                <div className={tw.sideValue}>
                    <label htmlFor="testeJoelho">Resultado</label>
                </div>
                <div>
                    <input
                        type="text"
                        name="testeJoelho"
                        id="testeJoelho"
                        value={data.testeJoelho}
                        onChange={handleChange}
                        className={tw.inputTransparent} />
                </div>

            </div>

            
        </Card>
    )

}
