import { useState, useRef, useEffect } from 'react'
import { Carousel, Card } from 'antd'
import  {useMediaQuery} from 'react-responsive'
import '../index.css'
import * as tw from './tailwind'



export default function AmplitudeMovimentoJoelho({ onDataChange, initialData=null }) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (

        <Card>
            <h2 className={tw.componentTitle}> 
                Amplitude de Movimento do Joelho</h2>
            <div>
                {isTabletOrMobile ? <AmplitudeMovimentoJoelhoCarousel onDataChange={onDataChange} initialData={initialData}/> : <AmplitudeMovimentoJoelhoTable onDataChange={onDataChange} initialData={initialData} />}
            </div>
        </Card>
    )
}


export function AmplitudeMovimentoJoelhoCarousel({ onDataChange, initialData = null}) {
    const [data, setData] = useState(initialData ||{})

    const carouselRef = useRef()

    useEffect(() => {
        onDataChange({amplitudeMovimentoJoelho:data})


    }, [data])


    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: parseFloat(value)
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





function AmplitudeMovimentoJoelhoTable({ onDataChange, initialData = null}) {


    const [data, setData] = useState(initialData ||{})
    useEffect(() => {
        onDataChange({amplitudeMovimentoJoelho:data})
    }, [data])
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prevData => ({
            ...prevData,
            [name]: parseFloat(value)
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

