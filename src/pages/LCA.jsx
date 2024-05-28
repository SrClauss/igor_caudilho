import { useEffect, useState } from "react"
import {db } from "../firebase"
import DadosPessoais from "../components/joelho/DadosPessoais"
import AmplitudeMovimentoJoelho from "../components/joelho/AmplitudeMovimentoJoelho"
import PerimetroCoxa from "../components/joelho/PerimetroCoxa"
import DinamometroManual from "../components/joelho/DinamometroManual"
import RelacaoFlexoresExtensores from "../components/joelho/RelacaoFlexoresExtensores"
import SliderDor from "../components/joelho/SliderDor"
import EscalaAnalogicaDor from "../components/joelho/EscalaVisualAnalogicaDor"


export default function LCA() {
    const [data, setData] = useState({})
    const handleSetData = (object) => {
        const [keys, values] = [Object.keys(object), Object.values(object)]
        let newData = { ...data };

        keys.forEach((key, index) => {
            newData = {
                ...newData,
                [key]: values[index]
            }
        })

        setData(newData);
    }
    useEffect(() => {
        console.log(data);
    }, [data])
    const enviarDados = async () => {
        await push(ref(db, 'lca'), JSON.stringify(data)).then(() => {
            console.log('Data is set');
        }).catch((error) => {

            console.log(error);
        }
        );

    }

    return (
        <>
            <h1 className="text-2xl lg:text-3xl text-center font-bold text-cyan-600 mt-14">
                AVALIAÇÃO FUNCIONAL DO JOELHO (LCA)
            </h1>
            <div className="py-10">
                <DadosPessoais onSubmitData={handleSetData} />
            </div>
            <EscalaAnalogicaDor onDataChange={handleSetData} />
            <Divider className="my-10"/>
            
            <Button onClick={enviarDados} type="primary">Enviar</Button>
        </>
    )

}