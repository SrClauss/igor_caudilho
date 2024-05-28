import { FormControlLabel, Checkbox, Box } from "@mui/material"
import { useState } from "react"
export default function QuestaoBilateral({question, onChangeCheckboxes}) {
    const [direito , setDireito] = useState(false)
    const [esquerdo , setEsquerdo] = useState(false)


    return(
        <Box className="mt-4 md:mt-16 text-center">
        <h3 className="text-2xl md:text3xl font-bold text-cyan-600 pb-3">{question}</h3>
        <div className="w-full flex justify-center items-center">
          <div className="flex w-full justify-around" >

            <div className='ms-8 md:ms-40'>

              <FormControlLabel
                value="Direito"
                control={
                    <Checkbox 
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 25 } }} 
                    onChange={(e) =>{
                        setDireito(e.target.checked);
                        onChangeCheckboxes(e.target.checked, esquerdo)

                    }}
                    />}
                label={<div className='text-xl'>Direito</div>}
                labelPlacement="top"


              />
            </div>

            <div className='me-8 md:me-40'>

              <FormControlLabel
                value="Esquerdo"
                control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 25 } }} />}
                label={<div className='text-xl'>Esquerdo</div>}
                labelPlacement="top"
                onChange={(e) =>{
                    setEsquerdo(e.target.checked);
                    onChangeCheckboxes(direito, e.target.checked)
                }}
              />

            </div>


          </div>


        </div>
      </Box>
    )



}

