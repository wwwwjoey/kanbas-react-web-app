import React from 'react';
import { useParams } from 'react-router-dom';
import { BsGripVertical } from 'react-icons/bs';
import { IoNewspaperOutline } from 'react-icons/io5';
import assignmentData from '../../Database/assignments.json';

const availableDate = 'May 6 at 12:00am';
const dueDate = 'May 13 at 11:59pm';

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const assignments = assignmentData as any[];
  const courseAssignments = assignments.filter(assignment => assignment.course === cid);

  if (courseAssignments.length === 0) {
    console.log(`No assignments found for course ID: ${cid}`);
  }

  return (
    <div id="wd-assignments">
      <div className="assignments-controls">
        <button className="btn btn-secondary me-2">
          <BsGripVertical className="me-2" />
          Group
        </button>
        <button className="btn btn-danger">
          <BsGripVertical className="me-2" />
          Assignment
        </button>
      </div>
      <br />
      <ul className="wd-assignment-list list-group rounded-0">
        <li className="wd-assignments-title list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-light text-dark">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <button className="btn btn-secondary float-end">
              <BsGripVertical className="me-2" />
              Add Assignment
            </button>
          </div>
        </li>
        <ul className="wd-assignment-list list-group rounded-0">
          {courseAssignments.map(assignment => (
            <li key={assignment._id} className="wd-assignment-list-item list-group-item vertical-rectangle">
              <div className="wd-flex-row-container">
                <div className="icon-container">
                  <BsGripVertical className="me-2 fs-3" />
                  <IoNewspaperOutline className="me-3 fs-3" />
                </div>
                <div className="assignment-details">
                  <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                    {assignment.title}
                  </a>
                  <div>
                    Multiple Modules | <strong>Not available until</strong> {availableDate} | <strong>Due</strong> {dueDate} | 100 pts
                  </div>
                </div>
                <div className="lesson-controls">
                  <button className="btn btn-outline-secondary btn-sm me-2">Control</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}


