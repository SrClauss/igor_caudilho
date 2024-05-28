import { useState, useRef, useEffect } from 'react'
import { Carousel, Card } from 'antd'
import  {useMediaQuery} from 'react-responsive'
import '../index.css'
import * as tw from './tailwind'



export default function AmplitudeMovimentoJoelho({ onDataChange }) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (

        <Card>
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-600 pb-3 text-center"> 
                Amplitude de Movimento do Joelho</h2>
            <div>
                {isTabletOrMobile ? <AmplitudeMovimentoJoelhoCarousel onDataChange={onDataChange} /> : <AmplitudeMovimentoJoelhoTable onDataChange={onDataChange} />}
            </div>
        </Card>
    )
}


export function AmplitudeMovimentoJoelhoCarousel({ onDataChange }) {
    const [data, setData] = useState({

        flexaoJoelhoDireito: '',
        flexaoJoelhoEsquerdo: '',
        extensaoJoelhoDireito: '',
        extensaoJoelhoEsquerdo: '',
    })

    const carouselRef = useRef()

    useEffect(() => {
        onDataChange(data)
        console.log(data)

    }, [data])


    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
 
    }

    return (
       
            <Carousel dots={false} arrows={false}  ref={carouselRef } afterChange={(current) => {
                if (current === 1) {

                    const element = document.getElementById('extensaoJoelhoDireito')
                    element.focus()
                    element.select()

                }
                else {

                    const elemento = document.getElementById('flexaoJoelhoDireito')
                    elemento.focus()
                    elemento.select()

                }
            }}>
                <div>
                    <div className={tw.headerCarousel}>
                        Flexão
                    </div>
                    <div className={tw.grayContent}>
                        <div className={tw.tableSideValue}>Joelho Direito</div>
                        <div className={tw.colTransparent}>
                            <input
                                id='flexaoJoelhoDireito'
                                className={tw.inputTransparent}
                                type="number"
                                name="flexaoJoelhoDireito"
                                value={data.flexaoJoelhoDireito}
                                onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='border-b border-b-1 border-cyan-800 grid grid-cols-2 w-full bg-white'>
                        <div className={tw.tableSideValue}>Joelho Esquerdo</div>
                        <div className={tw.colTransparent}>
                            <input
                                id='flexaoJoelhoEsquerdo'
                                className={tw.inputTransparent}
                                type="number"
                                name="flexaoJoelhoEsquerdo"
                                value={data.flexaoJoelhoEsquerdo}
                                onKeyDown={(e) => {
                                    if (e.key === 'Tab') {
                                        e.preventDefault()
                                        carouselRef.current.next()
                                    }
                                }}
                                onChange={handleChange}/>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={tw.headerCarousel}>
                        Extensão
                    </div>

                    <div className={tw.grayContent}>
                        <div className={tw.tableSideValue}>Joelho Direito</div>
                        <div className={tw.colTransparent}>
                            <input


                                id='extensaoJoelhoDireito'
                                className={tw.inputTransparent}
                                type="number" name="extensaoJoelhoDireito"
                                value={data.extensaoJoelhoDireito}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className='border-b border-b-1 border-cyan-800 grid grid-cols-2 w-full bg-white'>
                        <div className={tw.tableSideValue}>Joelho Esquerdo</div>
                        <div className={tw.colTransparent}>
                            <input
                                className={tw.inputTransparent}
                                type="number"
                                name="extensaoJoelhoEsquerdo"
                                value={data.extensaoJoelhoEsquerdo}
                                onChange={handleChange}
                                onKeyDown={
                                    (e) => {
                                        if (e.key === 'Tab') {
                                            e.preventDefault()
                                            carouselRef.current.prev()
                                        }
                                    }

                                } />
                        </div>
                    </div>



                </div>
            </Carousel>

    )




}





function AmplitudeMovimentoJoelhoTable({ onDataChange }) {


    const [data, setData] = useState({

        flexaoJoelhoDireito: '',
        flexaoJoelhoEsquerdo: '',
        extensaoJoelhoDireito: '',
        extensaoJoelhoEsquerdo: '',
    })
    useEffect(() => {
        onDataChange(data)
    }, [data])
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
       
    }

    return (
        <>
            <div className='grid grid-cols-3 text-lg font-bold p-3 border-t border-b border-t-1 border-b-1 border-cyan-800'>
                <div className='row text-center text-cyan-800 font-bold'></div>
                <div className='row text-center text-cyan-800 font-bold'>Flexão</div>
                <div className='row text-center text-cyan-800 font-bold'>Extensão</div>
            </div>
            <div className='grid grid-cols-3 bg-slate-300'>
                <div className='row py-3 text-lg text-cyan-800 font-bold'>Joelho Direito</div>
                <div className='row text-center'>
                    <input
                        className={tw.inputTransparent}
                        type="number"
                        name="flexaoJoelhoDireito"
                        value={data.flexaoJoelhoDireito}
                        onChange={handleChange} />
                </div>
                <div className='row text-center'>
                    <input
                        className={tw.inputTransparent}
                        type="number"
                        name="extensaoJoelhoDireito"
                        value={data.extensaoJoelhoDireito}
                        onChange={handleChange} />
                </div>
            </div>
            <div className='grid grid-cols-3 '>
                <div className='row py-3 text-lg text-cyan-800 font-bold'>Joelho Esquerdo</div>
                <div className='row text-center'>
                    <input
                        className={tw.inputTransparent}
                        type="number"
                        name="flexaoJoelhoEsquerdo"
                        value={data.flexaoJoelhoEsquerdo}
                        onChange={handleChange} />
                </div>
                <div className='row text-center'>
                    <input
                        className={tw.inputTransparent}
                        type="number"
                        name="extensaoJoelhoEsquerdo"
                        value={data.extensaoJoelhoEsquerdo}
                        onChange={handleChange} />
                </div>
            </div>
        </>
    )

}


/*
{
    "pontuacaoLysholm": "20",
    "pontuacaoKujala": "20",
    "torqueExtensorMedioDireito": "25",
    "torqueExtensorMedioEsquerdo": "20",
    "torqueFlexorMedioDireito": "20",
    "torqueFlexorMedioEsquerdo": "20",
    "torqueHipPositionDireito": "12",
    "torqueHipPositionEsquerdo": "30",
    "deficitExtensor": 5,
    "deficitFlexor": 0,
    "deficitHipPosition": 18,
    "nome": "Clausemberg Rodrigues de Oliveira",
    "idade": "40",
    "altura": "25",
    "peso": "30",
    "sexo": "Feminino",
    "lados": [
        "Braço Esquerdo"
    ],
    "membro": "esquerdo",
    "data": "2020-05-20T03:00:00.000Z",
    "hora": "2024-05-27T23:04:00.000Z",
    "queixa": "Qauariasdfjaçlk",
    "hd": "125582",
    "direito": true,
    "esquerdo": false,
    "menorDireito": 4,
    "menorEsquerdo": 6,
    "maiorDireito": 5,
    "maiorEsquerdo": 5,
    "flexaoJoelhoDireito": "20",
    "flexaoJoelhoEsquerdo": "40",
    "extensaoJoelhoDireito": "30",
    "extensaoJoelhoEsquerdo": "40",
    "coxaDireita6cm": 20,
    "coxaEsquerda6cm": 30,
    "coxaDireita15cm": 30,
    "coxaEsquerda15cm": 30,
    "diferencaCoxa6cm": 10,
    "diferencaCoxa15cm": 0,
    "flexores": "20",
    "extensores": "20"
}

*/