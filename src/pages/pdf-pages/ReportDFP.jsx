
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

import FieldTextArea from "../../components/pdf-components/base-components/FieldTextArea";
import TwoToneFields from "../../components/pdf-components/base-components/TwoToneFields";
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
        width: '30%',
    },
    

});


function MyDocument({data }) {
    


    return (
        <Document>
            <Page size="A4" style={styles.container}>
                <View style={styles.logo}>
                    <Image src="igor_caudilho.png" />
                </View>
                <View>
                    <DadosPessoaisPDF dadosPessoais={data.dadosPessoais} />
                </View>
                <View>
                    <EscalaVisualAnalogicaDorPDF escalaVisualAnalogicaDor={data.escalaAnalogicaDor} />
                </View>
                <View>
                    <DinamometroManualPDF dinamometroManual={data.dinamometroManual} />
                </View>
                <View style={styles.threeColumnsContainer}>
                    <AmplitudeMovimentoJoelhoPDF amplitudeMovimentoJoelho={data.amplitudeMovimentoJoelho} />
                    <PerimetroCoxaPDF perimetroCoxa={data.perimetroCoxa} />
                    <RelacaoFlexoresExtensoresPDF relacaoFlexoresExtensores={data.relacaoFlexoresExtensores} />
                </View>

                <View style={styles.threeColumnsContainer}>
                    <Container title="Questionários">

                        <TwoToneFields left="Kujala" right={data.kujala.soma} />
                        
                    </Container>
                    <TesteMobilidadeTornozeloPDF testeMobilidadeTornozelo={data.testeMobilidadeTornozelo} />
                    <StepDownPDF stepDown={data.stepDown} />
                </View>
                <FieldTextArea label="Observações" value={data.observacoes} />



            </Page>
        </Document >

    )



}

export default function ReportDFP({data}) {
 
    return (
        <div>
            <PDFDownloadLink document={<MyDocument data={data} />} fileName="report.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Carregando...' : 'Baixar PDF'
                }
            </PDFDownloadLink>
        </div>
    )
}