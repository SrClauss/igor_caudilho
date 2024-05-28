import { Card } from "@mui/material";
import { useState } from "react";
import * as tw from "../tailwind";
import {CheckBox, Cancel} from '@mui/icons-material';

export default function CriteriosLimitacaoFuncionalGraveOsteoartrose({ onDataChange, sexo }) {

    const [data, setData] = useState({})
    const variaveisMasculinas = {
        idade: (x)=> x >=64,
        imc : (x)=> x >= 29,
        tempoSintomasAnos: (x)=> x >= 2,
        perdaADMFlexaoGraus: (x)=> x >= 20,
        AdmExtensaoContratura: (x)=> x >= 4,
        DeficitQuadriceps : (x)=> x >= 23.5,
        Sf36Dor: (x)=> x <= 35,
        Sf36AspectosFisicos: (x)=> x <= 25,
        Sf36CapacidadeFuncional: (x)=> x <= 25,
        Womac: (x)=> x <= 50,
        Caminhada6MinPorcentagem: (x)=> x >= 26,
        EVACaminhada6Min: (x)=> x >= 5
    }
    const variaveisFemininas = {
        idade: (x)=> x >=63,
        imc : (x)=> x >= 28,
        tempoSintomasAnos: (x)=> x >= 3.5,
        perdaADMFlexaoGraus: (x)=> x >= 6,
        AdmExtensaoContratura: (x)=> x >= 6,
        DeficitQuadriceps : (x)=> x >= 17,
        Sf36Dor: (x)=> x <= 50,
        Sf36AspectosFisicos: (x)=> x <= 53,
        Sf36CapacidadeFuncional: (x)=> x <= 40,
        Womac: (x)=> x <= 63,
        Caminhada6MinPorcentagem: (x)=> x >= 30,
        EVACaminhada6Min: (x)=> x >= 4
    }
    const variavel = sexo === 'Feminino' ? variaveisFemininas : variaveisMasculinas
    const labelsMasculinas = {
        idade: "Idade>= 64 anos",
        imc : "IMC >= 29",
        tempoSintomasAnos: "Tempo de sintomas >= 2 anos",
        perdaADMFlexaoGraus: "Perda de ADM flexão >= 20 graus",
        AdmExtensaoContratura: "ADM extensão contratura >= 4 graus",
        DeficitQuadriceps : "Deficit quadriceps >= 23.5",
        Sf36Dor: "SF36 Dor <= 35",
        Sf36AspectosFisicos: "SF36 Aspectos Físicos <= 25",
        Sf36CapacidadeFuncional: "SF36 Capacidade Funcional <= 25",
        Womac: "Womac <= 50",
        Caminhada6MinPorcentagem: "Caminhada 6 min % >= 26",
        EVACaminhada6Min: "EVA Caminhada 6 min >= 5"

    }
    const labelsFemininas = {
        idade: "Idade>= 63 anos",
        imc : "IMC >= 28",
        tempoSintomasAnos: "Tempo de sintomas >= 3.5 anos",
        perdaADMFlexaoGraus: "Perda de ADM flexão >= 6 graus",
        AdmExtensaoContratura: "ADM extensão contratura >= 6 graus",
        DeficitQuadriceps : "Deficit quadriceps >= 17",
        Sf36Dor: "SF36 Dor <= 50",
        Sf36AspectosFisicos: "SF36 Aspectos Físicos <= 53",
        Sf36CapacidadeFuncional: "SF36 Capacidade Funcional <= 40",
        Womac: "Womac <= 63",
        Caminhada6MinPorcentagem: "Caminhada 6 min % >= 30",
        EVACaminhada6Min: "EVA Caminhada 6 min >= 4"

    }
    const labels = sexo === 'Feminino' ? labelsFemininas : labelsMasculinas
 

    const handleDataChange = (key, value) => {
        setData(prevData => ({
            ...prevData,
            [key]: value
        }))
    }
    return (
        <Card>
            <div className={tw.componentTitle}>{"Critérios de Limitação Funcional Grave por Osteoartrose" + ` (${sexo?sexo:"Masculino"})`}</div>
            <div className={tw.threeColumnsHeader}>
                <div className={tw.columnHeader}>Critérios</div>
                <div className={tw.columnHeader}>Paciente</div>
                <div className={tw.columnHeader}>Situacao</div>
            </div>
            <div className={tw.threeColumnsGrayContent}>
                <div className={tw.sideValue}>{labels.idade}</div>
                <input type="number" className={tw.inputTransparent} onChange={(e) => handleDataChange('idade', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.idade(data.idade)?<CheckBox color="inherit" />:<Cancel color="inherit"/>}</div>
            </div>

            <div className={tw.threeColumnsWhiteContent}>
                <div className={tw.sideValue}>{labels.imc}</div>
                <input type="number" className={tw.inputTransparent} onChange={(e) => handleDataChange('imc', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.imc(data.imc)?<CheckBox color="inherit" />:<Cancel color="inherit"/>}</div>
            </div>
            <div className={tw.threeColumnsGrayContent}>
                <div className={tw.sideValue}>{labels.tempoSintomasAnos}</div>
                <input type="number" className={tw.inputTransparent} onChange={(e) => handleDataChange('tempoSintomasAnos', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.tempoSintomasAnos(data.tempoSintomasAnos)?<CheckBox color="inherit" />:<Cancel color="inherit"/>}</div>
            </div>
            <div className={tw.threeColumnsWhiteContent}>
                <div className={tw.sideValue}>{labels.perdaADMFlexaoGraus}</div>
                <input type="number" className={tw.inputTransparent} onChange={(e) => handleDataChange('perdaADMFlexaoGraus', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.perdaADMFlexaoGraus(data.perdaADMFlexaoGraus)?<CheckBox color="inherit" />:<Cancel color="inherit"/>}</div>
            </div>
            <div className={tw.threeColumnsGrayContent}>
                <div className={tw.sideValue}>{labels.AdmExtensaoContratura}</div>
                <input type="number" className={tw.inputTransparent} onChange={(e) => handleDataChange('AdmExtensaoContratura', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.AdmExtensaoContratura(data.AdmExtensaoContratura)?<CheckBox color="inherit" />:<Cancel color="inherit"/>}</div>
            </div>
            <div className={tw.threeColumnsWhiteContent}>
                <div className={tw.sideValue}>{labels.DeficitQuadriceps}</div>
                <input type="number" className={tw.inputTransparent} onChange={(e) => handleDataChange('DeficitQuadriceps', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.DeficitQuadriceps(data.DeficitQuadriceps)?<CheckBox color="inherit" />:<Cancel color="inherit"/>}</div>
            </div>
            <div className={tw.threeColumnsGrayContent}>
                <div className={tw.sideValue}>{labels.Sf36Dor}</div>
                <input type="number" className={tw.inputTransparent} onChange={(e) => handleDataChange('Sf36Dor', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.Sf36Dor(data.Sf36Dor)?<CheckBox color="inherit" />:<Cancel color="inherit"/>}</div>
            </div>
            <div className={tw.threeColumnsWhiteContent}>
                <div className={tw.sideValue}>{labels.Sf36AspectosFisicos}</div>
                <input type="number" className={tw.inputTransparent} onChange={(e) => handleDataChange('Sf36AspectosFisicos', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.Sf36AspectosFisicos(data.Sf36AspectosFisicos)?<CheckBox color="inherit" />:<Cancel color="inherit"/>}</div>
            </div>
            <div className={tw.threeColumnsGrayContent}>
                <div className={tw.sideValue}>{labels.Sf36CapacidadeFuncional}</div>
                <input type="number" className={tw.inputTransparent} onChange={(e) => handleDataChange('Sf36CapacidadeFuncional', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.Sf36CapacidadeFuncional(data.Sf36CapacidadeFuncional)?<CheckBox color="inherit" />:<Cancel color="inherit"/>}</div>
            </div>
            <div className={tw.threeColumnsWhiteContent}>
                <div className={tw.sideValue}>{labels.Womac}</div>
                <input type="number" className={tw.inputTransparent} onChange={(e) => handleDataChange('Womac', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.Womac(data.Womac)?<CheckBox color="inherit" />:<Cancel color="inherit"/>}</div>
            </div>
            <div className={tw.threeColumnsGrayContent}>
                <div className={tw.sideValue}>{labels.Caminhada6MinPorcentagem}</div>
                <input type="number" className={tw.inputTransparent} onChange={(e) => handleDataChange('Caminhada6MinPorcentagem', e.target.value)} />
                <div className={tw.inputTransparent}>{variavel.Caminhada6MinPorcentagem(data.Caminhada6MinPorcentagem)?<CheckBox color="inherit" />:<Cancel color="inherit"/>}</div>
            </div>

            

        </Card>
    )




}