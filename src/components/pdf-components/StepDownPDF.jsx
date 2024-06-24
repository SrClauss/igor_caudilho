import Container from "./base-components/Container";

import TwoToneFields from "./base-components/TwoToneFields";


export default function StepDownPDF({ stepDown }) {
    return (
        <Container title="Step Down">
          
            <TwoToneFields left={"Direito"} right={stepDown.stepDownDireito?"Alterado":"Normal"} />
            <TwoToneFields left={"Esquerdo"} right={stepDown.stepDownEsquerdo?"Alterado":"Normal"} />
        </Container>
    )
}