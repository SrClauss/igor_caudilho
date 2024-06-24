import { PDFDownloadLink, Document, Page, Image, View, StyleSheet } from '@react-pdf/renderer';
import AmplitudeMovimentoJoelhoPDF from "../../components/pdf-components/AmplitudeMovimentoJoelhoPDF";
import DadosPessoaisPDF from "../../components/pdf-components/DadosPessoaisPDF";
import EscalaVisualAnalogicaDorPDF from "../../components/pdf-components/EscalaVisualAnalogicaDorPDF";
import PerimetroCoxaPDF from "../../components/pdf-components/PerimetroCoxaPDF";
import DinamometroManualPDF from "../../components/pdf-components/DinamometroManualPDF";
import RelacaoFlexoresExtensoresPDF from "../../components/pdf-components/RelacaFlexoresExtensoresPDF";
import StepDownPDF from "../../components/pdf-components/StepDownPDF";
import TesteMobilidadeTornozeloPDF from "../../components/pdf-components/TesteMobilidadeTornozeloPDF";
import Container from "../../components/pdf-components/base-components/Container";
import RowTablePDF from "../../components/pdf-components/base-components/RowTable";
import FieldTextArea from "../../components/pdf-components/base-components/FieldTextArea";
import TwoToneFields from "../../components/pdf-components/base-components/TwoToneFields";
import Sf36PDF from '../../components/pdf-components/Sf36PDF';
import { Dangerous } from '@mui/icons-material';
import { CheckCircle } from '@mui/icons-material';
const styles = StyleSheet.create({
    threeColumnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        border: '1px solid #e2e8f0',
        gap: 2,
    },
    container: {

        padding: 10,
    },
    text: {
        color: 'black',
        margin: 12,
    },
    downloadLink: {
        display: 'inline-block',
        padding: '10px 15px',
        color: 'white',
        backgroundColor: 'blue',
        textDecoration: 'none',
        borderRadius: 5,
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: '100%',
    },


});




function MyDocument({ data }) {



    return (
        <Document>
            <Page size="A4" style={styles.container}>
                <View style={styles.logo}>
                    <Image style={{ width: "30%" }} src="igor_caudilho.png" />
                </View>
                <View>
                    <DadosPessoaisPDF dadosPessoais={data.dadosPessoais} />
                </View>
                <View>
                    <EscalaVisualAnalogicaDorPDF escalaVisualAnalogicaDor={data.escalaAnalogicaDor} />
                </View>
                <DinamometroManualPDF dinamometroManual={data.dinamometroManual} />
                <Sf36PDF sf36={data.sf36} />
                <View style={styles.threeColumnsContainer}>
                    <PerimetroCoxaPDF perimetroCoxa={data.perimetroCoxa} />
                    <RelacaoFlexoresExtensoresPDF relacaoFlexoresExtensores={data.relacaoFlexoresExtensores} />
                    <AmplitudeMovimentoJoelhoPDF amplitudeMovimentoJoelho={data.amplitudeMovimentoJoelho} />
                </View>

            </Page>
            <Page size="A4" style={styles.container}>
                <View style={styles.logo}>

                    <Image style={{ width: "30%" }} src="igor_caudilho.png" />
                </View>
                <View>
                    <View style={styles.threeColumnsContainer}>

                        <Container title="Womac">
                            <TwoToneFields left={"Dor"} right={data.womac.womac1.soma} />
                            <TwoToneFields left={"Rigidez"} right={data.womac.womac2.soma} />
                            <TwoToneFields left={"Ativ. Fís."} right={data.womac.womac3.soma} />
                            <TwoToneFields left={"Soma"} right={data.womac.soma} />
                        </Container>
                        <Container title="Teste Caminhada">
                            <TwoToneFields left={"Dor"} right={`nível ${data.testeCaminhada.dorCaminhada}`} />
                            <TwoToneFields left={"Percorrido"} right={data.testeCaminhada.distanciaPercorrida} />
                            <TwoToneFields left={"Predito"} right={data.testeCaminhada.distanciaPredita} />
                            <TwoToneFields left={"Deficit"} right={`${data.testeCaminhada.deficit}%`} />
                        </Container>

                    </View>
                    <Container title={`CRITÉRIOS DE LIMITAÇÃO FUNCIONAL GRAVE POR OSTEOARTROSE`}>

                        <RowTablePDF items={["Critério", "Pontuação", "Resultado"]} isBold />
                        <RowTablePDF items={["Idade >= 64", data.criteriosLimitacaoFuncionalGrave.idade, data.criteriosLimitacaoFuncionalGrave.idade > 64 ? "X" : "O"]} isGray />
                        <RowTablePDF items={["IMC >= 29", data.criteriosLimitacaoFuncionalGrave.imc, data.criteriosLimitacaoFuncionalGrave.imc >= 29 ? "X" : "O"]} />
                        <RowTablePDF items={["Tempo de Sintomas >= 2 anos", data.criteriosLimitacaoFuncionalGrave.tempoSintomasAnos, data.criteriosLimitacaoFuncionalGrave.tempoSintomasAnos >= 2 ? "X" : "O"]} isGray />
                        <RowTablePDF items={["Perda ADM Flexão >= 20 graus", data.criteriosLimitacaoFuncionalGrave.perdaADMFlexaoGraus, data.criteriosLimitacaoFuncionalGrave.perdaADMFlexaoGraus >= 20 ? "X" : "O"]} />
                        <RowTablePDF items={["Deficit Quadriceps >= 23.5", data.criteriosLimitacaoFuncionalGrave.deficitQuadriceps, data.criteriosLimitacaoFuncionalGrave.deficitQuadriceps >= 23.5 ? "X" : "O"]} isGray />
                        <RowTablePDF items={["SF36 Dor <= 35", data.criteriosLimitacaoFuncionalGrave.sf36Dor, data.criteriosLimitacaoFuncionalGrave.sf36Dor <= 35 ? "X" : "O"]} />
                        <RowTablePDF items={["SF36 Aspectos Físicos <= 25", data.criteriosLimitacaoFuncionalGrave.sf36AspectosFisicos, data.criteriosLimitacaoFuncionalGrave.sf36AspectosFisicos <= 25 ? "X" : "O"]} isGray />
                        <RowTablePDF items={["SF36 Capacidade Funcional <= 25", data.criteriosLimitacaoFuncionalGrave.sf36CapacidadeFuncional, data.criteriosLimitacaoFuncionalGrave.sf36CapacidadeFuncional <= 25 ? "X" : "O"]} />
                        <RowTablePDF items={["Womac <= 50", data.criteriosLimitacaoFuncionalGrave.womac, data.criteriosLimitacaoFuncionalGrave.womac <= 50 ? "X" : "O"]} isGray />
                        <RowTablePDF items={["Caminhada 6 min % >= 26", data.criteriosLimitacaoFuncionalGrave.caminhada6MinPorcentagem, data.criteriosLimitacaoFuncionalGrave.caminhada6MinPorcentagem >= 26 ? "X" : "O"]} />


                    </Container>
                    <FieldTextArea label="Observações" />




                </View>
            </Page>
        </Document>
    )
}



export default function ReportOsteoartroseArtroplastia({ data }) {

    return (
        <div>
            <PDFDownloadLink document={<MyDocument data={data} />} fileName="relatorio.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Carregando...' : 'Baixar PDF')}
            </PDFDownloadLink>

        </div>
    )
}



{/*

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

    

                <div className="flex flex-col justify-between border border-1 mt-1 rounded-sm p-1">
                 

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
                               
                                    <td className="border border-1 py-1">SF36 Capacidade Funcional &lt;= 25</td>
                                    <td className="border border-1 py-1"> {data.criteriosLimitacaoFuncionalGrave.sf36CapacidadeFuncional} </td>
                                    <td className="border border-1 py-1">{data.criteriosLimitacaoFuncionalGrave.sf36CapacidadeFuncional <= 25 ? "X" : "O"}</td>

                                </tr>
                                <tr className="bg-white">
                           
                                    <td className="border border-1 py-1">Womac &lt;= 50</td>
                                    <td className="border border-1 py-1"> {data.criteriosLimitacaoFuncionalGrave.womac} </td>
                                    <td className="border border-1 py-1">{data.criteriosLimitacaoFuncionalGrave.womac <= 50 ? "X" : "O"}</td>
                                </tr>
                                <tr className="bg-gray-200">
                        
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
    */}