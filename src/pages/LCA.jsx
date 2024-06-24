import { useEffect, useState } from "react"
import { db } from "../firebase"
import DadosPessoais from "../components/DadosPessoais"
import AmplitudeMovimentoJoelho from "../components/AmplitudeMovimentoJoelho"
import PerimetroCoxa from "../components/PerimetroCoxa"
import DinamometroManual from "../components/DinamometroManual"
import RelacaoFlexoresExtensores from "../components/RelacaoFlexoresExtensores"
import { Divider } from "antd"
import EscalaAnalogicaDor from "../components/EscalaVisualAnalogicaDor"
import Lachemeter from "../components/Lechemeter"
import { Button } from "antd"
import Lysholm from "../components/Lysholm"
import TesteMobilidadeTornozelo from "../components/TesteMobilidadeTornozelo"
import StepDown from "../components/StepDown"
import HopTest from "../components/HopTest"
import { useLocation } from "react-router-dom"
import Layout from "../Layout"
import { enviarDados } from "../firebase"

export default function LCA() {
    const location = useLocation()
    const initialData = location.state?.initialData
    const [data, setData] = useState(initialData||{ })
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
    

    return (
        <Layout>
            <h1 className="text-2xl lg:text-3xl text-center font-bold text-cyan-600 mt-14">
                AVALIAÇÃO FUNCIONAL DO JOELHO (LCA)
            </h1>
            <div className="py-10">
                <DadosPessoais onSubmitData={handleSetData} initialData={initialData?.dadosPessoais}/>
            </div>
            <Divider className="my-10" />
            <EscalaAnalogicaDor onDataChange={handleSetData} initialData={initialData?.escalaAnalogicaDor} />
            <Divider className="my-10" />
            <AmplitudeMovimentoJoelho onDataChange={handleSetData} initialData={initialData?.amplitudeMovimentoJoelho} />
            <Divider className="my-10" />
            <PerimetroCoxa onDataChange={handleSetData} initialData={initialData?.perimetroCoxa} />
            <Divider className="my-10" />
            <Lachemeter onDataChange={handleSetData} initialData={initialData?.lachemeter} />
            <Divider className="my-10" />
            <DinamometroManual onDataChange={handleSetData} initialData={initialData?.dinamometroManual} />
            <Divider className="my-10" />
            <RelacaoFlexoresExtensores onDataChange={handleSetData} initialData={initialData?.relacaoFlexoresExtensores} />
            <Divider className="my-10" />
            <Lysholm onDataChange={handleSetData} initialData={initialData?.lysholm} />
            <Divider className="my-10" />
            <HopTest onDataChange={handleSetData} initialData={initialData?.hopTest} />
            <Divider className="my-10" />
            <TesteMobilidadeTornozelo onDataChange={handleSetData} initialData={initialData?.testeMobilidadeTornozelo} />
            <Divider className="my-10" />
            <StepDown onDataChange={handleSetData} initialData={initialData?.stepDown} />
            <Divider className="my-10" />
          
            <Button type="primary" className="block mx-auto mt-10 w-full" size="large" onClick={(_)=>enviarDados('lca', data)}>
                Enviar
            </Button>
           

          
        </Layout>
    )

}