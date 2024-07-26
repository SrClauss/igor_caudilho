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
                            <TwoToneFields left={"Dor"} right={data.womac?.womac1.soma} />
                            <TwoToneFields left={"Rigidez"} right={data.womac?.womac2.soma} />
                            <TwoToneFields left={"Ativ. Fís."} right={data.womac?.womac3.soma} />
                            <TwoToneFields left={"Soma"} right={data.womac?.soma} />
                        </Container>
                        <Container title="Teste Caminhada">
                            <TwoToneFields left={"Dor"} right={`nível ${data.testeCaminhada?.dorCaminhada}`} />
                            <TwoToneFields left={"Percorrido"} right={data.testeCaminhada?.distanciaPercorrida} />
                            <TwoToneFields left={"Predito"} right={data.testeCaminhada?.distanciaPredita} />
                            <TwoToneFields left={"Deficit"} right={`${data.testeCaminhada?.deficit}%`} />
                        </Container>

                    </View>
                    <Container title={`CRITÉRIOS DE LIMITAÇÃO FUNCIONAL GRAVE POR OSTEOARTROSE`}>

                        <RowTablePDF items={["Critério", "Pontuação", "Resultado"]} isBold />
                        <RowTablePDF items={["Idade >= 64", data.criteriosLimitacaoFuncionalGrave?.idade, (data.criteriosLimitacaoFuncionalGrave?.idade ?? 0) > 64 ? "X" : "O"]} isGray />
                        <RowTablePDF items={["IMC >= 29", data.criteriosLimitacaoFuncionalGrave?.imc, (data.criteriosLimitacaoFuncionalGrave?.imc ?? 0) >= 29 ? "X" : "O"]} />
                        <RowTablePDF items={["Tempo de Sintomas >= 2 anos", data.criteriosLimitacaoFuncionalGrave?.tempoSintomasAnos, (data.criteriosLimitacaoFuncionalGrave?.tempoSintomasAnos ?? 0) >= 2 ? "X" : "O"]} isGray />
                        <RowTablePDF items={["Perda ADM Flexão >= 20 graus", data.criteriosLimitacaoFuncionalGrave?.perdaADMFlexaoGraus, (data.criteriosLimitacaoFuncionalGrave?.perdaADMFlexaoGraus ?? 0) >= 20 ? "X" : "O"]} />
                        <RowTablePDF items={["Deficit Quadriceps >= 23.5", data.criteriosLimitacaoFuncionalGrave?.deficitQuadriceps, (data.criteriosLimitacaoFuncionalGrave?.deficitQuadriceps ?? 0) >= 23.5 ? "X" : "O"]} isGray />
                        <RowTablePDF items={["SF36 Dor <= 35", data.criteriosLimitacaoFuncionalGrave?.sf36Dor, (data.criteriosLimitacaoFuncionalGrave?.sf36Dor ?? 0) <= 35 ? "X" : "O"]} />
                        <RowTablePDF items={["SF36 Aspectos Físicos <= 25", data.criteriosLimitacaoFuncionalGrave?.sf36AspectosFisicos, (data.criteriosLimitacaoFuncionalGrave?.sf36AspectosFisicos ?? 0) <= 25 ? "X" : "O"]} isGray />
                        <RowTablePDF items={["SF36 Capacidade Funcional <= 25", data.criteriosLimitacaoFuncionalGrave?.sf36CapacidadeFuncional, (data.criteriosLimitacaoFuncionalGrave?.sf36CapacidadeFuncional ?? 0) <= 25 ? "X" : "O"]} />
                        <RowTablePDF items={["Womac >= 50", data.criteriosLimitacaoFuncionalGrave?.womac, (data.criteriosLimitacaoFuncionalGrave?.womac ?? 0) >= 50 ? "X" : "O"]} isGray />
                        <RowTablePDF items={["Caminhada 6 min % >= 26", data.criteriosLimitacaoFuncionalGrave?.caminhada6MinPorcentagem, (data.criteriosLimitacaoFuncionalGrave?.caminhada6MinPorcentagem ?? 0) >= 26 ? "X" : "O"]} />
                    </Container>
                    <FieldTextArea label="Observações" value={data.observacoes} />




                </View>
            </Page>
        </Document>
    )
}



export default function ReportOsteoartroseArtroplastia({ data }) {

    return (
        <div>
            <PDFDownloadLink document={<MyDocument data={data} />} fileName={data.dadosPessoais.cpf + data.dadosPessoais.hora + ".pdf"}>
                {({ blob, url, loading, error }) => (loading ? 'Carregando...' : 'Baixar PDF')}
            </PDFDownloadLink>

        </div>
    )
}


