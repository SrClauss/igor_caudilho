import { useState, useEffect, useRef } from "react";
import ThreeNumberInputs from "./ThreeNumbersInputs";
import { Carousel, Card } from "antd";
import { useMediaQuery } from "react-responsive";
import * as tw from "./tailwind";

export default function Lachemeter({ onDataChange }) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <>
            {isTabletOrMobile ? <LachemeterCarousel onDataChange={onDataChange} /> : <LachemeterTable onDataChange={onDataChange} />}
        </>


    )

}
export function LachemeterCarousel({ onDataChange }) {
    const [data, setData] = useState({
        maximaManualDireita: [0, 0, 0],
        maximaManualEsquerda: [0, 0, 0],
        mediaDireita: 0,
        mediaEsquerda: 0,
        diferenca: 0
    })


    const carouselRef = useRef()
    useEffect(() => {
        const mediaDireita = data.maximaManualDireita.reduce((acc, curr) => acc + curr, 0) / 3
        const mediaEsquerda = data.maximaManualEsquerda.reduce((acc, curr) => acc + curr, 0) / 3
        const diferenca = mediaDireita - mediaEsquerda
        setData({
            ...data,
            mediaDireita,
            mediaEsquerda,
            diferenca
        })

    }, [data.maximaManualDireita, data.maximaManualEsquerda])
    useEffect(() => {
        onDataChange(data)

    }, [data])


    const handleChange = (e) => {

        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    return (


        <Carousel dots={false} arrows={false} ref={carouselRef}>
            <div>
                <div className={tw.headerCarousel}>Maxima Manual</div>
                <div className={tw.grayContent}>
                    <div className={tw.tableSideValue}>Direita</div>
                    <div className={tw.colTransparent}>
                        <ThreeNumberInputs
                            onChange={(value) => {
                                setData({
                                    ...data,
                                    maximaManualDireita: value
                                })
                            }} />
                    </div>
                </div>
                <div className={tw.whiteContent}>
                    <div className={tw.tableSideValue}>Esquerda</div>
                    <div className={tw.colTransparent}>
                        <ThreeNumberInputs
                            onChange={(value) => {
                                setData({
                                    ...data,
                                    maximaManualEsquerda: value
                                })
                            }}
                            lastOnKeyDown={(e) => {
                                if (e.key === 'Tab') {
                                    e.preventDefault()
                                    carouselRef.current.next()
                                }
                            }}
                        />

                    </div>

                </div>
                <div className={tw.grayContent}>
                    <div className={tw.tableSideValue}>Diferença Médias</div>
                    <div className={tw.colTransparent}>
                        <input
                            disabled
                            className={tw.inputTransparent}
                            type="number"
                            name="diferenca"
                            value={data.diferenca}
                            onChange={handleChange}

                        />
                    </div>
                </div>

            </div>
            <div>
                <div className={tw.headerCarousel}>Média</div>
                <div className={tw.grayContent}>
                    <div className={tw.tableSideValue}>Direita</div>
                    <div className={tw.colTransparent}>
                        <input
                            disabled
                            className={tw.inputTransparent}
                            type="number"
                            name="mediaDireita"
                            value={data.mediaDireita}
                            onChange={handleChange}


                        />
                    </div>
                </div>


                <div className={tw.whiteContent}>
                    <div className={tw.tableSideValue}>Esquerda</div>
                    <div className={tw.colTransparent}>
                        <input
                            disabled
                            className={tw.inputTransparent}
                            type="number"
                            name="mediaEsquerda"
                            value={data.mediaEsquerda}
                            onChange={handleChange} />
                    </div>

                </div>
                <div className={tw.grayContent}>
                    <div className={tw.tableSideValue}>Diferença Médias</div>
                    <div className={tw.colTransparent}>
                        <input
                            disabled
                            className={tw.inputTransparent}
                            type="number"
                            name="diferenca"
                            value={data.diferenca}
                            onChange={handleChange} />
                    </div>
                </div>
            </div>



        </Carousel>





    )

}
export function LachemeterTable({ onDataChange }) {

    const [data, setData] = useState({
        maximaManualDireita: [0, 0, 0],
        maximaManualEsquerda: [0, 0, 0],
        mediaDireita: 0,
        mediaEsquerda: 0,
        diferenca: 0
    })

    useEffect(() => {
        const mediaDireita = (data.maximaManualDireita.reduce((acc, curr) => acc + curr, 0)/3).toFixed(2)
        const mediaEsquerda = (data.maximaManualEsquerda.reduce((acc, curr) => acc + curr, 0)/3).toFixed(2)
        const diferenca = mediaDireita - mediaEsquerda
        setData({
            ...data,
            mediaDireita,
            mediaEsquerda,
            diferenca
        })

    }, [data.maximaManualDireita, data.maximaManualEsquerda])
    useEffect(() => {
        onDataChange(data)

    }, [data])


    const handleChange = (e) => {

        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    return (
        <Card>
            <div className={tw.tituloCard}>LACHEMETER – Estabilidade da Translação Anterior da Tíbia</div>
            <div className={tw.fourColumnsHeader}>
                <div className={tw.columnHeader}></div>
                <div className={tw.columnHeader}>Máxima Manual</div>
                <div className={tw.columnHeader}>Média</div>
                <div className={tw.columnHeader}>Diferença Médias</div>
            </div>
            <div className={tw.fourColumnsGrayContent}>
                <div className={tw.tableSideValue}>Direita</div>
                <div className={tw.colTransparent}>
                    <ThreeNumberInputs
                        onChange={(value) => {
                            setData({
                                ...data,
                                maximaManualDireita: value
                            })
                        }} />
                </div>
                <div className={tw.colTransparent}>
                    <input
                        disabled
                        className={tw.inputTransparent}
                        type="number"
                        name="mediaDireita"
                        value={data.mediaDireita}
                        onChange={handleChange}
                    />
                </div>
                
            </div>
            <div className={tw.fourWhiteColumnsContent}>
                <div className={tw.tableSideValue}>Esquerda</div>
                <div className={tw.colTransparent}>
                    <ThreeNumberInputs
                        onChange={(value) => {
                            setData({
                                ...data,
                                maximaManualEsquerda: value
                            })
                        }}
                    />
                </div>
                <div className={tw.colTransparent}>
                    <input
                        disabled
                        className={tw.inputTransparent}
                        type="number"
                        name="mediaEsquerda"
                        value={data.mediaEsquerda}
                        onChange={handleChange}
                    />
                </div>
                <div className={tw.colTransparent}>
                    <input
                        disabled
                        className="text-center"
                        type="number"
                        name="diferenca"
                        value={data.diferenca}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </Card>
    )



}


