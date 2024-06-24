import Container from "./base-components/Container";
import RowTablePDF from "./base-components/RowTable";


const relacaoFlexoresExtensores = {
    "direito": 12,
    "esquerdo": 12
}


export default function RelacaoFlexoresExtensoresPDF({relacaoFlexoresExtensores}) {
    return (
        <Container title="Relação Flexores/Extenssores">
            <RowTablePDF items={["", "60%"]} isGray isBold/>
            <RowTablePDF items={["Direito", relacaoFlexoresExtensores.direito]} />
            <RowTablePDF items={["Esquerdo", relacaoFlexoresExtensores.esquerdo]} isGray />
        
        </Container>
    )
}