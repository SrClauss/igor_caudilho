import RowTablePDF from "./base-components/RowTable";
import Container from "./base-components/Container";





export default function PerimetroCoxaPDF({ perimetroCoxa}) {
    return (

        <Container title="Perímetro da Coxa">
            <RowTablePDF items={["", "15 cm", "6 cm"]} isGray isBold/>
            <RowTablePDF items={["Direito", perimetroCoxa?.coxaDireita15cm, perimetroCoxa?.coxaDireita6cm]} />
            <RowTablePDF items={["Esquerdo", perimetroCoxa?.coxaEsquerda15cm, perimetroCoxa?.coxaEsquerda6cm]} isGray />
            <RowTablePDF items={["Diferença", perimetroCoxa?.diferencaCoxa15cm, perimetroCoxa?.diferencaCoxa6cm]} />
         
        </Container>
    )
}