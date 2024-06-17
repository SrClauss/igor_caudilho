import { Button } from "@mui/material";
import Layout from "../Layout";
import '../index.css'
import { db } from '../firebase'
import { ref, push, get, } from 'firebase/database'
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';




export default function Index() {




  return (
    <>
      <div className="w-full p-10">
        <button
          className="bg-cyan-800 w-full hover:bg-cyan-600  p-16 text-3xl text-white font-bold rounded"
          onClick={() => window.location.href = '/dfp'}
        >
          DFP
        </button>
      </div>

      <div className="w-full p-10">
        <button
          className="bg-cyan-800 w-full hover:bg-cyan-600  p-16 text-3xl text-white font-bold rounded"
          onClick={() => window.location.href = "osteoartrose_artroplastia"}
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

      <div className="w-full p-10">

        <button
          className="bg-cyan-800 w-full hover:bg-cyan-600  p-16 text-3xl text-white font-bold rounded"
          onClick={() => window.location.href = '/pesquisa'}

        >
          Pesquisa
        </button>

      </div>

      <div className="w-full p-10">
        <button
          className="bg-cyan-800 w-full hover:bg-cyan-600  p-16 text-3xl text-white font-bold rounded"
          onClick={() => window.location.href = '/relatorio-dfp'}
        >
          Relatório DFP
        </button>
      </div>
     

    </>



  );
}