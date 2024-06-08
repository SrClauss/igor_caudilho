import { Card } from "@mui/material";

export default function InstrucoesSF36({children, instrucoes})
{
    return (
        <div className="p-2 m-2">
            <p className="text-start text-xl pl-2">{instrucoes}</p>
            <Card className="p-2 m-2">
            {children}
            </Card>
        </div>
    )
}