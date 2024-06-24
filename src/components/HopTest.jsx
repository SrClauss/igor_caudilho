import { useState, useEffect } from "react"
import { Card } from "antd";
import * as tw from "./tailwind";

export default function HopTest({ onDataChange, initialData = null }) {
    const [data, setData] = useState(initialData || {})
    const [diferenca, setDiferenca] = useState("")
    const handleChange = (e) => {
        const newData = {
            ...data,
            [e.target.name]: e.target.value
        }
        setData(newData);
    }
    const calculeDiferenca = (valor1, valor2) => {
        const num1 = parseFloat(valor1);
        const num2 = parseFloat(valor2);
    
        // Verifica se algum dos valores é NaN após a conversão
        if (isNaN(num1) || isNaN(num2)) {
            return 0    ; // Retorna null se algum valor for inválido
        }

        if (num1 === 0 || num2 === 0) {
            return 0; // Retorna null se algum valor for zero
        }       
    
        const difPercentual = (Math.max(num1, num2) / Math.min(num1, num2) - 1) * 100;
        return difPercentual.toFixed(2);
    };
    useEffect(() => {
        const newData = { ...data };
        const diferenca = calculeDiferenca(data.hopTestDireito, data.hopTestEsquerdo);
    
        // Atualiza o estado e os dados com a diferença calculada ou null
        setDiferenca(diferenca);
        newData.diferenca = diferenca;
    
        onDataChange({ hopTest: newData });
    }, [data]);     

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
            <div className="grid grid-cols-2 gap-4 border-b border-b-1  border-cyan-800 bg-slate-300">
                <div className={tw.sideValue}>
                    <label htmlFor="diferenca">Diferença (%)</label>
                </div>
                <div className={tw.rowTextCenter}>
                    <input
                        disabled
                        name="diferenca"
                        id="diferenca"
                        value={diferenca}
                        className={tw.inputTransparent}
                        readOnly />
                </div>
            </div>
        </Card>
    )

}