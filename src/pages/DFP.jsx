
import { Button, Divider } from "antd";
import { useState, useEffect } from "react";
import DadosPessoais from "../components/joelho/DadosPessoais";
import EscalaAnalogicaDor from "../components/joelho/EscalaVisualAnalogicaDor";
import AmplitudeMovimentoJoelho from "../components/joelho/AmplitudeMovimentoJoelho";
import PerimetroCoxa from "../components/joelho/PerimetroCoxa";
import DinamometroManual from "../components/joelho/DinamometroManual";
import RelacaoFlexoresExtensores from "../components/joelho/RelacaoFlexoresExtensores";
import QuestionarioJoelho from "../components/joelho/QuestionarioJoelho";
import {db} from "../firebase";



export default function DFP() {


  const enviarDados = async () => {
    await push(ref(db, 'dfp'), JSON.stringify(data)).then(() => {
      console.log('Data is set');
    }).catch((error) => {

      console.log(error);
    }
    );


  }






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
      <Button type="primary"  className="block mx-auto mt-10" size="large">
        Enviar
      </Button>





    </>



  )

}




/*
{
    "0": {
        "flexaoJoelhoDireito": "",
        "flexaoJoelhoEsquerdo": "",
        "extensaoJoelhoDireito": "",
        "extensaoJoelhoEsquerdo": ""
    },
    "direito": true,
    "esquerdo": false,
    "menorDireito": 5,
    "menorEsquerdo": 5,
    "maiorDireito": 5,
    "maiorEsquerdo": 5,
    "coxaDireita6cm": 20,
    "coxaEsquerda6cm": 30,
    "coxaDireita15cm": 20,
    "coxaEsquerda15cm": 40,
    "diferencaCoxa6cm": 10,
    "diferencaCoxa15cm": 20,
    "torqueExtensorMedioDireito": "30",
    "torqueExtensorMedioEsquerdo": "10",
    "torqueFlexorMedioDireito": "20",
    "torqueFlexorMedioEsquerdo": "30",
    "torqueHipPositionDireito": "200",
    "torqueHipPositionEsquerdo": "20",
    "deficitExtensor": 20,
    "deficitFlexor": 10,
    "deficitHipPosition": 180,
    "flexores": "20",
    "extensores": "30",
    "pontuacaoLysholm": "84",
    "pontuacaoKujala": "90",
    "nome": "Clausemberg Rodrigues de Oliveira",
    "idade": "40",
    "altura": "184",
    "peso": "93",
    "sexo": "Masculino",
    "lados": [
        "Braço Direito",
        "Braço Esquerdo"
    ],
    "membro": "esquerdo",
    "data": "2024-05-27T22:23:34.372Z",
    "hora": "2024-05-27T22:23:34.372Z",
    "queixa": "Dor nas pernas",
    "hd": "125563",
    "flexaoJoelhoDireito": "30",
    "extensaoJoelhoDireito": "40",
    "flexaoJoelhoEsquerdo": "50",
    "extensaoJoelhoEsquerdo": "30"
}
*/