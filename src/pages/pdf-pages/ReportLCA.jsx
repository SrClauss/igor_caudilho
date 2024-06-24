
import { PDFDownloadLink, Document, Page, Image, View, StyleSheet } from '@react-pdf/renderer';
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
import LachemeterPDF from '../../components/pdf-components/LachmeterPDF';
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
                    <Image style={{width: "30%"}} src="igor_caudilho.png" />
                </View>

                <View>
                    <DadosPessoaisPDF dadosPessoais={data.dadosPessoais} />
                </View>
                <View>
                    <EscalaVisualAnalogicaDorPDF escalaVisualAnalogicaDor={data.escalaAnalogicaDor} />
                </View>
                <View style={styles.threeColumnsContainer}>
                
                    
                        <DinamometroManualPDF dinamometroManual={data.dinamometroManual} />
                    
                        <LachemeterPDF lachmeter={data.lachemeter} />
                    
                </View>
                <View style={styles.threeColumnsContainer}>                   
                    <PerimetroCoxaPDF perimetroCoxa={data.perimetroCoxa} />
                    <RelacaoFlexoresExtensoresPDF relacaoFlexoresExtensores={data.relacaoFlexoresExtensores} />
                    <StepDownPDF stepDown={data.stepDown} />
                </View>

                <View style={styles.threeColumnsContainer}>
                    <Container title="Questionários">
                        <TwoToneFields left="Lysholm" right={data.lysholm.soma} />
                    </Container>
                    <TesteMobilidadeTornozeloPDF testeMobilidadeTornozelo={data.testeMobilidadeTornozelo} />
                </View>

                <FieldTextArea label="Observações" value={data.observacoes} />
            </Page>
        </Document>


    )}

export default function ReportLCA({ data }) {
    return (
        <PDFDownloadLink document={<MyDocument data={data} />} fileName="relatorio.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Carregando...' : 'Baixar PDF')}
        </PDFDownloadLink>
    )
}