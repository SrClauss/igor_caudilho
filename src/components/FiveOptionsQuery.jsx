import { useState, useEffect } from "react";
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material'
import { Card } from "antd";

export default function FiveOptionsQuery({ onDataChange, prompt, index }) {
    const [data, setData] = useState(0)

    useEffect(() => {
        onDataChange(parseInt(data))
    }, [data])






    return (
        <Card className="p-5">

            <FormControl className="w-full" >

                <FormLabel className="text-start">{index + 1}. {prompt}</FormLabel>
                <RadioGroup
                    

                    defaultValue={0}
                    onChange={(e) => {
                        setData(parseInt(e.target.value))


                    }}
                >
                    <div className="flex  flex-col  md:flex-row md:justify-between md:px-10 md:py-10">
                        <FormControlLabel value={0} control={<Radio />} label="Nenhuma" />
                        <FormControlLabel value={25} control={<Radio />} label="Pouca" />
                        <FormControlLabel value={50} control={<Radio />} label="Moderada" />
                        <FormControlLabel value={75} control={<Radio />} label="Intensa" />
                        <FormControlLabel value={100} control={<Radio />} label="Muito Intensa" />

                    </div>


                </RadioGroup>

            </FormControl>

        </Card>


    )

}
