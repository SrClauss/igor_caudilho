import { Card } from "antd"
export default function TableNormativoJoelho() {



    return (


        <Card>
            <div className="grid grid-cols-3">
                <div className="row text-cyan-800 font-bold text-md text-center col-span-3 p-2">
                    JOELHO - Valores Normativos (Nm)  HOMENS
                </div>

                <div className="row col-span-1 p-1">Velocidade</div>
                <div className="row col-span-2 p-1 text-center">60º/s</div>

                <div className="row col-span-1 bg-slate-300"></div>
                <div className="row col-span-1 bg-slate-300">Extensão</div>
                <div className="row col-span-1 bg-slate-300">Flexão</div>

                <div className="row col-span-1 bg-white">Valores</div>
                <div className="row col-span-1 bg-white">{"172,0 ± (41,3)"}</div>
                <div className="row col-span-1 bg-white">{"57,2± (16,0)"}</div>

                <div className="row text-cyan-800 font-bold text-md text-center col-span-3 mt-2 p-2">
                    {"JOELHO - Valores Normativos (Nm)  MULHERES"}
                </div>
                <div className="row col-span-1 p-1">Velocidade</div>
                <div className="row col-span-2 p-1 text-center">60º/s</div>

                <div className="row col-span-1 bg-slate-300"></div>
                <div className="row col-span-1 bg-slate-300">Extensão</div>
                <div className="row col-span-1 bg-slate-300">Flexão</div>

                <div className="row col-span-1 bg-white">Valores</div>
                <div className="row col-span-1 bg-white">{"109.5 ± (32,4)"}</div>
                <div className="row col-span-1 bg-white">{"57,2± (16,0)"}</div>




            </div>
            <div className="mt-1">

                <div className="text-end text-sm">

                    Referência: Adaptado de : JOSPT,1999:
                </div>
                <div className="text-end text-sm">
                    * Individuos normais
                </div>
            </div>
        </Card>


    )


}