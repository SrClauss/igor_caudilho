import Container from "./Container";
import TwoToneFields from "./TwoToneFields";


export default function HopeTestPDF ({hopeTest}) {

 
    return (
        <Container title="Hope Test">
            <TwoToneFields left={"Direito"} right={hopeTest.hopTestDireito + "°"} />
            <TwoToneFields left={"Esquerdo"} right={hopeTest.hopTestEsquerdo + "°"} />
            <TwoToneFields left={"Diferença"} right={hopeTest.diferenca + "%"}/>



        </Container>
    )
}