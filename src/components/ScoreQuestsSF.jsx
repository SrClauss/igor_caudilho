import { useState, useEffect } from "react";
import { Card } from "antd";
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material'
import { useMediaQuery } from "react-responsive";

export default function ScoreQuestsSF({ onDataChange, prompt, options, scores, labelIndex, multiline = false, elementsPerRow = 3, initialData = null}) {
    const [result, setResult] = useState(initialData?.result || null)
    const [response, setResponse] = useState(initialData?.response || null)
    const isLargeScreen = useMediaQuery({ query: '(min-width: 500px)' })


    useEffect(() => {


        onDataChange(result, response)
    }, [result])

    const handleDataChange = (value) => {



        setResult(value)
    }
    const generatesRows = () => {
        const rows = []
        for (let i = 0; i < options.length; i += elementsPerRow) {
            rows.push(options.slice(i, i + elementsPerRow))
        }
        return rows
    }



    return (

        <Card className="p-2 m-2">


            <FormControl className="w-full" >
                <FormLabel className="text-start">{labelIndex}. {prompt}</FormLabel>
                <RadioGroup
                    defaultValue={initialData?.response || null}
                    onChange={(e) => {
                        const score = scores[parseInt(e.target.value)]
                        handleDataChange(score)
                        setResponse(e.target.value)
                    }}
                >
                    {multiline &&  isLargeScreen ?
                        generatesRows().map((row, rowIndex) => (
                            <div key={rowIndex} className="flex flex-row py-4">
                                {row.map((option, optionIndex) => {
                                  
                                    const uniqueIndex = rowIndex * elementsPerRow + optionIndex;

                                    return (
                                        <FormControlLabel
                                            key={uniqueIndex}
                                            value={uniqueIndex}
                                            control={<Radio  />}
                                            label={option}
                                            className="items-center justify-start w-1/3"
                                        />
                                    );
                                })}
                            </div>
                        ))
                        

                        : (
                            <div className="flex  flex-col  md:flex-row md:justify-between  md:py-10">
                                {options.map((option, index) => (
                                    <FormControlLabel
                                        key={index}
                                        value={index}
                                        control={<Radio />}
                                        label={option}
                                    />
                                ))}
                            </div>)

                    }
                </RadioGroup>
            </FormControl>
        </Card>


    )
}



