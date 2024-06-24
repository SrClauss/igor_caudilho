import { View, Text, StyleSheet } from '@react-pdf/renderer';
import './register'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',  
        gap: 2,
        marginBottom: 2,
    },

    left: {
        width: '50%',
        fontFamily: 'Roboto',
        fontSize: 10,
        fontWeight: 'bold',
        paddingHorizontal:4,
        paddingVertical:2,

    },
    right: {
        width: '50%',
        fontFamily: 'Roboto',
        fontSize: 10,
        backgroundColor: '#E2E8F0',
        paddingHorizontal:4,
        paddingVertical:2,

    },

});
export default function TwoToneFields({ left, right }) {
    return (
        <View style={styles.container}>
            <Text style={styles.left}>{left}</Text>
            <Text style={styles.right}>{right}</Text>
        </View>



    )
}