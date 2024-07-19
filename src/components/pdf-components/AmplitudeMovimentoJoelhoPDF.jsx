import RowTablePDF from "./base-components/RowTable";
import Container from "./base-components/Container";

export default function AmplitudeMovimentoJoelhoPDF({amplitudeMovimentoJoelho}) {
    return (

        <Container title="Amplitude de Movimento do Joelho">
            <RowTablePDF items={["", "Extensão", "Flexão"]} isGray isBold/>
            <RowTablePDF items={["Direito", amplitudeMovimentoJoelho?.extensaoJoelhoDireito, amplitudeMovimentoJoelho?.flexaoJoelhoDireito]} />
            <RowTablePDF items={["Esquerdo", amplitudeMovimentoJoelho?.extensaoJoelhoEsquerdo, amplitudeMovimentoJoelho?.flexaoJoelhoEsquerdo]} isGray />

            

            
        </Container>
    )
}