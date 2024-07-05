

import FieldsRow from "./base-components/FieldsRow";
import FieldTextArea from "./base-components/FieldTextArea";
import { View } from "@react-pdf/renderer";





export default function DadosPessoaisPDF({ dadosPessoais}) {
    return(

        <View>
            <FieldsRow fields={[{ label: 'Nome', value: dadosPessoais.nome }, { label: 'CPF', value: dadosPessoais.cpf }]} />  
            <FieldsRow fields={[
                { label: 'Idade', value: dadosPessoais.idade },
                { label: 'Altura', value: dadosPessoais.altura },
                { label: 'Peso', value: dadosPessoais.peso },
                { label: 'Sexo', value: dadosPessoais.sexo },
            ]} />

            <FieldsRow fields={[
                { label: 'Lados', value: dadosPessoais.lados.join(', ') },
                { label: 'Membro', value: dadosPessoais.membro },
            ]} />
            <FieldsRow fields={[
                { label: 'Data', value: new Date(dadosPessoais.data).toLocaleDateString() },
                { label: 'Hora', value: new Date(dadosPessoais.hora).toLocaleTimeString() },
            ]} />
            <FieldTextArea label="Queixa" value={dadosPessoais.queixa} />
        </View>

        
    )

}