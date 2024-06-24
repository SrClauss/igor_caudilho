import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import './register';

// Criação dos estilos com base no valor booleano
const styles = StyleSheet.create({
  row: (isGray, isBold) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 2,
    fontFamily: 'Roboto',
    fontWeight: isBold ? 'bold' : 'normal',
    fontSize: 10,
    backgroundColor: isGray ? '#E2E8F0' : 'white', // bg-gray-200 equivalente a #E2E8F0 para true, senão white
  }),
  cell: (flexValue) => ({
    flex: flexValue,
    textAlign: 'center',
  }),
});

const RowTablePDF = ({ items, isGray = false, isBold = false }) => {
  // Calcula o valor de flex com base no número de itens
  const flexValue = 1 / items.length;

  return (
    <View style={styles.row(isGray, isBold)}>
      {items.map((item, index) => (
        // Aplica o valor de flex calculado ao estilo da célula
        <Text key={index} style={styles.cell(flexValue)}>{item}</Text>
      ))}
    </View>
  );
};

export default RowTablePDF;