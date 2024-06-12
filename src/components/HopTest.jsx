import { useState, useEffect } from "react"
import { Card } from "antd";
import * as tw from "./tailwind";

export default function HopTest({ onDataChange, initialData = null}) {
    const [data, setData] = useState(initialData || {
        hopTestDireito: 0,
        hopTestEsquerdo: 0
    })

    const handleChange = (e) => {
        const newData = {
            ...data,
            [e.target.name]: e.target.value
        }
        setData(newData);
    }

    useEffect(() => {
        onDataChange(data)
    }, [data])



    return (
        <Card>
            <div className={tw.componentTitle}>Hop Test</div>

            <div className="grid grid-cols-2 gap-4 border-t border-t-1 border-cyan-800 bg-slate-300">

                <div className={tw.sideValue}>

                    <label htmlFor="hopTestDireito">Direito</label>
                </div>
                <div className={tw.rowTextCenter}>
                    <input
                        name="hopTestDireito"
                        id="hopTestDireito"
                        value={data.hopTestDireito}
                        onChange={handleChange}
                        className={tw.inputTransparent} />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 border-b border-b-1  border-cyan-800">
                <div className={tw.sideValue}>
                    <label htmlFor="hopTestEsquerdo">Esquerdo</label>
                </div>
                <div className={tw.rowTextCenter}>
                    <input
                        name="hopTestEsquerdo"
                        id="hopTestEsquerdo"
                        value={data.hopTestEsquerdo}
                        onChange={handleChange}
                        className={tw.inputTransparent} />
                </div>
            </div>
        </Card>
    )

}