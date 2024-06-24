import Container from "./base-components/Container";
import RowTablePDF from "./base-components/RowTable";

export default function LachemeterPDF ({lachmeter}) {
    return (
        <Container title="Lachmeter">
           <RowTablePDF items={["", "Máx. Manual", "Medias", "Diferença"]} isGray isBold/>
           <RowTablePDF items={["Direita", lachmeter.maximaManualDireita.join('/'), lachmeter.mediaDireita, lachmeter.diferenca]} />
           <RowTablePDF items={["Esquerda", lachmeter.maximaManualEsquerda.join('/'), lachmeter.mediaEsquerda, lachmeter.diferenca]} isGray />    

        </Container>
    )
}

