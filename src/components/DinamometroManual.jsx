import { useState, useRef, useEffect } from 'react'
import { Carousel, Card } from 'antd'
import { useMediaQuery } from 'react-responsive'
import '../index.css'
import * as tw from './tailwind'


export default function DinamometroManual({ onDataChange }) {
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <Card className='mt-4 p-2'>
            <h2 className={tw.headerTable}>Dinamometro Manual</h2>
            {isMobile ? <DinamometroManualCarousel onDataChange={onDataChange} /> : <DinamometroManualTable onDataChange={onDataChange} />}
            <p className='text-justify'>
                Razão normal: Torque Flexor / Torque Extensor isocinetico:60% (quando feito a 60°/s) 65-70% (quando feito a 180°/s)
            </p>
            <blockquote className='mt-2'>
                Referência:  Scharft HP, Noack W, Sportverletz Sportschaden, 19
            </blockquote>

        </Card>
    )

}

export function DinamometroManualCarousel({ onDataChange, initialData = null}) {
    const [data, setData] = useState(initialData || {
        "torqueExtensorMedioDireito": '',
        "torqueExtensorMedioEsquerdo": '',
        "torqueFlexorMedioDireito": '',
        "torqueFlexorMedioEsquerdo": '',
        "torqueHipPositionDireito": '',
        "torqueHipPositionEsquerdo": '',
        "deficitExtensor": '',
        "deficitFlexor": '',
        "deficitHipPosition": '',

    })

    const carouselRef = useRef()


    useEffect(() => {
        const deficitExtensor = Math.abs(data.torqueExtensorMedioDireito - data.torqueExtensorMedioEsquerdo)
        const deficitFlexor = Math.abs(data.torqueFlexorMedioDireito - data.torqueFlexorMedioEsquerdo)
        const deficitHipPosition = Math.abs(data.torqueHipPositionDireito - data.torqueHipPositionEsquerdo)

        setData({
            ...data,
            deficitExtensor,
            deficitFlexor,
            deficitHipPosition
        })
    }, [data.torqueExtensorMedioDireito, data.torqueExtensorMedioEsquerdo, data.torqueFlexorMedioDireito, data.torqueFlexorMedioEsquerdo, data.torqueHipPositionDireito, data.torqueHipPositionEsquerdo])
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })

    }

    useEffect(() => {
        onDataChange(data)

    }, [data])

    return (
        <Carousel dots={false} arrows={false} ref={carouselRef} afterChange={(next) => {
            if (next === 0) {
                const element = document.getElementById('torqueExtensorMedioDireito')
                element.focus()
                element.select()


            }

            if (next === 1) {

                const element = document.getElementById('torqueFlexorMedioDireito')
                element.focus()
                element.select()
            }


            if (next === 2) {

                const element = document.getElementById('torqueHipPositionDireito')
                element.focus()
                element.select()
            }





        }}>
            <div>
                <div className={tw.headerCarousel}>
                    Torque Extensor Medio
                </div>
                <div className={tw.grayContent}>
                    <div className={tw.sideValue}>Direito</div>
                    <div className={tw.colTransparent}>
                        <input id='torqueExtensorMedioDireito'
                            className={tw.inputTransparent}
                            type="number"
                            name="torqueExtensorMedioDireito"
                            value={data.torqueExtensorMedioDireito}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className={tw.whiteContent}>
                    <div className={tw.sideValue}>Esquerdo</div>
                    <div className={tw.colTransparent}>
                        <input id='torqueExtensorMedioEsquerdo'
                            className={tw.inputTransparent}
                            type="number"
                            name="torqueExtensorMedioEsquerdo"
                            value={data.torqueExtensorMedioEsquerdo}
                            onChange={handleChange}
                            onKeyDown={(e) => {
                                if (e.key === 'Tab') {

                                    e.preventDefault()
                                    carouselRef.current.next()
                                }
                            }}
                        />
                    </div>
                </div>
                <div className={tw.grayContent}>
                    <div className={tw.sideValue}>Deficit</div>
                    <div className={tw.colTransparent}>
                        <input
                            id='deficitExtensor'
                            disabled
                            className={tw.inputTransparentBold}
                            type="number"
                            name="deficitExtensor"
                            value={data.deficitExtensor}
                        />
                    </div>
                </div>
            </div>

            <div>
                <div className={tw.headerCarousel}>
                    Torque Flexor Medio
                </div>

                <div className={tw.grayContent}>
                    <div className={tw.sideValue}>Direito</div>
                    <div className={tw.colTransparent}>
                        <input id='torqueFlexorMedioDireito'
                            className={tw.inputTransparent}
                            type="number"
                            name="torqueFlexorMedioDireito"
                            value={data.torqueFlexorMedioDireito}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className={tw.whiteContent}>
                    <div className={tw.sideValue}>Esquerdo</div>
                    <div className={tw.colTransparent}>
                        <input id='torqueFlexorMedioEsquerdo'
                            className={tw.inputTransparent}
                            type="number"
                            name="torqueFlexorMedioEsquerdo"
                            value={data.torqueFlexorMedioEsquerdo}
                            onChange={handleChange}
                            onKeyDown={(e) => {
                                if (e.key === 'Tab') {

                                    e.preventDefault()
                                    carouselRef.current.next()
                                }
                            }} />
                    </div>
                </div>
                <div className={tw.grayContent}>
                    <div className={tw.sideValue}>Deficit</div>
                    <div className={tw.colTransparent}>
                        <input id='deficitFlexor'
                            disabled
                            className={tw.inputTransparentBold}
                            type="number"
                            name="deficitFlexor"
                            value={data.deficitFlexor}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className={tw.headerCarousel}>
                    Torque Hip Position
                </div>
                <div className={tw.grayContent}>
                    <div className={tw.sideValue}>Direito</div>
                    <div className={tw.colTransparent}>
                        <input id='torqueHipPositionDireito'
                            className={tw.inputTransparent}
                            type="number"
                            name="torqueHipPositionDireito"
                            value={data.torqueHipPositionDireito}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className={tw.whiteContent}>
                    <div className={tw.sideValue}>Esquerdo</div>
                    <div className={tw.colTransparent}>
                        <input id='torqueHipPositionEsquerdo'
                            className={tw.inputTransparent}
                            type="number"
                            name="torqueHipPositionEsquerdo"
                            value={data.torqueHipPositionEsquerdo}
                            onChange={handleChange}
                            onKeyDown={(e) => {
                                if (e.key === 'Tab') {
                                    e.preventDefault()
                                    carouselRef.current.next()
                                }
                            }}
                        />
                    </div>
                </div>
                <div className={tw.grayContent}>
                    <div className={tw.sideValue}>Deficit</div>
                    <div className={tw.colTransparent}>
                        <input id='deficitHipPosition'
                            disabled
                            className={tw.inputTransparentBold}
                            type="number"
                            name="deficitHipPosition"
                            value={data.deficitHipPosition}


                        />
                    </div>
                </div>
            </div>
        </Carousel>

    )

}


export function DinamometroManualTable({ onDataChange }) {

    const [data, setData] = useState({
        "torqueExtensorMedioDireito": '',
        "torqueExtensorMedioEsquerdo": '',
        "torqueFlexorMedioDireito": '',
        "torqueFlexorMedioEsquerdo": '',
        "torqueHipPositionDireito": '',
        "torqueHipPositionEsquerdo": '',
        "deficitExtensor": '',
        "deficitFlexor": '',
        "deficitHipPosition": '',

    })




    useEffect(() => {
        const deficitExtensor = Math.abs(data.torqueExtensorMedioDireito - data.torqueExtensorMedioEsquerdo)
        const deficitFlexor = Math.abs(data.torqueFlexorMedioDireito - data.torqueFlexorMedioEsquerdo)
        const deficitHipPosition = Math.abs(data.torqueHipPositionDireito - data.torqueHipPositionEsquerdo)

        setData({
            ...data,
            deficitExtensor,
            deficitFlexor,
            deficitHipPosition
        })
    }, [data.torqueExtensorMedioDireito, data.torqueExtensorMedioEsquerdo, data.torqueFlexorMedioDireito, data.torqueFlexorMedioEsquerdo, data.torqueHipPositionDireito, data.torqueHipPositionEsquerdo])
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })

    }

    useEffect(() => {
        onDataChange(data)

    }, [data])


    return (
        <>

            <div className={tw.fourColumnsHeader}>
                <div className={tw.columnHeader}>60º/s</div>
                <div className={tw.columnHeader}>Direita</div>
                <div className={tw.columnHeader}>Esquerda</div>
                <div className={tw.columnHeader}>Deficit</div>
            </div>
            <div className={tw.fourColumnsGrayContent}>
                <div className={tw.tableSideValue}>Torque Extensor Medio</div>
                <div className={tw.colTransparent}>
                    <input id='torqueExtensorMedioDireito'
                        className={tw.inputTransparent} type="number" name="torqueExtensorMedioDireito" value={data.torqueExtensorMedioDireito} onChange={handleChange} />
                </div>
                <div className={tw.colTransparent}>
                    <input id='torqueExtensorMedioEsquerdo'
                        className={tw.inputTransparent} type="number" name="torqueExtensorMedioEsquerdo" value={data.torqueExtensorMedioEsquerdo} onChange={handleChange} />
                </div>
                <div className={tw.colTransparent}>
                    <input id='deficitExtensor'
                        disabled
                        className={tw.inputTransparentBold} type="number" name="deficitExtensor" value={data.deficitExtensor? data.deficitExtensor: ""} />
                </div>
            </div>
            <div className={tw.fourWhiteColumnsContent}>
                <div className={tw.tableSideValue}>Torque Flexor Medio</div>
                <div className={tw.colTransparent}>
                    <input id='torqueFlexorMedioDireito'
                        className={tw.inputTransparent} type="number" name="torqueFlexorMedioDireito" value={data.torqueFlexorMedioDireito} onChange={handleChange} />
                </div>
                <div className={tw.colTransparent}>
                    <input id='torqueFlexorMedioEsquerdo'
                        className={tw.inputTransparent} type="number" name="torqueFlexorMedioEsquerdo" value={data.torqueFlexorMedioEsquerdo} onChange={handleChange} />
                </div>
                <div className={tw.colTransparent}>
                    <input id='deficitFlexor'
                        disabled
                        className={tw.inputTransparentBold} type="number" name="deficitFlexor" value={data.deficitFlexor!=0? data.deficitFlexor: ""} />
                </div>
            </div>

            <div className={tw.fourColumnsGrayContent}>
                <div className={tw.tableSideValue}>Torque Hip Position</div>
                <div className={tw.colTransparent}>
                    <input id='torqueHipPositionDireito'
                        className={tw.inputTransparent} type="number" name="torqueHipPositionDireito" value={data.torqueHipPositionDireito} onChange={handleChange} />
                </div>
                <div className={tw.colTransparent}>
                    <input id='torqueHipPositionEsquerdo'
                        className={tw.inputTransparent} type="number" name="torqueHipPositionEsquerdo" value={data.torqueHipPositionEsquerdo} onChange={handleChange} />
                </div>
                <div className={tw.colTransparent}>
                    <input id='deficitHipPosition'
                        disabled
                        className={tw.inputTransparentBold} type="number" name="deficitHipPosition" value={data.deficitHipPosition!=0? data.deficitHipPosition: ""} />
                </div>

            </div>



        </>

    )

}
