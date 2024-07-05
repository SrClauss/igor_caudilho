import { Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import './register';
// Registrar variações da fonte Roboto


// Estilos

// Componente FieldTextArea
function FieldTextArea ({ label, value , minHeight=25}){
  const styles = StyleSheet.create({
      container: {
        marginTop: 10,
        marginBottom: 5,
        position: 'relative', // Necessário para posicionar a label
      },
      label: {
        position: 'absolute', // Posiciona a label de forma absoluta
        top: -5, // Ajuste conforme necessário para a label "flutuar"
        left: 5,
        fontSize: 10,
        backgroundColor: 'white', 
        paddingHorizontal: 2, // Espaçamento interno para a label
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        zIndex: 0, // Para sobrepor o campo de texto
      },
      textArea: {
        fontFamily: 'Roboto',
        fontSize: 10,
        border: '1px solid #e2e8f0', // Borda cinza
        borderRadius: 3,
        minHeight: minHeight, // Altura mínima para o campo de texto
        padding: 10, // Espaçamento interno
        textAlign: 'justify',
        zIndex: 1, // Para ficar acima da label
      },
    });
  

    return(
      
    <View style={styles.container}>
      <View style={styles.textArea}>
        <Text>{value}</Text>
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
    )
  
  }
  
  export default FieldTextArea;



