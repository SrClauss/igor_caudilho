import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DFP from './pages/DFP';
import Layout from './Layout';
import Index from './Index';
import OsteoartroseArtroplastia from './pages/OsteoartroseArtroplastia';

function App() {
  const [data, setData] = useState({})

  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/dfp" element={<DFP/>} />
          <Route path="ortoartrose_artroplastia" element={<OsteoartroseArtroplastia/>} />      
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;