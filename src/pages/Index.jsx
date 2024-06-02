import { Button } from "@mui/material";
import Layout from "../Layout";
import '../index.css'
import { db } from '../firebase'
import { ref, push, get, } from 'firebase/database'
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';


export default function Index() {

  const gerarPlanilha = async (tipo) => {
    const dbRef = ref(db, tipo);
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const ids = Object.keys(snapshot.val());
      const values = Object.values(snapshot.val());
      const completeValues = values.map((value, index) => {
        return {
          id: ids[index],
          ...JSON.parse(value),
        };
      });

      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet(tipo);

      worksheet.columns = Object.keys(completeValues[0]).map(key => ({header: key, key}));

      completeValues.forEach(value => {
        console.log(value);
        worksheet.addRow(value);
      });

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      saveAs(blob, `${tipo}.xlsx`);
    }
  };



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

      <div className="grid grid-cols-4">

        {/*}
        <Button onClick={(e) => { gerarPlanilha("dfp") }} variant="contained" color="primary">Planilha DFP</Button>
        <Button onClick={(e)=>gerarPlanilha("osteoartrose_artroplastia")} variant="contained" color="primary">Planilha Osteoartrite / Artrosplatia</Button>
        <Button onClickvariant="contained" color="primary">Planilha Lesao de LCA</Button>
        <Button variant="contained" color="primary">Planilha Lesao de Menisco</Button>
        */}

      </div>






    </>



  );
}