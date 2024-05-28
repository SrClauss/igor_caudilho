import { Slider } from "@mui/material";
import { useState } from "react";
export default function SliderDor({title, onSliderChange}) {
    const [value, setValue] = useState(0)
    const [classificacao, setClassificacao] = useState('leve')
    const [color, setColor] = useState('text-blue-500')


    const handleChangeSlider = (e, value) => {
        setValue(value)
        if (value <= 2) {
            setClassificacao('Leve')
            setColor('text-blue-500')
        } else if (value <= 6) {
            setClassificacao('Moderada')
            setColor('text-yellow-500')
        } else {
            setClassificacao('Intensa')
            setColor('text-red-500')
        }
        onSliderChange(value)
        


    }
    return (
        <div className="px-10 py-8 text-center">
            <h2 className="text-xl font-bold text-cyan-600 mb-3">{title}</h2>

               
                <Slider

                    color="neutral"                                   
                    defaultValue={0}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={10}
                    onChange={(e, value) => handleChangeSlider(e, value)}
                />

                <img style={{marginTop: '-30px'}} src='/escala_dor_slice1.jpg' alt='escala dor' />
                <div className={color + " font-bold text-xl"}>{value} - {classificacao}</div>
       
       
        </div>
    )
}