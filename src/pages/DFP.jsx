
import { Button, Divider } from "antd";
import { useState, useEffect } from "react";
import DadosPessoais from "../components/DadosPessoais";
import EscalaAnalogicaDor from "../components/EscalaVisualAnalogicaDor";
import AmplitudeMovimentoJoelho from "../components/AmplitudeMovimentoJoelho";
import PerimetroCoxa from "../components/PerimetroCoxa";
import DinamometroManual from "../components/DinamometroManual";
import RelacaoFlexoresExtensores from "../components/RelacaoFlexoresExtensores";
import { enviarDados } from "../firebase";
import TesteMobilidadeTornozelo from "../components/TesteMobilidadeTornozelo";
import StepDown from "../components/StepDown";
import Kujala from "../components/Kujala";
import { useLocation } from "react-router-dom"
import Layout from "../Layout";
export default function DFP() {
  const location = useLocation()
  const initialData = location.state?.initialData


  const [data, setData] = useState(initialData || {})




  useEffect(() => {
    console.log(data);
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
        AVALIAÇÃO FUNCIONAL DO JOELHO (DFP)
      </h1>



      <div className="py-10">
        <DadosPessoais onSubmitData={handleSetData} initialData={initialData?.dadosPessoais} />
      </div>
      <Divider className="my-10" />
      <EscalaAnalogicaDor onDataChange={handleSetData} initialData={initialData?.escalaAnalogicaDor} />
      <Divider className="my-10" />
      <AmplitudeMovimentoJoelho onDataChange={handleSetData} initialData={initialData?.amplitudeMovimentoJoelho} />
      <Divider className="my-10" />
      <PerimetroCoxa onDataChange={handleSetData} initialData={initialData?.perimetroCoxa} />
      <Divider className="my-10" />
      <DinamometroManual onDataChange={handleSetData} initialData={initialData?.dinamometroManual} />
      <Divider className="my-10" />
      <RelacaoFlexoresExtensores onDataChange={handleSetData} initialData={initialData?.relacaoFlexoresExtensores} />
      <Divider className="my-10" />
      <Kujala onDataChange={handleSetData} initialData={initialData?.kujala} />
      <Divider className="my-10" />
      <TesteMobilidadeTornozelo onDataChange={handleSetData} initialData={initialData?.testeMobilidadeTornozelo} />
      <Divider className="my-10" />
      <StepDown onDataChange={handleSetData} initialData={initialData?.stepDown} />
      <Divider className="my-10" />

      <Button type="primary" className="block mx-auto mt-10 w-full" size="large" onClick={(_) => enviarDados("dfp", data)}>
        Enviar
      </Button>





    </Layout>



  )

}



