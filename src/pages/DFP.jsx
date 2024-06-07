
import { Button, Divider } from "antd";
import { useState, useEffect } from "react";
import DadosPessoais from "../components/DadosPessoais";
import EscalaAnalogicaDor from "../components/EscalaVisualAnalogicaDor";
import AmplitudeMovimentoJoelho from "../components/AmplitudeMovimentoJoelho";
import PerimetroCoxa from "../components/PerimetroCoxa";
import DinamometroManual from "../components/DinamometroManual";
import RelacaoFlexoresExtensores from "../components/RelacaoFlexoresExtensores";
import QuestionarioJoelho from "../components/QuestionarioJoelho";
import {db} from "../firebase";
import { push, ref } from "firebase/database";
import TesteMobilidadeTornozelo from "../components/TesteMobilidadeTornozelo";
import StepDown from "../components/StepDown";


export default function DFP() {

  const [data, setData] = useState({})
 
const requiredKeys = [
  "stepDownDireito",
  "stepDownEsquerdo",
  "torqueExtensorMedioDireito",
  "torqueExtensorMedioEsquerdo",
  "torqueFlexorMedioDireito",
  "torqueFlexorMedioEsquerdo",
  "torqueHipPositionDireito",
  "torqueHipPositionEsquerdo",
  "deficitExtensor",
  "deficitFlexor",
  "deficitHipPosition",
  "nome",
  "idade",
  "altura",
  "peso",
  "sexo",
  "lados",
  "membro",
  "data",
  "hora",
  "queixa",
  "hd",
  "dorMomentoDireito",
  "dorMomentoEsquerdo",
  "dorMenorDireito",
  "dorMenorEsquerdo",
  "dorMaiorDireito",
  "dorMaiorEsquerdo",
  "coxaDireita6cm",
  "coxaEsquerda6cm",
  "coxaDireita15cm",
  "coxaEsquerda15cm",
  "diferencaCoxa6cm",
  "diferencaCoxa15cm",
  "flexores",
  "extensores",
  "pontuacaoLysholm",
  "pontuacaoKujala",
  "testeJoelho"
]



  


  const enviarDados = async () => {

    const missingKeys = requiredKeys.filter(key => !(key in data));

    if (missingKeys.length > 0) {

      console.log(`Missing keys: ${missingKeys.join(", ")}`);

      return;
    }

    await push(ref(db, 'dfp'), JSON.stringify(data)).then(() => {
      console.log('Data is set');
    }).catch((error) => {
      
      console.log(error);
    }
  );
  window.location.href = "/";


  }
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
      <QuestionarioJoelho onDataChange={handleSetData} />
      <Divider className="my-10" />
      <TesteMobilidadeTornozelo onDataChange={handleSetData} />
      <Divider className="my-10" />
      <StepDown onDataChange={handleSetData} />
      <Divider className="my-10" />



      <Button type="primary"  className="block mx-auto mt-10 w-full" size="large" onClick={enviarDados}>
        Enviar
      </Button>





    </>



  )

}



