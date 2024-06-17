
import { useLocation } from "react-router-dom";
export default function RelatorioDFP() {
    const location = useLocation()
    //const data = location.state?.data


    return (
        <>
            <div className="text-center px-20 py-10">

                <h1 className="text-xl font-bold">AVALIACAO FUNCIONAL DO JOELHO (DFP)</h1>

                <div className="p-5">
                    <div className="text-left text-md w-full bg-gray-300 p-2 shadow-md">
                        <div><strong> Nome:</strong> {data.dadosPessoais.nome}</div>
                    </div>
                </div>



            </div>



        </>

    )

}

const data = {
    "amplitudeMovimentoJoelho": {
        "extensaoJoelhoDireito": 12,
        "extensaoJoelhoEsquerdo": 12,
        "flexaoJoelhoDireito": 11,
        "flexaoJoelhoEsquerdo": 12
    },
    "cpf": "",
    "criteriosLimitacaoFuncionalGrave": {
        "admExtensaoContratura": "12",
        "caminhada6MinPorcentagem": "12",
        "deficitQuadriceps": "323",
        "idade": "13",
        "imc": "21",
        "perdaADMFlexaoGraus": "12",
        "sf36AspectosFisicos": "12",
        "sf36CapacidadeFuncional": "12",
        "sf36Dor": "12",
        "tempoSintomasAnos": "22",
        "womac": "12"
    },
    "dadosPessoais": {
        "altura": "184",
        "cpf": "",
        "data": "2020-06-20T03:00:00.000Z",
        "hora": "2024-06-16T23:04:00.000Z",
        "idade": "39",
        "lados": [
            "Braço Direito"
        ],
        "membro": "direito",
        "nome": "Brunella Zeferino Fiorotti",
        "peso": "90",
        "queixa": "11Dor nas pernas",
        "sexo": "Masculino"
    },
    "data": "2020-06-20T03:00:00.000Z",
    "dinamometroManual": {
        "deficitExtensor": 190,
        "deficitFlexor": 209,
        "deficitHipPosition": 0,
        "torqueExtensorMedioDireito": 10,
        "torqueExtensorMedioEsquerdo": 200,
        "torqueFlexorMedioDireito": 11,
        "torqueFlexorMedioEsquerdo": 220,
        "torqueHipPositionDireito": 12,
        "torqueHipPositionEsquerdo": 12
    },
    "escalaAnalogicaDor": {
        "dorMaiorDireito": 4,
        "dorMaiorEsquerdo": 5,
        "dorMenorDireito": 2,
        "dorMenorEsquerdo": 3,
        "dorMomentoEsquerdo": 2
    },
    "nome": "Brunella Zeferino Fiorotti",
    "perimetroCoxa": {
        "coxaDireita15cm": 12,
        "coxaDireita6cm": 12,
        "coxaEsquerda15cm": 12,
        "coxaEsquerda6cm": 12,
        "diferencaCoxa15cm": 0,
        "diferencaCoxa6cm": 0
    },
    "relacaoFlexoresExtensores": {
        "direito": 12,
        "esquerdo": 15
    },
    "sf36": {
        "1": {
            "response": "0",
            "score": 5
        },
        "2": {
            "response": "2",
            "score": 3.4
        },
        "3": {
            "response": "2",
            "score": 3
        },
        "4": {
            "response": "2",
            "score": 3
        },
        "5": {
            "response": "2",
            "score": 3
        },
        "6": {
            "response": "2",
            "score": 3
        },
        "7": {
            "response": "1",
            "score": 2
        },
        "8": {
            "response": "1",
            "score": 2
        },
        "9": {
            "response": "1",
            "score": 2
        },
        "10": {
            "response": "1",
            "score": 2
        },
        "11": {
            "response": "1",
            "score": 2
        },
        "12": {
            "response": "1",
            "score": 2
        },
        "13": {
            "response": "1",
            "score": 2
        },
        "14": {
            "response": "1",
            "score": 2
        },
        "15": {
            "response": "1",
            "score": 2
        },
        "16": {
            "response": "0",
            "score": 1
        },
        "17": {
            "response": "1",
            "score": 2
        },
        "18": {
            "response": "1",
            "score": 2
        },
        "19": {
            "response": "1",
            "score": 2
        },
        "20": {
            "response": "2",
            "score": 3
        },
        "21": {
            "response": "1",
            "score": 5.4
        },
        "22": {
            "response": "1",
            "score": 4.75
        },
        "23": {
            "response": "1",
            "score": 5
        },
        "24": {
            "response": "1",
            "score": 5
        },
        "25": {
            "response": "1",
            "score": 5
        },
        "26": {
            "response": "1",
            "score": 5
        },
        "27": {
            "response": "1",
            "score": 5
        },
        "28": {
            "response": "1",
            "score": 5
        },
        "29": {
            "response": "1",
            "score": 5
        },
        "30": {
            "response": "1",
            "score": 5
        },
        "31": {
            "response": "1",
            "score": 5
        },
        "32": {
            "response": "2",
            "score": 3
        },
        "33": {
            "response": "1",
            "score": 2
        },
        "34": {
            "response": "1",
            "score": 4
        },
        "35": {
            "response": "1",
            "score": 2
        },
        "36": {
            "response": "1",
            "score": 4
        },
        "dominions": {
            "aspectosSociais": "67.50",
            "capacidadeFuncional": "25.00",
            "dor": "33.33",
            "estadoGeralSaude": "2.00",
            "limitacaoAspectosFisicos": "100.00",
            "limitacoesAspectosEmocionais": "18.75",
            "saudeMental": "100.00",
            "vitalidade": "70.00"
        },
        "total": 118.55
    },
    "testeCaminhada": {
        "deficit": 45.5,
        "distanciaPercorrida": 12,
        "distanciaPredita": 22,
        "dorCaminhada": 4
    },
    "womac": {
        "soma": 700,
        "womac1": {
            "media": 35,
            "respostas": [
                {
                    "response": "1",
                    "result": 25
                },
                {
                    "response": "2",
                    "result": 50
                },
                {
                    "response": "2",
                    "result": 50
                },
                {
                    "response": "1",
                    "result": 25
                },
                {
                    "response": "1",
                    "result": 25
                }
            ],
            "soma": 175
        },
        "womac2": {
            "media": 25,
            "respostas": [
                {
                    "response": "1",
                    "result": 25
                },
                {
                    "response": "1",
                    "result": 25
                }
            ],
            "soma": 50
        },
        "womac3": {
            "media": 27.941176470588236,
            "respostas": [
                {
                    "response": "2",
                    "result": 50
                },
                {
                    "response": "2",
                    "result": 50
                },
                {
                    "response": "1",
                    "result": 25
                },
                {
                    "response": "1",
                    "result": 25
                },
                {
                    "response": "1",
                    "result": 25
                },
                {
                    "response": "1",
                    "result": 25
                },
                {
                    "response": "1",
                    "result": 25
                },
                {
                    "response": "1",
                    "result": 25
                },
                {
                    "response": "1",
                    "result": 25
                },
                {
                    "response": "1",
                    "result": 25
                },
                {
                    "response": "1",
                    "result": 25
                },
                {
                    "response": "1",
                    "result": 25
                },
                {
                    "response": "1",
                    "result": 25
                },
                {
                    "response": "1",
                    "result": 25
                },
                {
                    "response": "1",
                    "result": 25
                },
                {
                    "response": "1",
                    "result": 25
                },
                {
                    "response": "1",
                    "result": 25
                }
            ],
            "soma": 475
        }
    }
}