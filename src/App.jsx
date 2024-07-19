import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DFP from './pages/DFP';
import Layout from './Layout';
import Index from './pages/Index';
import OsteoartroseArtroplastia from './pages/OsteoartroseArtroplastia';
import LCA from './pages/LCA';
import Menisco from './pages/Menisco';
import Pesquisa from './pages/Pesquisa';



function App() {


  return (
  <Router>
    <Routes>
   
        <Route path="/" element={<Index/>} />
        <Route path="/dfp" element={<DFP/>} />
        <Route path='/dfp/:id' element={<DFP/>} />
        <Route path="osteoartrose_artroplastia" element={<OsteoartroseArtroplastia/>} />
        <Route path="osteoartrose_artroplastia/:id" element={<OsteoartroseArtroplastia/>} />
        <Route path="lca" element={<LCA/>} /> 
        <Route path="lca/:id" element={<LCA/>} />
        <Route path="menisco" element={<Menisco/>} />
        <Route path="menisco/:id" element={<Menisco/>} />
        <Route path="pesquisa" element={<Pesquisa/>} />



    </Routes>
  </Router>
);
}

export default App;