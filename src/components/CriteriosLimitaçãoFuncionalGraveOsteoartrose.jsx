import { Card } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import * as tw from "./tailwind";
import { CheckBox, Cancel } from '@mui/icons-material';

export function CriteriosLimitacaoFuncionalGraveOsteoartroseTable({ onDataChange, sexo, initialData = null }) {

    const variaveisMasculinas = {
        idade: (x) => x >= 64,
        imc: (x) => x >= 29,
        tempoSintomasAnos: (x) => x >= 2,
        perdaADMFlexaoGraus: (x) => x >= 20,
        admExtensaoContratura: (x) => x >= 4,
        deficitQuadriceps: (x) => x >= 23.5,
        sf36Dor: (x) => x <= 35,
        sf36AspectosFisicos: (x) => x <= 25,
        sf36CapacidadeFuncional: (x) => x <= 25,
        womac: (x) => x <= 50,
        caminhada6MinPorcentagem: (x) => x >= 26,
        EVACaminhada6Min: (x) => x >= 5
    }
    const variaveisFemininas = {
        idade: (x) => x >= 63,
        imc: (x) => x >= 28,
        tempoSintomasAnos: (x) => x >= 3.5,
        perdaADMFlexaoGraus: (x) => x >= 6,
        admExtensaoContratura: (x) => x >= 6,
        deficitQuadriceps: (x) => x >= 17,
        sf36Dor: (x) => x <= 50,
        sf36AspectosFisicos: (x) => x <= 53,
        sf36CapacidadeFuncional: (x) => x <= 40,
        womac: (x) => x <= 63,
        caminhada6MinPorcentagem: (x) => x >= 30,
        EVACaminhada6Min: (x) => x >= 4
    }
    const variavel = sexo === 'Feminino' ? variaveisFemininas : variaveisMasculinas
    const labelsMasculinas = {
        idade: "Idade>= 64 anos",
        imc: "IMC >= 29",
        tempoSintomasAnos: "Tempo de sintomas >= 2 anos",
        perdaADMFlexaoGraus: "Perda de ADM flexão >= 20 graus",
        admExtensaoContratura: "ADM extensão contratura >= 4 graus",
        deficitQuadriceps: "Deficit quadriceps >= 23.5",
        sf36Dor: "SF36 Dor <= 35",
        sf36AspectosFisicos: "SF36 Aspectos Físicos <= 25",
        sf36CapacidadeFuncional: "SF36 Capacidade Funcional <= 25",
        womac: "womac <= 50",
        caminhada6MinPorcentagem: "Caminhada 6 min % >= 26",
        EVACaminhada6Min: "EVA Caminhada 6 min >= 5"
    
    }
    const labelsFemininas = {
        idade: "Idade>= 63 anos",
        imc: "IMC >= 28",
        tempoSintomasAnos: "Tempo de sintomas >= 3.5 anos",
        perdaADMFlexaoGraus: "Perda de ADM flexão >= 6 graus",
        admExtensaoContratura: "ADM extensão contratura >= 6 graus",
        deficitQuadriceps: "Deficit quadriceps >= 17",
        sf36Dor: "SF36 Dor <= 50",
        sf36AspectosFisicos: "SF36 Aspectos Físicos <= 53",
        sf36CapacidadeFuncional: "SF36 Capacidade Funcional <= 40",
        womac: "womac <= 63",
        caminhada6MinPorcentagem: "Caminhada 6 min % >= 30",
        EVACaminhada6Min: "EVA Caminhada 6 min >= 4"
    
    }
    const labels = sexo === 'Feminino' ? labelsFemininas : labelsMasculinas


    const [data, setData] = useState(initialData || {})
    const handleDataChange = (key, value) => {
        setData(prevData => ({
            ...prevData,
            [key]: value
        }))
    }
    useEffect(() => {

        onDataChange({criteriosLimitacaoFuncionalGrave:data})

    }, [data])
    return (
        <Card>
            <div className={tw.componentTitle}>{"Critérios de Limitação Funcional Grave por Osteoartrose" + ` (${sexo ? sexo : "Masculino"})`}</div>
            <div className={tw.threeColumnsHeader}>
                <div className={tw.columnHeader}>Critérios</div>
                <div className={tw.columnHeader}>Paciente</div>
                <div className={tw.columnHeader}>Situacao</div>
            </div>
            <div className={tw.threeColumnsGrayContent}>

                <div className={tw.sideValue}>{labels.idade}</div>
                <input type="number" value={data.idade}  className={tw.inputTransparent} onChange={(e) => handleDataChange('idade', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.idade(data.idade) ? <CheckBox color="inherit" /> : <Cancel color="inherit" />}</div>
            </div>

            <div className={tw.threeColumnsWhiteContent}>
                <div className={tw.sideValue}>{labels.imc}</div>
                <input type="number" value={data.imc}  className={tw.inputTransparent} onChange={(e) => handleDataChange('imc', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.imc(data.imc) ? <CheckBox color="inherit" /> : <Cancel color="inherit" />}</div>
            </div>
            <div className={tw.threeColumnsGrayContent}>
                <div className={tw.sideValue}>{labels.tempoSintomasAnos}</div>
                <input type="number" value={data.tempoSintomasAnos}  className={tw.inputTransparent} onChange={(e) => handleDataChange('tempoSintomasAnos', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.tempoSintomasAnos(data.tempoSintomasAnos) ? <CheckBox color="inherit" /> : <Cancel color="inherit" />}</div>
            </div>
            <div className={tw.threeColumnsWhiteContent}>
                <div className={tw.sideValue}>{labels.perdaADMFlexaoGraus}</div>
                <input type="number" value={data.perdaADMFlexaoGraus} className={tw.inputTransparent} onChange={(e) => handleDataChange('perdaADMFlexaoGraus', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.perdaADMFlexaoGraus(data.perdaADMFlexaoGraus) ? <CheckBox color="inherit" /> : <Cancel color="inherit" />}</div>
            </div>
            <div className={tw.threeColumnsGrayContent}>
                <div className={tw.sideValue}>{labels.admExtensaoContratura}</div>
                <input type="number" value={data.admExtensaoContratura} className={tw.inputTransparent} onChange={(e) => handleDataChange('admExtensaoContratura', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.admExtensaoContratura(data.admExtensaoContratura) ? <CheckBox color="inherit" /> : <Cancel color="inherit" />}</div>
            </div>
            <div className={tw.threeColumnsWhiteContent}>
                <div className={tw.sideValue}>{labels.deficitQuadriceps}</div>
                <input type="number" value={data.deficitQuadriceps} className={tw.inputTransparent} onChange={(e) => handleDataChange('deficitQuadriceps', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.deficitQuadriceps(data.deficitQuadriceps) ? <CheckBox color="inherit" /> : <Cancel color="inherit" />}</div>
            </div>
            <div className={tw.threeColumnsGrayContent}>
                <div className={tw.sideValue}>{labels.sf36Dor}</div>
                <input type="number" value={data.sf36Dor} className={tw.inputTransparent} onChange={(e) => handleDataChange('sf36Dor', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.sf36Dor(data.sf36Dor) ? <CheckBox color="inherit" /> : <Cancel color="inherit" />}</div>
            </div>
            <div className={tw.threeColumnsWhiteContent}>
                <div className={tw.sideValue}>{labels.sf36AspectosFisicos}</div>
                <input type="number" value={data.sf36AspectosFisicos} className={tw.inputTransparent} onChange={(e) => handleDataChange('sf36AspectosFisicos', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.sf36AspectosFisicos(data.sf36AspectosFisicos) ? <CheckBox color="inherit" /> : <Cancel color="inherit" />}</div>
            </div>
            <div className={tw.threeColumnsGrayContent}>
                <div className={tw.sideValue}>{labels.sf36CapacidadeFuncional}</div>
                <input type="number" value={data.sf36CapacidadeFuncional} className={tw.inputTransparent} onChange={(e) => handleDataChange('sf36CapacidadeFuncional', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.sf36CapacidadeFuncional(data.sf36CapacidadeFuncional) ? <CheckBox color="inherit" /> : <Cancel color="inherit" />}</div>
            </div>
            <div className={tw.threeColumnsWhiteContent}>
                <div className={tw.sideValue}>{labels.womac}</div>
                <input type="number" value={data.womac} className={tw.inputTransparent} onChange={(e) => handleDataChange('womac', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.womac(data.womac) ? <CheckBox color="inherit" /> : <Cancel color="inherit" />}</div>
            </div>
            <div className={tw.threeColumnsGrayContent}>
                <div className={tw.sideValue}>{labels.caminhada6MinPorcentagem}</div>
                <input type="number" value={data.caminhada6MinPorcentagem} className={tw.inputTransparent} onChange={(e) => handleDataChange('caminhada6MinPorcentagem', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.caminhada6MinPorcentagem(data.caminhada6MinPorcentagem) ? <CheckBox color="inherit" /> : <Cancel color="inherit" />}</div>
            </div>



        </Card>
    )




}