import { useEffect, useState } from "react"
import {enviarDados } from "../firebase"
import DadosPessoais from "../components/DadosPessoais"
import AmplitudeMovimentoJoelho from "../components/AmplitudeMovimentoJoelho"
import PerimetroCoxa from "../components/PerimetroCoxa"
import DinamometroManual from "../components/DinamometroManual"
import RelacaoFlexoresExtensores from "../components/RelacaoFlexoresExtensores"
import { Divider } from "antd"
import EscalaAnalogicaDor from "../components/EscalaVisualAnalogicaDor"
import { CriteriosLimitacaoFuncionalGraveOsteoartroseTable } from "../components/CriteriosLimitaçãoFuncionalGraveOsteoartrose"
import { Button } from "antd"

import Womac from "../components/Womac";
import QuestionarioSF36 from "../components/SF36"
import TesteCaminhada from "../components/TesteCaminhada"
import { useLocation } from "react-router-dom"
import Layout from "../Layout"
import Observacoes from "../components/Observacoes"



export default function OsteoartroseArtroplastia() {

    const location = useLocation()
    const initialData = location.state?.initialData

    const [data, setData] = useState(initialData || {})
    useEffect(() => {

    }, [data])
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
   


    return (
        <Layout>
            <h1 className="text-2xl lg:text-3xl text-center font-bold text-cyan-600 mt-14">
                OSTEOARTROSE /ARTROPLASTIA
            </h1>
            <div className="py-10">
                <DadosPessoais onSubmitData={handleSetData} initialData={initialData?.dadosPessoais} />
            </div>
            <Divider className="my-10" />
            <AmplitudeMovimentoJoelho onDataChange={handleSetData} initialData={initialData?.amplitudeMovimentoJoelho} />
            <Divider className="my-10" />
            <PerimetroCoxa onDataChange={handleSetData} initialData={initialData?.perimetroCoxa} />
            <Divider className="my-10" />
            <EscalaAnalogicaDor onDataChange={handleSetData} initialData={initialData?.escalaAnalogicaDor} />
            <Divider className="my-10" />
            <QuestionarioSF36 onDataChange={handleSetData} initialData={initialData?.sf36} />
            <Divider className="my-10" />
            <Womac onDataChange={handleSetData} initialData={initialData?.womac} />
            <Divider className="my-10" />
            <DinamometroManual onDataChange={handleSetData} initialData={initialData?.dinamometroManual} />
            <Divider className="my-10" />
            <RelacaoFlexoresExtensores onDataChange={handleSetData} initialData={initialData?.relacaoFlexoresExtensores} />
            <Divider className="my-10" />
            <TesteCaminhada onDataChange={handleSetData} initialData={initialData?.testeCaminhada} />
            <Divider className="my-10" />
            <CriteriosLimitacaoFuncionalGraveOsteoartroseTable onDataChange={handleSetData} sexo={data.sexo} initialData={initialData?.criteriosLimitacaoFuncionalGrave} />
            <div className="mt-10">
                <Observacoes onDataChange={handleSetData} initialData={initialData?.observacoes} />
            </div>
            <Button type="primary" className="block mx-auto mt-10 w-full" size="large" onClick={(_)=>enviarDados("osteoartrose_artroplastia", data)}>
                Enviar
            </Button>





        </Layout>
    )

}
