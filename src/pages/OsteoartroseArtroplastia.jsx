import { useEffect, useState } from "react"
import { db } from "../firebase"
import DadosPessoais from "../components/DadosPessoais"
import AmplitudeMovimentoJoelho from "../components/AmplitudeMovimentoJoelho"
import PerimetroCoxa from "../components/PerimetroCoxa"
import DinamometroManual from "../components/DinamometroManual"
import RelacaoFlexoresExtensores from "../components/RelacaoFlexoresExtensores"
import SliderDor from "../components/SliderDor"
import { Divider } from "antd"
import EscalaAnalogicaDor from "../components/EscalaVisualAnalogicaDor"
import { CriteriosLimitacaoFuncionalGraveOsteoartroseTable } from "../components/CriteriosLimitaçãoFuncionalGraveOsteoartrose"
import { LachemeterTable } from "../components/Lechemeter"
import { Button } from "antd"
import { push, ref } from "firebase/database";

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
            document.location.href = "/";
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
            <Divider className="my-10" />
            <AmplitudeMovimentoJoelho onDataChange={handleSetData} />
            <Divider className="my-10" />
            <PerimetroCoxa onDataChange={handleSetData} />
            <Divider className="my-10" />
            <EscalaAnalogicaDor onDataChange={handleSetData} />
            <Divider className="my-10" />
            <DinamometroManual onDataChange={handleSetData} />
            <Divider className="my-10" />
            <RelacaoFlexoresExtensores onDataChange={handleSetData} />
            <Divider className="my-10" />
            <SliderDor title={"Nível de dor no final do teste"} onDataChange={handleSetData} />
            <Divider className="my-10" />
            <CriteriosLimitacaoFuncionalGraveOsteoartroseTable onDataChange={handleSetData} sexo={data.sexo} />
            <Divider className="my-10" />
            <LachemeterTable onDataChange={handleSetData} />
            <Divider className="my-10" />
            <Button type="primary" className="block mx-auto mt-10 w-full" size="large" onClick={enviarDados}>
                Enviar
            </Button>




        </>
    )

}
