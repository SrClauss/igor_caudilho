import { Circle } from "@mui/icons-material";
import { Divider } from "antd";
import { Instagram, Mail } from "@mui/icons-material";

export default function Layout({ children }) {
    return (
        <div className="container p-0 px-8 shadow-xl bg-white shadow-black">

            <div className="flex w-full justify-center md:justify-center">


                <img src="/igor_caudilho.png" width="500" alt="igor caudilho" />
            </div>
            <div>

                {children}
            </div>


            <div className="bg-blue-800 px-10 py-4 mt-10">
                <div className="flex flex-col md:flex-row w-full justify-between">
                    <div>
                        <img src="logo_negativo.png" width={500} alt="logo_negativo" />
                    </div>
                    <div className="text-white w-full md:w-1/2">
                        <div className="font-bold text-md w-full text-center mb-4">
                            Campinas - SP
                        </div>
                
                        <div className="mb-4">
                            <div>
                                CMD - Vera Cruz
                            </div>
                            <div className="font-bold">
                                (19) 3751-3770
                            </div>
                            <div className="text-justify">
                                Av. Dr Jesuíno Marcondes Machado, 394, Chácara da Barra
                            </div>
                        </div>
                
                        <div className="mb-4">
                            <div>
                                Policlinicas | Hospital Puc-Campinas
                            </div>
                            <div className="font-bold">
                                (19) 3343-8600
                            </div>
                            <div className="text-justify">
                                Av. Jhon Boyd Dunlop, S/N, Jardim Londres
                            </div>
                        </div>
                
                        <div>
                            <div>
                                Clínica GAOT
                            </div>
                            <div className="font-bold">
                                (19) 3381-8884
                            </div>
                            <div className="text-justify">
                                Av. Nossa Sra de Fátima, 1528, Vila Esmeralda
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row mt-4">
                    <div className="text-white text-md md:text-xl">
                        <a href="https://www.instagram.com/dr.igorcardillo" target="_blank" rel="noreferrer">
                            <Instagram /><span className="ml-2">@dr.igorcardillo</span>
                        </a>
                    </div>
                    <div className="text-white text-md md:text-xl mt-4 sm:mt-0 sm:ml-4">
                        <a href="mailto:dr.igor@clinicasaolucas.com.br" target="_blank" rel="noreferrer">
                            <Mail /><span className="ml-2">
                                <span> dr.igorcardillo@gmail.com </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    )
}

