import React from 'react';
import { useParams } from 'react-router-dom';
import { FaUpload, FaDownload, FaCog } from 'react-icons/fa';
import userData from '../../Database/users.json';
import enrollmentData from '../../Database/enrollments.json';
import assignmentData from '../../Database/assignments.json';
import gradeData from '../../Database/grades.json';

export default function Grades() {
  const { cid } = useParams<{ cid: string }>();

  // Filter students enrolled in the current course
  const enrollments = enrollmentData.filter(enrollment => enrollment.course === cid);
  const studentIds = enrollments.map(enrollment => enrollment.user);
  const students = userData.filter(user => studentIds.includes(user._id));

  // Get assignments for the current course
  const assignments = assignmentData.filter(assignment => assignment.course === cid);

  // Verify assignments and students
  console.log('Course ID:', cid);
  console.log('Enrollments:', enrollments);
  console.log('Student IDs:', studentIds);
  console.log('Students:', students);
  console.log('Assignments:', assignments);

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
              {assignments.map(assignment => (
                <th key={assignment._id}>
                  {assignment.title}<br />Out of 100
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student._id}>
                <td>{student.firstName} {student.lastName}</td>
                {assignments.map(assignment => {
                  const grade = gradeData.find(grade => grade.student === student._id && grade.assignment === assignment._id);
                  console.log('Student:', student._id, 'Assignment:', assignment._id, 'Grade:', grade);
                  return (
                    <td key={assignment._id}>{grade ? `${grade.grade}%` : 'N/A'}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
