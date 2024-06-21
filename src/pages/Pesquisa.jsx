import { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, get, child, query, orderByChild, equalTo, startAt, endAt } from "firebase/database";
import { Card, Divider, Tag } from "antd";
import { useNavigate } from 'react-router-dom'
import Search from "antd/es/input/Search";
import Layout from "../Layout";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Pesquisa() {

    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [data, setData] = useState([])
    const [searchDisabled, setSearchDisabled] = useState(false)


    const navigateToPage = (data) => {

        console.log(data)
        navigate(`/${data.colecao}`, { state: { initialData: data.dados } })

    }
    useEffect(() => {
        setData([])

    }, [nome])

    const pesquisaPorNome = () => {
        setSearchDisabled(true)


        setData([])
        const colecoes = ['dfp', 'menisco', 'lca', 'osteoartrose_artroplastia']
        const colecoesLabel = {

            'dfp': 'DFP',
            'menisco': 'Menisco',
            'lca': 'LCA',
            'osteoartrose_artroplastia': 'Osteoartrose/Artroplastia'
        }
        colecoes.forEach(async (colecao) => {

            const queryNome = query(ref(db, colecao), orderByChild('nome'), startAt(nome), endAt(nome + '\uf8ff'))
            const snapshot = await get(queryNome)


            if (snapshot.exists()) {


                Object.values(snapshot.val()).forEach((value) => {
                    console.log(value)
                    const newData = { colecao: colecao, colecaoLabel: colecoesLabel[colecao], dados: value }
                    setData((oldData) => [...oldData, newData])





                })


            }
        })

        setSearchDisabled(false)

    }

    return (
        <Layout>

            <div className="flex flex-row">

                <div className="w-1/2 mr-10">

                    <Search disabled={searchDisabled} placeholder="digite o nome do paciente" onChange={(e) => setNome(e.target.value)} onSearch={pesquisaPorNome} enterButton />
                </div>

                <div className="w-1/2">


                    <LocalizationProvider dateAdapter={AdapterDayjs}>

                        <DatePicker


                            className='w-full'
                            label="Data"
                            format='DD/MM/YYYY'



                        />

                    </LocalizationProvider>

                </div>


            </div>


            <div className="flex flex-col">
                <div className="w-full flex flex-col items-center">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className=" my-2 border-2 rounded-md shadow-md w-full flex flex-col items-center">
                                <div className="w-full text-center text-3xl bg-gray-300 py-5 hover:bg-gray-200 cursor-pointer" onClick={(_) => {
                                    navigateToPage(item)
                                }}>{item.dados.dadosPessoais.nome}</div>

                                <div className="items-center py-3">
                                    <Tag className="my-1 mx-3" color="blue">{item.colecaoLabel}</Tag>
                                    <Tag className="my-1 mx-3" color="red">{item.dados.dadosPessoais.idade} anos</Tag>
                                    <Tag className="my-1 mx-3" color="green">{item.dados.dadosPessoais.sexo}</Tag>
                                    <Tag className="my-1 mx-3" color="purple">{item.dados.dadosPessoais.peso} kg</Tag>
                                    <Tag className="my-1 mx-3" color="orange">{item.dados.dadosPessoais.altura} cm</Tag>
                                    <Tag className="my-1 mx-3" color="cyan">{new Date(item.dados.dadosPessoais.data).toLocaleDateString("pt-BR")}</Tag>
                                    <Tag className="my-1 mx-3 cursor-pointer" onClick={

                                        (_) => {

                                            [

                                                navigate(`/relatorio-${item.colecao}`, { state: { data: item.dados } })
                                            ]
                                        }} color="magenta">Relatório</Tag>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>



        </Layout>
    )


}