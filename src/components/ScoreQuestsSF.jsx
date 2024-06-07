import { useState, useEffect } from "react";
import { Card } from "antd";
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material'

export default function ScoreQuestsSF({ onDataChange, prompt, options, scores, index}) {
    const [data, setData] = useState(0)



    useEffect(() => {
        onDataChange(data)
    }, [data])

    const handleDataChange = (value) => {
        setData(value)
    }

    return (

        <Card className="p-2 m-2">


            <FormControl className="w-full" >
                <FormLabel className="text-start">{index + 1}. {prompt}</FormLabel>
                <RadioGroup
                    defaultValue={0}
                    onChange={(e) => {
                        handleDataChange(parseInt(e.target.value))
                    }}
                >
                    <div className="flex  flex-col  md:flex-row md:justify-between md:px-10 md:py-10">
                        {options.map((option, index) => (
                            <FormControlLabel value={scores[index]} control={<Radio />} label={option} />
                        ))}
                    </div>
                </RadioGroup>
            </FormControl>
        </Card>


    )
}



