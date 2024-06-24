
import Container from "./base-components/Container";
import TwoToneFields from "./base-components/TwoToneFields";
export default function TesteMobilidadeTornozeloPDF({ testeMobilidadeTornozelo }) {
    return (
        <Container title="Teste de Mobilidade do Tornozelo">
            <TwoToneFields left={"Direito"} right={testeMobilidadeTornozelo.testeJoelhoDireito} />
            <TwoToneFields left={"Esquerdo"} right={testeMobilidadeTornozelo.testeJoelhoEsquerdo} />
        </Container>
    )
}
