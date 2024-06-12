import React from 'react';
import logo from './logo.svg';
import Labs from "./Labs";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter, Route, Routes, Navigate } from "react-router-dom"

import Kanbas from "./Kanbas";
import Grades from './Kanbas/Courses/Grades';
import Assignments from './Kanbas/Courses/Assignments';
import AssignmentEditor from './Kanbas/Courses/Assignments/Editor';
import Lab5 from './Labs/Lab5';
function App() {
 return (
  <HashRouter>
   <div className="h-100">
    <Routes>
     <Route path="/" element={<Navigate to="Labs"/>}/>
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/Kanbas/*" element={<Kanbas />} />
     <Route path="/courses/:courseId/assignments" Component={Assignments} />
     <Route path="/courses/:cid/assignments/:aid" Component={AssignmentEditor} />
     

    </Routes>
   </div>
  </HashRouter>
);}
export default App;

