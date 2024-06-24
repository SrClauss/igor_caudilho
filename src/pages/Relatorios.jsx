import { useEffect, useRef } from "react"
import {
    DadosPessoais,
    EscalaVisualAnalogicaDor,
    AmplitudeMovimentoJoelho,
    PerimetroCoxa,
    DinamometroManual,
    RelacaoFlexoresExtensores,
    GroupParameters,
    PontuacaoQuestionario,
    Lachemeter,
    Observacoes
} from "../components/ReportComponents"

import { useLocation } from "react-router-dom"

export function RelatorioDFP() {
    const location = useLocation()
    const hasPrinted = useRef(false)
    const data = location.state?.data
    useEffect(() => {
        if (!hasPrinted.current) {
            window.print()
            hasPrinted.current = true
        }


    }, [])




    return (
        <>

            <div className="text-center px-5 py-5">
                <div className="flex justify-right ml-10">
                    <img src="/igor_caudilho.png" alt="logo" className="w-24" />
                </div>
                <div className="px-5 pt-3">

                    <h1 className="text-md font-bold">AVALIACAO FUNCIONAL DO JOELHO (DFP)</h1>

                    <DadosPessoais dadosPessoais={data.dadosPessoais} />
                    <EscalaVisualAnalogicaDor escalaAnalogicaDor={data.escalaAnalogicaDor} />
                    <AmplitudeMovimentoJoelho amplitudeMovimentoJoelho={data.amplitudeMovimentoJoelho} />
                    <div className="flex flex-row justify-between">
                        <div className="w-1/3 ">
                            <PerimetroCoxa perimetroCoxa={data.perimetroCoxa} />

                        </div>
                        <div className="w-1/3 mx-1">
                            <DinamometroManual dinamometroManual={data.dinamometroManual} />

                        </div>
                        <div className="w-1/3">
                            <RelacaoFlexoresExtensores relacaoFlexoresExtensores={data.relacaoFlexoresExtensores} />

                        </div>


                    </div>


                </div>

                <div className="flex flex-row justify-between px-5">
                    <div className=" w-1/3 mr-1">

                        <GroupParameters title={"Questionários"}>


                            <PontuacaoQuestionario questionario={"Kujala"} pontuacao={data.kujala.soma} />




                        </GroupParameters>

                    </div>

                    <div className="w-1/3 ">
                        <GroupParameters title={"Teste de Mobilidade do Tornozelo"}>
                            <PontuacaoQuestionario questionario={"Direito"} pontuacao={data.testeMobilidadeTornozelo.testeJoelhoDireito} />
                            <PontuacaoQuestionario questionario={"Esquerdo"} pontuacao={data.testeMobilidadeTornozelo.testeJoelhoEsquerdo} />


                        </GroupParameters>

                    </div>
                    <div className="w-1/3 ml-1">
                        <GroupParameters title={"StepDown"}>
                            <PontuacaoQuestionario questionario={"Direito"} pontuacao={data.stepDown.stepDownDireito ? "Alterado" : "Normal"} />
                            <PontuacaoQuestionario questionario={"Esquerdo"} pontuacao={data.stepDown.stepDownEsquerdo ? "Alterado" : "Normal"} />
                        </GroupParameters>
                    </div>

                </div>
                <div className="px-5">

                <Observacoes />
                </div>


            </div>


        </>

    )

}

export function RelatorioLCA() {
    const location = useLocation()
    const hasPrinted = useRef(false)
    const data = location.state?.data
    useEffect(() => {
        if (!hasPrinted.current) {
            window.print()
            hasPrinted.current = true
        }
    }, [])
    return (
        <>
            <div className="text-center px-5 py-5">
                <div className="flex justify-right ml-10">
                    <img src="/igor_caudilho.png" alt="logo" className="w-24" />
                </div>

                <div className="px-5 pt-3">

                    <DadosPessoais dadosPessoais={data.dadosPessoais} />
                    <EscalaVisualAnalogicaDor escalaAnalogicaDor={data.escalaAnalogicaDor} />
                    <AmplitudeMovimentoJoelho amplitudeMovimentoJoelho={data.amplitudeMovimentoJoelho} />

                    <div className="flex flex-row justify-between">
                        <div className="w-1/3 mr-1">
                            <PerimetroCoxa perimetroCoxa={data.perimetroCoxa} />
                        </div>
                        <div className="w-1/3">
                            <DinamometroManual dinamometroManual={data.dinamometroManual} />
                        </div>
                        <div className="w-1/3 ml-1">

                            <RelacaoFlexoresExtensores relacaoFlexoresExtensores={data.relacaoFlexoresExtensores} />
                        </div>
                    </div>

                    <Lachemeter lachemeter={data.lachemeter} />

                    <div className="flex flex-row justify-between">
                        <div className="w-1/3 mr-1">
                            <GroupParameters title={"Questionários"}>
                                <PontuacaoQuestionario questionario={"Lysholm"} pontuacao={data.lysholm.soma} />
                            </GroupParameters>

                        </div>

                        <div className="w-1/3">
                            <GroupParameters title={"Hop Test"}>
                                <PontuacaoQuestionario questionario={"Direito"} pontuacao={data.hopTest.hopTestDireito} />
                                <PontuacaoQuestionario questionario={"Esquerdo"} pontuacao={data.hopTest.hopTestEsquerdo} />
                            </GroupParameters>



                        </div>
                        <div className="w-1/3 ml-1">
                            <GroupParameters title={"Step Down"}>
                                <PontuacaoQuestionario questionario={"Direito"} pontuacao={data.stepDown.stepDownDireito ? "Alterado" : "Normal"} />
                                <PontuacaoQuestionario questionario={"Esquerdo"} pontuacao={data.stepDown.stepDownEsquerdo ? "Alterado" : "Normal"} />
                            </GroupParameters>
                        </div>
                    </div>
                    <Observacoes />





                </div>


            </div>
        </>)

}




export function RelatorioOsteoartroseArtroplastia() {

    const location = useLocation()
    const hasPrinted = useRef(false)
    const data = location.state?.data
    useEffect(() => {
        if (!hasPrinted.current) {
            window.print()
            hasPrinted.current = true
        }
    }, [])

    return (
        <div className="a4-container">
        <div className="text-center px-5 py-5">
            <div className="flex justify-right ml-10">
                <img src="/igor_caudilho.png" alt="logo" className="w-24" />
            </div>
            <h1 className="text-md font-bold">OSTEOARTROSE/ORTROPLASTIA </h1>
            <div className="px-5 pt-3">
                <DadosPessoais dadosPessoais={data.dadosPessoais} />
                <EscalaVisualAnalogicaDor escalaAnalogicaDor={data.escalaAnalogicaDor} />
                <div className="flex flex-row justify-between">
                    <div className="w-1/3 mr-1">

                        <PerimetroCoxa perimetroCoxa={data.perimetroCoxa} />
                    </div>
                    <div className="w-1/3">

                        <DinamometroManual dinamometroManual={data.dinamometroManual} />
                    </div>
                    <div className="w-1/3 ml-1">
                        <RelacaoFlexoresExtensores relacaoFlexoresExtensores={data.relacaoFlexoresExtensores} />
                    </div>
                </div>
                <div className="flex flex-col justify-between border border-1 mt-1 rounded-sm p-1">
                    <div className="font-bold">SF36</div>
                    <div className="flex flex-row justify-between">
                        <div className="w-1/3 mr-1">
                            <GroupParameters size={30}>
                                <PontuacaoQuestionario questionario={"Total"} pontuacao={JSON.stringify(data.sf36.total)} />
                                <PontuacaoQuestionario questionario={"Dor"} pontuacao={JSON.stringify(parseFloat(data.sf36.dominions.dor))} />
                                <PontuacaoQuestionario questionario={"Vitalidade"} pontuacao={JSON.stringify(parseFloat(data.sf36.dominions.vitalidade))} />
                            </GroupParameters>
                        </div>
                        <div className="w-1/3">
                            <GroupParameters size={30}>
                                <PontuacaoQuestionario questionario={"Sociais"} pontuacao={JSON.stringify(parseFloat(data.sf36.dominions.aspectosSociais))} />
                                <PontuacaoQuestionario questionario={"Emocionais"} pontuacao={JSON.stringify(parseFloat(data.sf36.dominions.limitacoesAspectosEmocionais))} />
                                <PontuacaoQuestionario questionario={"Saúde Mental"} pontuacao={JSON.stringify(parseFloat(data.sf36.dominions.saudeMental))} />
                            </GroupParameters>

                        </div>

                        <div className="w-1/3 ml-1">
                            <GroupParameters size={30}>
                                <PontuacaoQuestionario questionario={"Saude Geral"} pontuacao={JSON.stringify(parseFloat(data.sf36.dominions.aspectosSociais))} />
                                <PontuacaoQuestionario questionario={"Funcional"} pontuacao={JSON.stringify(parseFloat(data.sf36.dominions.capacidadeFuncional))} />
                                <PontuacaoQuestionario questionario={"Físicos"} pontuacao={JSON.stringify(parseFloat(data.sf36.dominions.limitacaoAspectosFisicos))} />
                            </GroupParameters>

                        </div>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div className="w-1/3 mr-1">
                            <GroupParameters title={"Womac"} size={42}>
                                <PontuacaoQuestionario questionario={"Soma"} pontuacao={JSON.stringify(parseFloat(data.womac.soma))} />
                                <PontuacaoQuestionario questionario={"Dor"} pontuacao={JSON.stringify(parseFloat(data.womac.womac1.soma))} />
                                <PontuacaoQuestionario questionario={"Rigidez"} pontuacao={JSON.stringify(parseFloat(data.womac.womac2.soma))} />
                                <PontuacaoQuestionario questionario={"Ativ. Fís."} pontuacao={JSON.stringify(parseFloat(data.womac.womac3.soma))} />
                            </GroupParameters>
                        </div>
                        <AmplitudeMovimentoJoelho amplitudeMovimentoJoelho={data.amplitudeMovimentoJoelho} />

                        <div className="w-1/2">
                            <GroupParameters title={"Teste Caminhada"} size={42}>
                                <PontuacaoQuestionario questionario={"Dor"} pontuacao={`nível ${data.testeCaminhada.dorCaminhada}`} />
                                <PontuacaoQuestionario questionario={"Percorrido"} pontuacao={data.testeCaminhada.distanciaPercorrida} />
                                <PontuacaoQuestionario questionario={"Predito"} pontuacao={data.testeCaminhada.distanciaPredita} />
                                <PontuacaoQuestionario questionario={"Deficit"} pontuacao={`${data.testeCaminhada.deficit}%`} />
                            </GroupParameters>
                        </div>


                    </div>
                    <div className="flex flex-col justify-between border border-1 mt-72 rounded-sm p-1">
                        <div className="font-bold">CRITÉRIOS DE LIMITAÇÃO FUNCIONAL GRAVE POR OSTEOARTROSE - {data.dadosPessoais.sexo.toUpperCase()}</div>
                        <table className="table-auto w-full">
                            <thead>
                                <tr className="bg-gray-800 text-white">
                                    <th className="border border-1 py-3">Critério</th>
                                    <th className="border border-1 py-3">Pontuação</th>
                                    <th className="border border-1 py-3">Resultado</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr className="bg-white">
                                    <td className="border border-1 py-1">Idade &gt;= 64</td>
                                    <td className="border border-1 py-1"> {data.criteriosLimitacaoFuncionalGrave.idade} </td>
                                    <td className="border border-1 py-1">{data.criteriosLimitacaoFuncionalGrave.idade > 64 ? "X" : "O"}</td>
                                </tr>
                                <tr className="bg-gray-200">
                                    <td className="border border-1 py-1">IMC &gt;= 29</td>
                                    <td className="border border-1 py-1"> {data.criteriosLimitacaoFuncionalGrave.imc} </td>
                                    <td className="border border-1 py-1">{data.criteriosLimitacaoFuncionalGrave.imc >= 29 ? "X" : "O"}</td>
                                </tr>

                                <tr className="bg-white">
                                    <td className="border border-1 py-1">Tempo de Sintomas &gt;= 2 anos</td>
                                    <td className="border border-1 py-1"> {data.criteriosLimitacaoFuncionalGrave.tempoSintomasAnos} </td>
                                    <td className="border border-1 py-1">{data.criteriosLimitacaoFuncionalGrave.tempoSintomasAnos >= 2 ? "X" : "O"}</td>
                                </tr>
                                <tr className="bg-gray-200">
                                    <td className="border border-1 py-1">Perda ADM Flexão &gt;= 20 graus</td>
                                    <td className="border border-1 py-1"> {data.criteriosLimitacaoFuncionalGrave.perdaADMFlexaoGraus} </td>
                                    <td className="border border-1 py-1">{data.criteriosLimitacaoFuncionalGrave.perdaADMFlexaoGraus >= 20 ? "X" : "O"}</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="border border-1 py-1">Deficit Quadriceps &gt;= 23.5</td>
                                    <td className="border border-1 py-1"> {data.criteriosLimitacaoFuncionalGrave.deficitQuadriceps} </td>
                                    <td className="border border-1 py-1">{data.criteriosLimitacaoFuncionalGrave.deficitQuadriceps >= 23.5 ? "X" : "O"}</td>
                                </tr>
                                <tr className="bg-gray-200">
                                    <td className="border border-1 py-1">SF36 Dor &lt;= 35</td>
                                    <td className="border border-1 py-1"> {data.criteriosLimitacaoFuncionalGrave.sf36Dor} </td>
                                    <td className="border border-1 py-1">{data.criteriosLimitacaoFuncionalGrave.sf36Dor <= 35 ? "X" : "O"}</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="border border-1 py-1">SF36 Aspectos Físicos &lt;= 25</td>
                                    <td className="border border-1 py-1"> {data.criteriosLimitacaoFuncionalGrave.sf36AspectosFisicos} </td>
                                    <td className="border border-1 py-1">{data.criteriosLimitacaoFuncionalGrave.sf36AspectosFisicos <= 25 ? "X" : "O"}</td>
                                </tr>
                                <tr className="bg-gray-200">
                                    {/*SF36 Capacidade Funcional <= 25*/}
                                    <td className="border border-1 py-1">SF36 Capacidade Funcional &lt;= 25</td>
                                    <td className="border border-1 py-1"> {data.criteriosLimitacaoFuncionalGrave.sf36CapacidadeFuncional} </td>
                                    <td className="border border-1 py-1">{data.criteriosLimitacaoFuncionalGrave.sf36CapacidadeFuncional <= 25 ? "X" : "O"}</td>

                                </tr>
                                <tr className="bg-white">
                                    {/*womac <= 50*/}
                                    <td className="border border-1 py-1">Womac &lt;= 50</td>
                                    <td className="border border-1 py-1"> {data.criteriosLimitacaoFuncionalGrave.womac} </td>
                                    <td className="border border-1 py-1">{data.criteriosLimitacaoFuncionalGrave.womac <= 50 ? "X" : "O"}</td>
                                </tr>
                                <tr className="bg-gray-200">
                                    {/*Caminhada 6 min % >= 26*/}
                                    <td className="border border-1 py-1">Caminhada 6 min % &gt;= 26</td>
                                    <td className="border border-1 py-1"> {data.criteriosLimitacaoFuncionalGrave.caminhada6MinPorcentagem} </td>
                                    <td className="border border-1 py-1">{data.criteriosLimitacaoFuncionalGrave.caminhada6MinPorcentagem >= 26 ? "X" : "O"}</td>
                                </tr>




                            </tbody>
                        </table>
                    </div>
                    <Observacoes />


                </div>





            </div>
        </div>
        </div>

    )

}


export function RelatorioMenisco() {
    const location = useLocation()
    const hasPrinted = useRef(false)
    const data = location.state?.data
    useEffect(() => {
       if (!hasPrinted.current) {
       window.print()
       hasPrinted.current = true
       }
    }, [])

    return (

        <div className="text-center px-5 py-5">
            <div className="flex justify-right ml-10">
                <img src="/igor_caudilho.png" alt="logo" className="w-24" />
            </div>
            <h1 className="text-md font-bold">AVALIAÇÃO FUNCIONAL DO JOELHO (STATUS DE LESÃO NO MENISCO) </h1>
            <div className="px-5 pt-3">
                <DadosPessoais dadosPessoais={data.dadosPessoais} />
                <EscalaVisualAnalogicaDor escalaAnalogicaDor={data.escalaAnalogicaDor} />
                <AmplitudeMovimentoJoelho amplitudeMovimentoJoelho={data.amplitudeMovimentoJoelho} />
                <div className="flex flex-row justify-between">
                    <div className="w-1/3 mr-1">
                        <PerimetroCoxa perimetroCoxa={data.perimetroCoxa} />
                    </div>
                    <div className="w-1/3">
                        <DinamometroManual dinamometroManual={data.dinamometroManual} />
                    </div>
                    <div className="w-1/3 ml-1">
                        <RelacaoFlexoresExtensores relacaoFlexoresExtensores={data.relacaoFlexoresExtensores} />
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="w-1/3 mr-1">
                        <GroupParameters title={"Questionários"}>
                            <PontuacaoQuestionario questionario={"Lysholm"} pontuacao={data.lysholm.soma} />
                        </GroupParameters>
                    </div>
                    <div className="w-1/3">
                        <GroupParameters title={"Teste de Mobilidade do Tornoselo"}>
                            <PontuacaoQuestionario questionario={"Direito"} pontuacao={data.testeMobilidadeTornozelo.testeJoelhoDireito} />
                            <PontuacaoQuestionario questionario={"Esquerdo"} pontuacao={data.testeMobilidadeTornozelo.testeJoelhoEsquerdo} />
                        </GroupParameters>
                    </div>
                    <div className="w-1/3 ml-1">
                        <GroupParameters title={"Step Down"}>
                            <PontuacaoQuestionario questionario={"Direito"} pontuacao={data.stepDown.stepDownDireito ? "Alterado" : "Normal"} />
                            <PontuacaoQuestionario questionario={"Esquerdo"} pontuacao={data.stepDown.stepDownEsquerdo ? "Alterado" : "Normal"} />
                        </GroupParameters>
                    </div>


                </div>

                <Observacoes />


            </div>

        </div>

    )

}