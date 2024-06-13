
import { Button, Divider } from "antd";
import { useState, useEffect } from "react";
import DadosPessoais from "../components/DadosPessoais";
import EscalaAnalogicaDor from "../components/EscalaVisualAnalogicaDor";
import AmplitudeMovimentoJoelho from "../components/AmplitudeMovimentoJoelho";
import PerimetroCoxa from "../components/PerimetroCoxa";
import DinamometroManual from "../components/DinamometroManual";
import RelacaoFlexoresExtensores from "../components/RelacaoFlexoresExtensores";
import { db } from "../firebase";
import { push, ref } from "firebase/database";
import TesteMobilidadeTornozelo from "../components/TesteMobilidadeTornozelo";
import StepDown from "../components/StepDown";
import Kujala from "../components/Kujala";
export default function DFP() {

  const [data, setData] = useState({})




  useEffect(() => {
    console.log(data);
  }, [data])
  const enviarDados = async () => {
    await push(ref(db, 'dfp'), JSON.stringify(data)).then(() => {
      console.log('Data is set');
      document.location.href = "/";
    }).catch((error) => {

      console.log(error);
    }
    );

  }





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
    <>
      <h1 className="text-2xl lg:text-3xl text-center font-bold text-cyan-600 mt-14">
        AVALIAÇÃO FUNCIONAL DO JOELHO (DFP)
      </h1>

      <div className="py-10">
        <DadosPessoais onSubmitData={handleSetData} />
      </div>
      <Divider className="my-10" />
      <EscalaAnalogicaDor onDataChange={handleSetData} />
      <Divider className="my-10" />
      <AmplitudeMovimentoJoelho onDataChange={handleSetData} />
      <Divider className="my-10" />
      <PerimetroCoxa onDataChange={handleSetData} />
      <Divider className="my-10" />
      <DinamometroManual onDataChange={handleSetData} />
      <Divider className="my-10" />
      <RelacaoFlexoresExtensores onDataChange={handleSetData} />
      <Divider className="my-10" />
      <Kujala onDataChange={handleSetData} />
      <Divider className="my-10" />
      <TesteMobilidadeTornozelo onDataChange={handleSetData} />
      <Divider className="my-10" />
      <StepDown onDataChange={handleSetData} />
      <Divider className="my-10" />





      <Button type="primary" className="block mx-auto mt-10 w-full" size="large" onClick={enviarDados}>
        Enviar
      </Button>





    </>



  )

}



