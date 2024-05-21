import "./styles.css";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import 'bootstrap/dist/css/bootstrap.min.css';
import Labs from "../Labs";
import Lab1 from "../Labs/Lab1";


export default function Kanbas() {
    return (
      <div id="wd-kanbas" className="h-100">
    <div className="d-flex h-100">
      <KanbasNavigation />
    <div className="flex-fill p-4">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/:id/*" element={<Courses />} />
              <Route path="/Labs/*" element={<Labs />} />
            </Routes>
            </div>
            </div>
  </div>
  );
  }
  
  