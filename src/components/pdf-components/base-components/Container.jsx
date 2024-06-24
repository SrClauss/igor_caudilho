import { View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import './register';

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Roboto',
        border: '1px solid #e2e8f0', // Borda cinza
        marginTop: 5,
        borderRadius: 3,

        marginVertical: 2,
        padding: 10, // Ajustado para padding único
        position: 'relative', // Permite posicionamento absoluto do título
        width: '100%',
    },
    titleContainer: {
        fontSize: 10,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
        width: '100%',
    },

});




const Container = ({ children, title }) => {
    return (


        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text>{title}</Text>
            </View>

            {children}

        </View>

    )
}


export default Container;