import React from 'react';
import { FaUpload, FaDownload, FaCog } from 'react-icons/fa';

export default function Grades() {
  return (
    <div className="container-fluid p-3">
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex">
          <div className="me-3">
            <label>Student Names</label>
            <input type="text" className="form-control" placeholder="Search Students" />
          </div>
          <div className="me-3">
            <label>Assignment Names</label>
            <input type="text" className="form-control" placeholder="Search Assignments" />
          </div>
          <button className="btn btn-outline-secondary align-self-end">Apply Filters</button>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-primary me-2">
            <FaUpload className="me-1" /> Import
          </button>
          <button className="btn btn-outline-primary me-2">
            <FaDownload className="me-1" /> Export
          </button>
          <button className="btn btn-outline-secondary">
            <FaCog />
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>A1 SETUP<br />Out of 100</th>
              <th>A2 HTML<br />Out of 100</th>
              <th>A3 CSS<br />Out of 100</th>
              <th>A4 BOOTSTRAP<br />Out of 100</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-danger">Jane Adams</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>92.18%</td>
              <td>66.22%</td>
            </tr>
            <tr>
              <td className="text-danger">Christina Allen</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger">Samreen Ansari</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger">Han Bao</td>
              <td>100%</td>
              <td>100%</td>
              <td>
                <input type="text" className="form-control" defaultValue="88.03%" />
              </td>
              <td>98.99%</td>
            </tr>
            <tr>
              <td className="text-danger">Mahi Sai Srinivas Bobbili</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>98.37%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger">Siran Cao</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
