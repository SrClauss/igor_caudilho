
import { useLocation } from "react-router-dom";
import '../reports.css'
import { Box, FormControl, TextField } from "@mui/material";




export const DadosPessoais = ({ dadosPessoais }) => {
    return (
        <div className="pt-5">
            <div className="mx-2 my-1 w-full flex flex-row justify-between">
                <div className="text-left text-sm w-full bg-gray-200 px-2">
                    <div><strong> Nome:</strong> {dadosPessoais?.nome ? dadosPessoais.nome : ""}</div>
                </div>
            </div>
            <div className="mx-2 my-1 w-full flex flex-row justify-between">
                <div className="text-left text-sm w-1/2 bg-gray-200  mr-2 px-2 ">
                    <strong>Idade: </strong>{dadosPessoais?.idade ? dadosPessoais.idade : ""}
                </div>

                <div className="text-left text-sm w-1/2 bg-gray-200  mr-2 px-2">
                    <strong>Altura: </strong>{dadosPessoais?.altura ? dadosPessoais.altura : ""}
                </div>
                <div className="text-left text-sm w-1/2 bg-gray-200 mr-2 px-2">
                    <strong>Peso: </strong>{dadosPessoais?.peso ? dadosPessoais.peso : ""}
                </div>
                <div className="text-left text-sm w-1/2 bg-gray-200 px-2">

                    <strong>Sexo: </strong>{dadosPessoais?.sexo ? dadosPessoais.sexo : ""}
                </div>

            </div>

            <div className="mx-2 my-1 w-full flex flex-row justify-between">
                <div className="text-left text-sm bg-gray-200 w-full px-2 ">
                    <strong>Membro(s) Lesado(s): </strong>{
                        dadosPessoais?.lados ? dadosPessoais.lados.map((lado, index) => {
                            return <span key={index}>{lado}{index < dadosPessoais.lados.length - 1 ? ', ' : ''}</span>
                        }) : ""
                    }
                </div>
            </div>

            <div className="mx-2 my-1 w-full flex flex-row justify-between">
                <div className="text-left text-sm bg-gray-200 px-2  w-full ">
                    <strong>Membro Dominante: </strong>{dadosPessoais?.membro ? dadosPessoais.membro.charAt(0).toUpperCase() + dadosPessoais.membro.slice(1) : ""}
                </div>
            </div>
            <div className="mx-2 my-1 w-full flex flex-row justify-between">
                <div className="text-left text-sm w-1/2 px-2 bg-gray-200 mr-2 ">
                    <strong>CPF: </strong>{dadosPessoais?.cpf ? dadosPessoais.cpf : ""}
                </div>

                <div className="text-left text-sm w-1/2 px-2 bg-gray-200  mr-2 ">
                    <strong>Hora: </strong>{dadosPessoais?.hora ? new Date(dadosPessoais.hora).toLocaleTimeString("pt-BR") : ""}
                </div>
                <div className="text-left text-sm w-1/2 px-2 bg-gray-200 ">
                    <strong>Data: </strong>{dadosPessoais?.data ? new Date(dadosPessoais.data).toLocaleDateString("pt-BR") : ""}
                </div>

            </div>
            <div className="border min-h-24 text-justify p-3 mt-5 rounded-md">
                <div className="bg-white px-2 whitespace-nowrap w-min  text-sm font-bold" style={{ marginTop: "-20px", marginLeft: "6px" }}>Queixas Principais</div>
                <div className="text-sm">{dadosPessoais?.queixa ? dadosPessoais.queixa : ""}</div>
            </div>


        </div>
    );
};


export const EscalaVisualAnalogicaDor = ({ escalaAnalogicaDor }) => {

    return (

        <div className="mt-1 pt-1 px-8 border rounded-md">

            <div className="text-center text-md font-bold">Escala Visual Analógica de Dor</div>

            <div className="my-2 w-full flex flex-row justify-between">
                <Escala valor={escalaAnalogicaDor?.dorMomentoDireito || 1} prompt={"Dor No Momento da Avaliação (Direito)"} />
                <Escala valor={escalaAnalogicaDor?.dorMomentoEsquerdo || 1} prompt={"Dor No Momento da Avaliação (Esquerdo)"} />
            </div>
            <div className="my-2 w-full flex flex-row justify-between">
                <Escala valor={escalaAnalogicaDor?.dorMaiorDireito || 1} prompt={"Dor Maior (Direito)"} />
                <Escala valor={escalaAnalogicaDor?.dorMaiorEsquerdo || 1} prompt={"Dor Maior (Esquerdo)"} />
            </div>
            <div className="my-2 w-full flex flex-row justify-between">
                <Escala valor={escalaAnalogicaDor?.dorMenorDireito || 1} prompt={"Dor Menor (Direito)"} />
                <Escala valor={escalaAnalogicaDor?.dorMenorEsquerdo || 1} prompt={"Dor Menor (Esquerdo)"} />

            </div>
        </div>)

}


export const Escala = ({ valor, prompt }) => {

    return (

        <div>
            <div className="text-xs mb-2">{prompt}</div>

            <div className="flex flex-row">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <div
                        key={num}
                        style={{ borderRadius: '100%', width: '2em', height: '1.7em', }}
                        className={` text-xs ${valor === num ? 'bg-black ' : 'bg-gray-200 '}
                         ${valor === num ? 'text-white' : 'text-black'}`}
                    >
                        {num}
                    </div>
                ))}
            </div>
        </div>
    )
}

export const AmplitudeMovimentoJoelho = ({ amplitudeMovimentoJoelho }) => {
    return (<div className="p-2 border rounded-md mt-1">
        <div className="text-center text-md font-bold">Amplitude de Movimento do Joelho</div>
        <div className="my-1 w-full flex flex-row justify-between">

            <div className="pl-2 text-left text-sm w-1/2 bg-gray-200 mr-2 ">
                <strong>Flexão (Direito): </strong>{amplitudeMovimentoJoelho.flexaoJoelhoDireito || ""}

            </div>
            <div className="pl-2 text-left text-sm w-1/2 bg-gray-200  mr-2 ">
                <strong>Flexão (Esquerdo): </strong>{amplitudeMovimentoJoelho.flexaoJoelhoEsquerdo || ""}

            </div>
        </div>
        <div className="my-1 w-full flex flex-row justify-between">
            <div className="pl-2 text-left text-sm w-1/2 bg-gray-200  mr-2 ">
                <strong>Extensão (Direito): </strong>{amplitudeMovimentoJoelho.extensaoJoelhoDireito || ""}
            </div>
            <div className="pl-2 text-left text-sm w-1/2 bg-gray-200  mr-2 ">
                <strong>Extensão (Esquerdo): </strong>{amplitudeMovimentoJoelho.extensaoJoelhoEsquerdo || ""}
            </div>
        </div>

    </div>)
}


export const PerimetroCoxa = ({ perimetroCoxa }) => {
    const coxaDireita15cm = perimetroCoxa?.coxaDireita15cm || "";
    const coxaEsquerda15cm = perimetroCoxa?.coxaEsquerda15cm || "";
    const coxaDireita6cm = perimetroCoxa?.coxaDireita6cm || "";
    const coxaEsquerda6cm = perimetroCoxa?.coxaEsquerda6cm || "";
    const diferencaCoxa15cm = perimetroCoxa?.diferencaCoxa15cm || "";
    const diferencaCoxa6cm = perimetroCoxa?.diferencaCoxa6cm || "";

    return (
        <div className="p-2 w-full border rounded-md mt-1 h-36">
            <div className="text-center text-md font-bold">Perímetro da Coxa</div>

            <div className="my-1 w-full flex flex-row justify-between">

                <div className="pl-2 text-left text-sm w-1/2 bg-gray-200 mr-1 ">
                    <strong>Direito </strong>
                </div>
                <div className="pl-2 text-left text-sm w-1/2 bg-gray-200  mr-1 ">
                    <strong>Esquerdo </strong>

                </div>
            </div>
            <div className="my-1 w-full flex flex-row justify-between">
                <div className="pl-2 text-left text-sm w-1/2 bg-gray-200 mr-1 ">
                    <strong>15cm: </strong>{coxaDireita15cm}
                </div>
                <div className="pl-2 text-left text-sm w-1/2 bg-gray-200  mr-1 ">
                    <strong>15cm: </strong>{coxaEsquerda15cm}
                </div>
            </div>
            <div className="my-1 w-full flex flex-row justify-between">
                <div className="pl-2 text-left text-sm w-1/2 bg-gray-200 mr-1 ">
                    <strong>6cm: </strong>{coxaDireita6cm}
                </div>
                <div className="pl-2 text-left text-sm w-1/2 bg-gray-200  mr-1 ">
                    <strong>6cm: </strong>{coxaEsquerda6cm}
                </div>
            </div>
            <div className="my-1 w-full flex flex-row justify-between">
                <div className="pl-2 text-left text-sm w-1/2 bg-gray-200 mr-1 ">

                    <strong>Dif. 15cm: </strong>{diferencaCoxa15cm}
                </div>

                <div className="pl-2 text-left text-sm w-1/2 bg-gray-200  mr-1 ">
                    <strong>Dif. 6cm: </strong>{diferencaCoxa6cm}
                </div>
            </div>

        </div>
    )
}



export const DinamometroManual = ({ dinamometroManual }) => {
    const torqueExtensorMedioDireito = dinamometroManual?.torqueExtensorMedioDireito || "";
    const torqueExtensorMedioEsquerdo = dinamometroManual?.torqueExtensorMedioEsquerdo || "";
    const deficitExtensor = dinamometroManual?.deficitExtensor || "";
    const torqueFlexorMedioDireito = dinamometroManual?.torqueFlexorMedioDireito || "";
    const torqueFlexorMedioEsquerdo = dinamometroManual?.torqueFlexorMedioEsquerdo || "";
    const deficitFlexor = dinamometroManual?.deficitFlexor || "";

    return (
        <div className="p-2 border rounded-md mt-1 w-full h-36">
            <div className="text-center text-md font-bold">Dinamômetro Manual</div>

            <div className="my-1 w-full flex flex-row justify-around bg-gray-200">
                <div className="w-1/4">Torque</div>
                <div className="w-1/4">Dir.</div>
                <div className="w-1/4">Esq.</div>
                <div className="w-1/4">Defc.</div>
            </div>
            <div className="my-1 w-full flex flex-row justify-around">
                <div className="w-1/4">Extensor</div>
                <div className="w-1/4">{torqueExtensorMedioDireito}</div>
                <div className="w-1/4">{torqueExtensorMedioEsquerdo}</div>
                <div className="w-1/4">{deficitExtensor}</div>


            </div>

            <div className="my-1 w-full flex flex-row justify-around bg-gray-200">
                <div className="w-1/4">Flexor</div>
                <div className="w-1/4">{torqueFlexorMedioDireito}</div>
                <div className="w-1/4">{torqueFlexorMedioEsquerdo}</div>
                <div className="w-1/4">{deficitFlexor}</div>
            </div>


        </div>
    )
}



export const RelacaoFlexoresExtensores = ({ relacaoFlexoresExtensores }) => {
    const direito = relacaoFlexoresExtensores?.direito || "";
    const esquerdo = relacaoFlexoresExtensores?.esquerdo || "";
    return (
        <>

            <div className="p-2 border rounded-md mt-1 w-full h-36">
                <div className="text-center text-md font-bold">Relação Flexores/Extensores</div>
                <div className="my-1 w-full flex flex-row justify-between  bg-gray-200 mr-1 ">
                    <div className="pl-2 text-center text-sm w-1/2">
                    </div>
                    <div className="pl-2 text-center text-md w-1/2">
                        <span>60% </span>
                    </div>
                </div>

                <div className="my-1 w-full flex flex-row justify-between   ">
                    <div className="pl-2 text-left text-md w-1/2">
                        Direito
                    </div>
                    <div className="pl-2 text-center text-md w-1/2">
                        <strong>{direito}</strong>
                    </div>
                </div>

                <div className="my-1 w-full flex flex-row justify-between  bg-gray-200 mr-1 ">
                    <div className="pl-2 text-left text-md w-1/2 ">
                        Esquerdo
                    </div>
                    <div className="pl-2 text-center text-md w-1/2">
                        <strong>{esquerdo} </strong >
                    </div>
                </div>

            </div>

        </>



    )
}
export const PontuacaoQuestionario = ({ questionario, pontuacao }) => {

    return (
        <>
            <div className="my-1 w-full flex flex-row">
                <div className="w-1/2 text-left font-bold">{questionario}</div>
                <div className="w-1/2 text-left bg-gray-200">{pontuacao}</div>
            </div>


        </>)
}
export const GroupParameters = ({ children, title, size = 36 }) => {
    return (
        <div className={`p-2 border rounded-md mt-1 w-full h-${size}`}>
            <div className="text-center text-md font-bold pb-4">{title}</div>
            {children}
        </div>
    )

}



{/*
                    {"diferenca":-443.66,"maximaManualDireita":[12,11,12],"maximaManualEsquerda":[1122,122,122],"mediaDireita":11.67,"mediaEsquerda":455.33}
                     */}
export const Lachemeter = ({ lachemeter }) => {
    return (
        <div className="p-2 border rounded-md mt-1 w-full h-40">

            <div className="text-center text-xl font-bold">Lachemeter</div>


            <div className="my-1 w-full flex flex-row justify-between bg-gray-200">
                <div className="text-left w-full"></div>
                <div className="text-left w-full">Direita</div>
                <div className="text-left w-full">Esquerda</div>
            </div>
            <div className="my-1 w-full flex flex-row justify-between bg-gray-200">
                <div className="text-left w-full">Máxima Manual</div>
                <div className="text-left w-full">{lachemeter.maximaManualDireita[0]}/{lachemeter.maximaManualDireita[1]}/{lachemeter.maximaManualDireita[2]}</div>
                <div className="text-left w-full">{lachemeter.maximaManualEsquerda[0]}/{lachemeter.maximaManualEsquerda[1]}/{lachemeter.maximaManualEsquerda[2]}</div>
            </div>
            <div className="my-1 w-full flex flex-row justify-between bg-gray-200">
                <div className="text-left w-full ">Média</div>
                <div className="text-left w-full ">{lachemeter.mediaDireita}</div>
                <div className="text-left w-full ">{lachemeter.mediaEsquerda}</div>
            </div>
            <div className="my-1 w-full flex flex-row justify-between bg-gray-200">
                <div className="text-left w-full">Diferença</div>
                <div className="text-left w-full">{lachemeter.diferenca}</div>
            </div>
        </div>

    )

}

export const Observacoes = () => {
    return (


        <div className="border min-h-24 text-justify p-3 mt-5 rounded-md">
            <div className="bg-white px-2 whitespace-nowrap w-min  text-sm font-bold" style={{ marginTop: "-20px", marginLeft: "6px" }}>Observações</div>
            <div className="text-sm"></div>
        </div>


    )


}
