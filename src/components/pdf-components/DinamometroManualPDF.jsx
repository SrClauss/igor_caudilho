import Container from "./base-components/Container";
import RowTable from "./base-components/RowTable";




const dinamometroManual = {
    "deficitExtensor": 32,
    "deficitFlexor": 1,
    "deficitHipPosition": 9,
    "torqueExtensorMedioDireito": 52,
    "torqueExtensorMedioEsquerdo": 20,
    "torqueFlexorMedioDireito": 21,
    "torqueFlexorMedioEsquerdo": 22,
    "torqueHipPositionDireito": 11,
    "torqueHipPositionEsquerdo": 22
}



export default function DinamometroManualPDF({ dinamometroManual}) {
    return (
        <Container title="Dinamômetro Manual (N/m)">
            <RowTable items={["Torque", "Direito", "Esquerdo", "Diferença"]} isGray isBold />
            <RowTable items={["Extensor", dinamometroManual.torqueExtensorMedioDireito, dinamometroManual.torqueExtensorMedioEsquerdo, dinamometroManual.deficitExtensor +"%"]} />
            <RowTable items={["Flexor", dinamometroManual.torqueFlexorMedioDireito, dinamometroManual.torqueFlexorMedioEsquerdo, dinamometroManual.deficitFlexor + "%"]} isGray />

        </Container>
    )
}