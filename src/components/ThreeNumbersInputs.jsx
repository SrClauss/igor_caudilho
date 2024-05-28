import { useEffect, useState,  } from "react"
import * as tw from "./tailwind"
export default function ThreeNumberInputs({onChange, disabled=false, lastOnKeyDown =null}){
    const [data, setData] = useState([0,0,0])
    useEffect(() => {
        onChange(data)
    }, [data])
    const handleChange = (e, index) => {
        const { value } = e.target
        let newData = [...data]
        newData[index] = parseInt(value)
        setData(newData)
        
    }




    return(
        <div className="flex justify-center w-fit bg-transparent items-center">
            <input
                className={tw.inputTransparent + " border-none w-5 text-center bg-transparent"}
                type="number"
                name="number1"
                value={data[0]}
                onChange={(e) => handleChange(e, 0)}
            />
            <span className={tw.inputTransparent + " border-none w-5 text-center bg-transparent"}>/</span>
            <input
                className={tw.inputTransparent + " border-none w-5 text-center bg-transparent"}
                type="number"
                name="number2"
                value={data[1]}
                onChange={(e) => handleChange(e, 1)}

            />
            <span className={tw.inputTransparent + " border-none w-5 text-center bg-transparent"}>/</span>
            <input
                className={tw.inputTransparent + " border-none w-5 text-center bg-transparent"}
                type="number"
                name="number3"
                value={data[2]}
                onChange={(e) => handleChange(e, 2)}
                onKeyDown={lastOnKeyDown}
                
            />
            
           
           
        </div>

    )

}