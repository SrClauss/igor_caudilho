import { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, get, child, query, orderByChild, equalTo, startAt, endAt } from "firebase/database";
import { Switch, Tag } from "antd";
import { useNavigate } from 'react-router-dom'
import Search from "antd/es/input/Search";
import Layout from "../Layout";
import ReportDFP from "./pdf-pages/ReportDFP";
import ReportMenisco from "./pdf-pages/ReportMenisco";
import ReportLCA from "./pdf-pages/ReportLCA";
import ReportOsteoartroseArtroplastia from "./pdf-pages/ReportOrteoartroseArtrosplastia";

export default function Pesquisa() {

    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [data, setData] = useState([])
    const [searchDate, setSearchDate] = useState(false)
    const [searchDisabled, setSearchDisabled] = useState(false)
    const [pesquisaNome, setPesquisaNome] = useState(true)



    const renderCopyLink = (item) => {
        const url = window.location.href.replace("pesquisa", "") + item.colecao + '/' + item.dados.id
        navigator.clipboard.writeText(url)
        alert('Link copiado para a área de transferência')
    }
    const renderReport = (item) => {

        

        switch (item.colecao) {
            case 'dfp':
                return <ReportDFP data={item.dados} />;
            case 'menisco':
                return <ReportMenisco data={item.dados} />;
            case 'lca':
                return <ReportLCA data={item.dados} />;
            case 'osteoartrose_artroplastia':
                return <ReportOsteoartroseArtroplastia data={item.dados} />;

            default:
                return "Error"; // Valor padrão se nenhum case corresponder
        }
    };


    const navigateToPage = (data) => {

   
        navigate(`/${data.colecao}`, { state: { initialData: data.dados } })

    }
    useEffect(() => {
        setData([])

    }, [nome])
    const pesquisaPorData = () => {

    
        setData([])
        const colecoes = ['dfp', 'menisco', 'lca', 'osteoartrose_artroplastia']

        const colecoesLabel = {

            'dfp': 'DFP',
            'menisco': 'Menisco',
            'lca': 'LCA',
            'osteoartrose_artroplastia': 'Osteoartrose/Artroplastia'
        }
        colecoes.forEach(async (colecao) => {
            const queryData = query(ref(db, colecao), orderByChild('data'), startAt(searchDate.slice(0, 9)), endAt(searchDate.slice(0, 10) + '\uf8ff'))
            const snapshot = await get(queryData)

  


            if (snapshot.exists()) {
                
                const keys = []
                Object.keys(snapshot.val()).forEach((key) => {
                    keys.push(key)

                })




                Object.values(snapshot.val()).forEach((value, index) => {
                    value.id =  keys[index]
         
                    const newData = { colecao: colecao, colecaoLabel: colecoesLabel[colecao], dados: value }
                    setData((oldData) => [...oldData, newData])

                })
            }
        })
    }
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

                const keys = []
                Object.keys(snapshot.val()).forEach((key) => {
                    keys.push(key)

                })



                 



                Object.values(snapshot.val()).forEach((value, index) => {

                    value.id = keys[index]
            
                    const newData = { colecao: colecao, colecaoLabel: colecoesLabel[colecao], dados: value }
                    setData((oldData) => [...oldData, newData])





                })


            }
        })

        setSearchDisabled(false)

    }

    return (
        <Layout>


            <div className="m-10">

                <span className={pesquisaNome ? "" : "font-bold"}>Pesquisar por data</span>
                <Switch className="m-10" value={pesquisaNome} onChange={setPesquisaNome} />
                <span className={pesquisaNome ? "font-bold" : ""}>Pesquisa por nome</span>


            </div>

            <div className="flex flex-col">
                {

                    pesquisaNome ?
                        <div className="m-10">

                            <Search disabled={searchDisabled} placeholder="digite o nome do paciente" onChange={(e) => setNome(e.target.value)} onSearch={pesquisaPorNome} enterButton />
                        </div>
                        :



                        <div className="m-10 flex flex-row">
                            <input
                                onChange={(e) => { setSearchDate(new Date(e.target.value).toISOString()) }}
                                type="date"
                                className="w-full border border-gray-200 rounded-md hover:border-gray-500" placeholder="insira a data" />
                            <button
                                onClick={pesquisaPorData}
                                className="bg-blue-500 text-white rounded-md px-3 py-1 mx-1 hover:bg-blue-800">Pesquisar</button>


                        </div>
                }


            </div>


            <div className="flex flex-col">
                <div className="w-full flex flex-col items-center min-h-[720px]">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className=" my-2 border-2 rounded-md shadow-md w-full flex flex-col items-center">
                                <div className="w-full text-center text-3xl bg-gray-300 py-5 hover:bg-gray-200 cursor-pointer" onClick={(_) => {
                                    navigateToPage(item)
                                }}>{item.dados.dadosPessoais.nome}</div>

                                <div className="items-center py-3">
                                    <Tag className="my-1 mx-3 cursor-pointer" color="volcano" onClick={(e)=>renderCopyLink(item)}>Copiar Link</Tag>
                                    <Tag className="my-1 mx-3" color="blue">{item.colecaoLabel}</Tag>
                                    <Tag className="my-1 mx-3" color="red">{item.dados.dadosPessoais.idade} anos</Tag>
                                    <Tag className="my-1 mx-3" color="green">{item.dados.dadosPessoais.sexo}</Tag>
                                    <Tag className="my-1 mx-3" color="purple">{item.dados.dadosPessoais.peso} kg</Tag>
                                    <Tag className="my-1 mx-3" color="orange">{item.dados.dadosPessoais.altura} cm</Tag>
                                    <Tag className="my-1 mx-3" color="cyan">{new Date(item.dados.dadosPessoais.data).toLocaleDateString("pt-BR")}</Tag>
                                    <Tag className="my-1 mx-3 cursor-pointer" color="magenta">{renderReport(item)}</Tag>

                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>



        </Layout>
    )


}