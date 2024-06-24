import { Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import './register';


// Atualizar estilos para usar Roboto
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e2e8f0',
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal:5,
    marginBottom: 2,
    width: '100%',  
  },
  label: {
    fontFamily: 'Roboto',
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {
    fontFamily: 'Roboto',
    fontSize: 10,
  },
});

// Componente atualizado
const FieldWFull = ({ label, value }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label +': ' }</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default FieldWFull;