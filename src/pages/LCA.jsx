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
import { QuestionarioLysholm } from "../components/QuestionarioJoelho"
import { Button } from "antd"
import { push, ref } from "firebase/database";


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
            document.location.href = "/";
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
            <Divider className="my-10" />

            <AmplitudeMovimentoJoelho onDataChange={handleSetData} />
            <Divider className="my-10" />
            <PerimetroCoxa onDataChange={handleSetData} />
            <Divider className="my-10" />
            <Lachemeter onDataChange={handleSetData} />
            <Divider className="my-10" />
            <DinamometroManual onDataChange={handleSetData} />
            <Divider className="my-10" />
            <RelacaoFlexoresExtensores onDataChange={handleSetData} />

            <Divider className="my-10" />
            <QuestionarioLysholm onDataChange={handleSetData} />
            <Button type="primary" className="block mx-auto mt-10 w-full" size="large" onClick={enviarDados}>
                Enviar
            </Button>
        </>
    )

}