import { useEffect, useState } from "react"
import {db } from "../firebase"
import DadosPessoais from "../components/joelho/DadosPessoais"
import AmplitudeMovimentoJoelho from "../components/joelho/AmplitudeMovimentoJoelho"
import PerimetroCoxa from "../components/joelho/PerimetroCoxa"
import DinamometroManual from "../components/joelho/DinamometroManual"
import RelacaoFlexoresExtensores from "../components/joelho/RelacaoFlexoresExtensores"
import SliderDor from "../components/joelho/SliderDor"


import { Divider } from "antd"
import EscalaAnalogicaDor from "../components/joelho/EscalaVisualAnalogicaDor"
import CriteriosLimitacaoFuncionalGraveOsteoartrose from "../components/joelho/CriteriosLimitaçãoFuncionalGraveOsteoartrose"

export default function OsteoartroseArtroplastia() {
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
        await push(ref(db, 'osteoartrose_artroplastia'), JSON.stringify(data)).then(() => {
            console.log('Data is set');
        }).catch((error) => {

            console.log(error);
        }
        );

    }

    return (
        <>
            <h1 className="text-2xl lg:text-3xl text-center font-bold text-cyan-600 mt-14">
                AVALIAÇÃO FUNCIONAL DO JOELHO (DFP)
            </h1>
            <div className="py-10">
                <DadosPessoais onSubmitData={handleSetData} />
            </div>
            <Divider className="my-10"/>
            <AmplitudeMovimentoJoelho onDataChange={handleSetData} />
            <Divider className="my-10"/>
            <PerimetroCoxa  onDataChange={handleSetData}/>
            <Divider className="my-10"/>
            <EscalaAnalogicaDor onDataChange={handleSetData} />
            <Divider className="my-10"/>
            <DinamometroManual onDataChange={handleSetData} />
            <Divider className="my-10"/>
            <RelacaoFlexoresExtensores onDataChange={handleSetData} />
            <Divider className="my-10"/>
            <SliderDor title={"Nível de dor no final do teste"} onDataChange={handleSetData} />
            <Divider className="my-10"/>
            <CriteriosLimitacaoFuncionalGraveOsteoartrose onDataChange={handleSetData} sexo={data.sexo} />

          
        </>
    )

}
