import { useState, useEffect, useRef } from 'react'
import { Carousel, Card } from 'antd'
import { useMediaQuery } from 'react-responsive'
import '../index.css'
import * as tw from './tailwind'


export default function PerimetroCoxa({ onDataChange, initialData = null}) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <Card>
            <h2 className="text-xl md:text-3xl font-bold text-cyan-600 pb-3 text-center"> 
                {"Perimetro da Coxa (medida de 6 e 15cm da borda superior da paleta)"}</h2>
            <div>
                {isTabletOrMobile ? <PerimetroCoxaCarousel onDataChange={onDataChange} initialData={initialData} /> : <PerimetroCoxaTable onDataChange={onDataChange} initialData={initialData}/>}
            </div>
        </Card>
    )

}

function PerimetroCoxaCarousel({ onDataChange, initialData = null}) {
    const [data, setData] = useState({
        coxaDireita6cm: '',
        coxaEsquerda6cm: '',
        coxaDireita15cm: '',
        coxaEsquerda15cm: '',
        diferencaCoxa6cm: '',
        diferencaCoxa15cm: ''
    })


    const carouselRef = useRef()
    useEffect(() => {

        const diferencaCoxa6cm = Math.abs(data.coxaDireita6cm - data.coxaEsquerda6cm)
        const diferencaCoxa15cm = Math.abs(data.coxaDireita15cm - data.coxaEsquerda15cm)

        setData({
            ...data,
            diferencaCoxa6cm,
            diferencaCoxa15cm
        })
    }, [data.coxaDireita15cm, data.coxaEsquerda15cm, data.coxaDireita6cm, data.coxaEsquerda6cm])

   

    const handleChange = (e) => {
        const { name, value } = e.target

        setData({
            ...data,
            [name]: parseInt(value)
        })

    }


    return (
        <Carousel dots={false} arrows={false} ref={carouselRef} afterChange={(current) => {
            if (current === 1) {

                const element = document.getElementById('coxaDireita15cm')
                element.focus()
                element.select()

            }
            else {

                const elemento = document.getElementById('coxaDireita6cm')
                elemento.focus()
                elemento.select()

            }
        }}>
            <div>
                <div className={tw.headerCarousel}>
                    6cm acima da patela
                </div>
                <div className={tw.grayContent}>
                    <div className={tw.sideValue}>Coxa Direita</div>
                    <div className={tw.colTransparent}>
                        <input id='coxaDireita6cm'
                        className={tw.inputTransparent} type="number" name="coxaDireita6cm" value={data.coxaDireita6cm} onChange={handleChange} />
                    </div>
                </div>
                <div className={tw.whiteContent}>
                    <div className={tw.sideValue}>Coxa Esquerda</div>
                    <div className={tw.colTransparent}>
                        <input id='coxaEsquerda6cm'
                        className={tw.inputTransparent}
                        type="number" 
                        name="coxaEsquerda6cm" 
                        value={data.coxaEsquerda6cm} 
                        onKeyDown={(e) => {
                            if (e.key === 'Tab') {
                                e.preventDefault()
                                carouselRef.current.next()
                            }
                        }} onChange={handleChange} />
                    </div>
                </div>
                <div className={tw.grayContent}>
                    <div className={tw.sideValue}>Diferença</div>
                    <div className={tw.colTransparent}>
                        <input
                            id='diferencaCoxa6cm'
                            disabled
                            className={tw.inputTransparentBold}
                            type="number"
                            name="diferencaCoxa6cm"
                            value={data.diferencaCoxa6cm} />
                    </div>
                </div>
            </div>
            <div>
                <div className={tw.headerCarousel}>
                    15cm acima da patela
                </div>
                <div className={tw.grayContent}>
                    <div className={tw.sideValue}>Coxa Direita</div>
                    <div className={tw.colTransparent}>
                        <input 
                        id='coxaDireita15cm'
                        className={tw.inputTransparent}
                        type="number"
                        name="coxaDireita15cm"
                        value={data.coxaDireita15cm}
                        onChange={handleChange} />
                    </div>
                </div>
                <div className={tw.whiteContent}>
                    <div className={tw.sideValue}>Coxa Esquerda</div>
                    <div className={tw.colTransparent}>
                        <input id='coxaEsquerda15cm'
                        className={tw.inputTransparent}
                        type="number" name="coxaEsquerda15cm"
                        value={data.coxaEsquerda15cm}
                        onChange={handleChange} onKeyDown={(e) => {
                            if (e.key === 'Tab') {
                                e.preventDefault()
                                carouselRef.current.prev()
                            }
                        }} />
                    </div>
                </div>
                <div className={tw.grayContent}>
                    <div className={tw.sideValue}>Diferença</div>
                    <div className={tw.colTransparent}>
                        <input
                            id='diferencaCoxa15cm'
                            disabled
                            className={tw.inputTransparentBold}
                            type="number"
                            name="diferencaCoxa15cm"
                            value={data.diferencaCoxa15cm} />
                    </div>
                </div>

            </div>
        </Carousel>
    )



}

function PerimetroCoxaTable({ onDataChange }) {
    const [data, setData] = useState({
        coxaDireita6cm: '',
        coxaEsquerda6cm: '',
        coxaDireita15cm: '',
        coxaEsquerda15cm: '',
        diferencaCoxa6cm: '',
        diferencaCoxa15cm: ''
    })
    useEffect(() => {
        const diferencaCoxa6cm =  Math.abs(data.coxaDireita6cm - data.coxaEsquerda6cm)
        const diferencaCoxa15cm = Math.abs(data.coxaDireita15cm - data.coxaEsquerda15cm)
        setData({
            ...data,
            diferencaCoxa6cm,
            diferencaCoxa15cm
        })
    }, [data.coxaDireita15cm, data.coxaEsquerda15cm, data.coxaDireita6cm, data.coxaEsquerda6cm])

    useEffect(() => {
        onDataChange(data)
    }
        , [data])


    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: parseInt(value)
        })
    }

    return (
        <>
            <div className={tw.threeColumnsHeader}>
                <div className={tw.columnHeader}></div>
                <div className={tw.columnHeader}>6cm acima da patela</div>
                <div className={tw.columnHeader}>15cm acima da patela</div>
            </div>

            <div className={tw.threeColumnsGrayContent}>

                <div className={tw.tableSideValue}>Coxa Direita</div>
                <div className={tw.rowTextCenter}>
                    <input
                        className={tw.inputTransparent}
                        type="number"
                        name="coxaDireita6cm"
                        value={data.coxaDireita6cm}
                        onChange={handleChange} />
                </div>

                <div className={tw.rowTextCenter}>
                    <input
                        className={tw.inputTransparent}
                        type="number"
                        name="coxaDireita15cm"
                        value={data.coxaDireita15cm}
                        onChange={handleChange} />

                </div>
            </div>

            <div className={tw.threeColumnsWhiteContent}>
                <div className={tw.tableSideValue}>Coxa Esquerda</div>
                <div className={tw.rowTextCenter}>
                    <input
                        className={tw.inputTransparent}
                        type="number"
                        name="coxaEsquerda6cm"
                        value={data.coxaEsquerda6cm}
                        onChange={handleChange} />
                </div>
                <div className={tw.rowTextCenter}>
                    <input
                        className={tw.inputTransparent}
                        type="number"
                        name="coxaEsquerda15cm"
                        value={data.coxaEsquerda15cm}
                        onChange={handleChange} />
                </div>

            </div>
            <div className={"border-b-1 border-b border-cyan-800 " + tw.threeColumnsGrayContent}>
                <div className={tw.tableSideValue}>Diferença</div>
                <div className={tw.rowTextCenter}>
                    <input
                        disabled
                        className={tw.inputTransparentBold}
                        type="number"
                        name="diferencaCoxa6cm"
                        value={data.diferencaCoxa6cm} />
                </div>
                <div className={tw.rowTextCenter}>
                    <input
                        disabled
                        className={tw.inputTransparentBold}
                        type="number"
                        name="diferencaCoxa15cm"
                        value={data.diferencaCoxa15cm} />
                </div>

            </div>


        </>



    )
}