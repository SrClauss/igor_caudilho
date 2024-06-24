import FieldsRow from "./base-components/FieldsRow";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import './base-components/register'

const styles = StyleSheet.create({
    container:{

        border: '1px solid #e2e8f0',
        borderRadius: 5,
        marginVertical: 2,
        padding: 10,	
    },
    title: {
        fontFamily: 'Roboto',
        textAlign: 'center',
    
        fontSize: 10,
        fontWeight: 'bold',
        padding: 5,
        marginTop: 2,
    },
});

export default function Sf36PDF({ sf36 }) {
    return (
        <View style={styles.container}>
            <View style={styles.title}><Text>SF36</Text></View>
            <FieldsRow fields={[
                { label: 'Aspectos Sociais', value: sf36.dominions.aspectosSociais },
                { label: 'Capacidade Funcional', value: sf36.dominions.capacidadeFuncional },
                { label: 'Dor', value: sf36.dominions.dor },
            ]} />
            <FieldsRow fields={[
                { label: 'Estado Geral de Saúde', value: sf36.dominions.estadoGeralSaude },
                { label: 'Limitação Aspectos Físicos', value: sf36.dominions.limitacaoAspectosFisicos },
                { label: 'Limitações Aspectos Emocionais', value: sf36.dominions.limitacoesAspectosEmocionais },
            ]} />
            <FieldsRow fields={[
                { label: 'Saúde Mental', value: sf36.dominions.saudeMental },
                { label: 'Vitalidade', value: sf36.dominions.vitalidade },
                { label: 'Total', value: sf36.total },

            ]} />

        </View>
    )
}