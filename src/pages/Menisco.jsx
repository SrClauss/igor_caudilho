import { useEffect, useState } from "react"
import { enviarDados } from "../firebase"
import DadosPessoais from "../components/DadosPessoais"
import AmplitudeMovimentoJoelho from "../components/AmplitudeMovimentoJoelho"
import PerimetroCoxa from "../components/PerimetroCoxa"
import DinamometroManual from "../components/DinamometroManual"
import RelacaoFlexoresExtensores from "../components/RelacaoFlexoresExtensores"
import EscalaAnalogicaDor from "../components/EscalaVisualAnalogicaDor"
import { QuestionarioLysholm } from "../components/QuestionarioJoelho"
import { Button } from "antd"
import { Divider } from "@mui/material"
import TesteMobilidadeTornozelo from "../components/TesteMobilidadeTornozelo"
import StepDown from "../components/StepDown"
import Lysholm from "../components/Lysholm"
import { useLocation } from "react-router-dom"
import Layout from "../Layout"
import Observacoes from "../components/Observacoes"
import { useParams } from "react-router-dom"

import { get, ref } from "firebase/database";

import { db } from "../firebase";


export default function Menisco() {
    const location = useLocation()
    const initialData = location.state?.initialData
    const [data, setData] = useState(initialData || {})


    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (id) {
            setIsLoading(true); // Inicia o carregamento

            const docRef = get(ref(db, `menisco/${id}`));
            docRef.then((snapshot) => {
                setData(snapshot.val());
            }).finally(() => {
                setIsLoading(false); // Finaliza o carregamento
            });
        }
        else {
            setIsLoading(false);
        }
    }, [id]);


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

    }, [data])

    return (
        <Layout>
            <h1 className="text-2xl lg:text-3xl text-cMENISCOenter font-bold text-cyan-600 mt-14">
                AVALIAÇÃO FUNCIONAL DO JOELHO (STATUS DE LESÃO DE MENISCO)
            </h1>



            {isLoading ? (<div className="text-center mt-10">Carregando...</div>) : (<div>

                <div className="py-10">
                    <DadosPessoais onSubmitData={handleSetData} initialData={data?.dadosPessoais} />
                </div>
                <Divider className="my-10" />
                <EscalaAnalogicaDor onDataChange={handleSetData} initialData={data?.escalaAnalogicaDor} />
                <Divider className="my-10" />
                <AmplitudeMovimentoJoelho onDataChange={handleSetData} initialData={data?.amplitudeMovimentoJoelho} />
                <Divider className="my-10" />
                <PerimetroCoxa onDataChange={handleSetData} initialData={data?.perimetroCoxa} />
                <Divider className="my-10" />
                <DinamometroManual onDataChange={handleSetData} initialData={data?.dinamometroManual} />
                <Divider className="my-10" />
                <RelacaoFlexoresExtensores onDataChange={handleSetData} initialData={data?.relacaoFlexoresExtensores} />
                <Divider className="my-10" />
                <Lysholm onDataChange={handleSetData} initialData={data?.lysholm} />
                <Divider className="my-10" />
                <TesteMobilidadeTornozelo onDataChange={handleSetData} initialData={data?.testeMobilidadeTornozelo} />
                <Divider className="my-10" />
                <StepDown onDataChange={handleSetData} initialData={data?.stepDown} />
                <div className="mt-10">
                    <Observacoes onDataChange={handleSetData} initialData={data?.observacoes} />
                </div>

                <Button type="primary" className="block mx-auto mt-10 w-full" size="large" onClick={(_) => enviarDados('menisco', data)}>
                    Enviar
                </Button>
            </div>)}


        </Layout>
    )
}