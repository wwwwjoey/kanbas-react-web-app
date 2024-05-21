import React from 'react';
import logo from './logo.svg';
import Labs from "./Labs";
import './App.css';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom"

import Kanbas from "./Kanbas";
import Grades from './Kanbas/Courses/Grades';
function App() {
 return (
  <HashRouter>
   <div className="h-100">
    <Routes>
     <Route path="/" element={<Navigate to="Labs"/>}/>
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/Kanbas/*" element={<Kanbas />} />
    </Routes>
   </div>
  </HashRouter>
);}
export default App;

