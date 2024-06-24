import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DFP from './pages/DFP';
import Layout from './Layout';
import Index from './pages/Index';
import OsteoartroseArtroplastia from './pages/OsteoartroseArtroplastia';
import LCA from './pages/LCA';
import Menisco from './pages/Menisco';
import Pesquisa from './pages/Pesquisa';
import {RelatorioDFP, RelatorioLCA, RelatorioOsteoartroseArtroplastia, RelatorioMenisco} from './pages/Relatorios';
import TestPDF from './pages/TestPDF';


function App() {


  return (
  <Router>
    <Routes>
      <Route>
        <Route path="/" element={<Index/>} />
        <Route path="/dfp" element={<DFP initialData/>} />
        <Route path="osteoartrose_artroplastia" element={<OsteoartroseArtroplastia/>} />
        <Route path="lca" element={<LCA/>} /> 
        <Route path="menisco" element={<Menisco/>} />
        <Route path="pesquisa" element={<Pesquisa/>} />
        <Route path="/relatorio-dfp" element={<RelatorioDFP/>} />
        <Route path="/relatorio-lca" element={<RelatorioLCA/>}/>
        <Route path='/relatorio-osteoartrose_artroplastia' element={<RelatorioOsteoartroseArtroplastia/>}/>
        <Route path='/relatorio-menisco' element={<RelatorioMenisco/>}/>
        <Route path="/test-pdf" element={<TestPDF/>} />


      </Route>
    </Routes>
  </Router>
);
}

export default App;