import { Button } from "@mui/material";
import Layout from "../Layout";
import '../index.css'

export default function Index() {
  return (
    <>
      <div className="w-full p-10">
        <button
          className="bg-cyan-800 w-full hover:bg-cyan-600  p-16 text-3xl text-white font-bold rounded"
          onClick={() => window.location.href = '/dfp'}
        >
          Avaliacao Funcional do Joelho
        </button>
      </div>

      <div className="w-full p-10">
        <button
          className="bg-cyan-800 w-full hover:bg-cyan-600  p-16 text-3xl text-white font-bold rounded"
          onClick={() => window.location.href = '/ortoartrose_artroplastia'}
        >
          Osteoartrose e Artroplastia
        </button>
      </div>
      <div className="w-full p-10">
        <button
          className="bg-cyan-800 w-full hover:bg-cyan-600  p-16 text-3xl text-white font-bold rounded"
          onClick={() => window.location.href = '/lca'}
        >
          Lesao de LCA
        </button>
      </div>
      <div className="w-full p-10">
        <button
          className="bg-cyan-800 w-full hover:bg-cyan-600  p-16 text-3xl text-white font-bold rounded"
          onClick={() => window.location.href = '/menisco'}
        >
          Lesao de Menisco
        </button>
      </div>






    </>



  );
}