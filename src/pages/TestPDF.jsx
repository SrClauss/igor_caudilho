import React from 'react';
import { PDFDownloadLink, Document, Page, Image, View, StyleSheet } from '@react-pdf/renderer';
import EscalaVisualAnalogicaDorPDF from '../components/pdf-components/EscalaVisualAnalogicaDorPDF';
import DadosPessoaisPDF from '../components/pdf-components/DadosPessoaisPDF';
import AmplitudeMovimentoJoelhoPDF from '../components/pdf-components/AmplitudeMovimentoJoelhoPDF';
import RowTablePDF from '../components/pdf-components/base-components/RowTable';
import PerimetroCoxaPDF from '../components/pdf-components/PerimetroCoxaPDF';
// Definição de estilos
const styles = StyleSheet.create({
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

// Componente Documento personalizado para o PDF
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.container}>


            <View style={styles.logo}>
                <Image src="igor_caudilho.png" />

            </View>
            <View>
                <DadosPessoaisPDF />
            </View>
            <View>
                <EscalaVisualAnalogicaDorPDF />
            </View>
            <View>

                <AmplitudeMovimentoJoelhoPDF />
            </View>
            <View>

                <PerimetroCoxaPDF />
            </View>

        </Page>
    </Document>
);

// Componente TestPDF
const TestPDF = () => {
    return (
        <div>
            <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf" style={styles.downloadLink}>
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download now!'
                }
            </PDFDownloadLink>
        </div>
    );
};

export default TestPDF;