

import FieldsRow from "./base-components/FieldsRow";
import FieldTextArea from "./base-components/FieldTextArea";
import { View } from "@react-pdf/renderer";

const dadosPessoais = {
    "nome": "Clausemberg Rodrigues de Oliveira",
    "idade": "39",
    "altura": "184",
    "peso": "90",
    "sexo": "Masculino",
    "lados": [
        "Braço Esquerdo"
    ],
    "membro": "direito",
    "data": "2023-06-20T03:00:00.000Z",
    "hora": "2024-06-23T23:04:00.000Z",
    "queixa": "Acontecem certos encontros com pessoas que desconhecemos inteiramente com quem começamos a nos interessar à primeira vista, como que de repente, súbito, antes que articulemos uma palavra.",
    "cpf": "107.004.187-41"
};



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