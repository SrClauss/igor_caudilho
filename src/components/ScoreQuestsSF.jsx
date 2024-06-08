import { useState, useEffect } from "react";
import { Card } from "antd";
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material'

export default function ScoreQuestsSF({ onDataChange, prompt, options, scores, labelIndex }) {
    const [data, setData] = useState()



    useEffect(() => {
        onDataChange(data)
    }, [data])

    const handleDataChange = (value) => {
        setData(value)
    }

    return (

        <Card className="p-2 m-2">


            <FormControl className="w-full" >
                <FormLabel className="text-start">{labelIndex}. {prompt}</FormLabel>
                <RadioGroup
                    defaultValue={null}
                    onChange={(e) => {
                        const score = scores[parseInt(e.target.value)]


                        handleDataChange(score)
                    }}
                >
                    <div className="flex  flex-col  md:flex-row md:justify-between  md:py-10">
                        {options.map((option, index) => (

                            <div>
                                <FormControlLabel value={index} control={<Radio />} label={option} />
                                <div>{`${scores[index]}`}</div>
                            </div>
                        ))}
                    </div>
                </RadioGroup>
            </FormControl>
        </Card>


    )
}



