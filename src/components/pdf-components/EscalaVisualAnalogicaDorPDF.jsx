import { View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import './base-components/register';
import Container from './base-components/Container'



const styles = StyleSheet.create({
    container: {
        fontFamily: 'Roboto',
        border: '1px solid #e2e8f0', // Borda cinza
        marginTop: 15,
        borderRadius: 3,
        padding: 10, // Ajustado para padding único
        position: 'relative', // Permite posicionamento absoluto do título
    },
    titleContainer: {
        position: 'absolute', // Posicionamento absoluto
        top: -10, // Move para cima, sobrepondo a borda
        left: '50%', // Centraliza horizontalmente
        transform: 'translateX(-50%)', // Ajuste fino para centralização
    },
    titleBackground: {
        backgroundColor: 'white', // Fundo branco para o texto
        paddingLeft: 5, // Padding horizontal para não colar nas bordas do texto
        paddingRight: 5,
    },
    column: {
        flexDirection: 'row', // Views lado a lado
        justifyContent: 'space-between',
        alignItems: 'flex-start', // Alinha itens no topo
        gap: 20,
    },
    row: {
        flexDirection: 'column', // Itens da linha em coluna
        alignItems: 'flex-start', // Alinha itens à esquerda
        marginBottom: 5, // Espaçamento entre linhas
    },
    content: {
        fontFamily: 'Roboto',
        fontSize: 10,

    },
    image: {
        width: 140,
        height: 15,
        paddingHorizontal: 5,
        marginTop: 5,

    },
    center: {
        alignItems: 'center',
        marginVertical: 5,
    },
});





export default function EscalaVisualAnalogicaDorPDF({escalaVisualAnalogicaDor = { dorMaiorDireito: 0, dorMaiorEsquerdo: 0, dorMenorDireito: 0, dorMenorEsquerdo: 0, dorMomentoDireito: 0, dorMomentoEsquerdo: 0} }) {
    return (
        <Container title="Escala Visual Analógica de Dor">
            <View style={styles.content}>
                <View style={styles.column}>
                    <View>
                        <View style={styles.center}>
                            <Text>Pior momento do dia (Direito)</Text>
                            <Image style={styles.image} src={`dor${escalaVisualAnalogicaDor.dorMaiorDireito}.png`} />
                        </View>
                        <View style={styles.center}>
                            <Text>Pior momento do dia (Esquerdo)</Text>
                            <Image style={styles.image} src={`dor${escalaVisualAnalogicaDor.dorMaiorEsquerdo}.png`} />
                        </View>




                    </View>
                    <View style={styles.column}>
                        <View>
                            <View style={styles.center}>
                                <Text>Melhor momendo do dia (Direito)</Text>
                                <Image style={styles.image} src={`dor${escalaVisualAnalogicaDor.dorMenorDireito}.png`} />
                            </View>

                            <View style={styles.center}>
                                <Text>Melhor momendo do dia (Esquerdo)</Text>
                                <Image style={styles.image} src={`dor${escalaVisualAnalogicaDor.dorMenorEsquerdo}.png`} />
                            </View>





                        </View>
                    </View>
                    <View>
                        <View style={styles.center}>
                            <Text>Momento da avaliação (Direito)</Text>
                            <Image style={styles.image} src={`dor${escalaVisualAnalogicaDor.dorMomentoDireito}.png`} />
                        </View>

                        <View style={styles.center}>
                            <Text>Momento da avaliação (Esquerdo)</Text>
                            <Image style={styles.image} src={`dor${escalaVisualAnalogicaDor.dorMomentoEsquerdo}.png`} />
                        </View>


                    </View>

                </View>


            </View>
        </Container >

    )
}

