import {View, StyleSheet} from '@react-pdf/renderer';
import FieldWFull from './FieldWFull';





const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 1,
        
        gap: 2,
    },
   




});

    




const FieldsRow = ({fields}) => (
    <View style={styles.row}>
        {fields.map((field, index) => (
            <FieldWFull key={index} label={field.label} value={field.value} />
        ))}

    </View>
);


export default FieldsRow;