import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Detail from './components/Detail';
import Profil from './components/Profil';
import Recherche from './components/Recherche';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Recherche" element={<Recherche />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;






