import React, { useState, useEffect } from 'react'
import { Box, FormControl, TextField } from '@mui/material'
export default function Observacoes({onDataChange, initialData = null}) {
    const [data, setData] = useState(initialData?initialData:'')
    useEffect(() => {
        onDataChange({observacoes: data})
    }, [data])

    return (

        <Box className='pt-4'>
            <FormControl className="w-full">
                <TextField

                   id="observaceos"
                    className="text-justify"
                    label="Observações"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
            </FormControl>
        </Box>
    )
}