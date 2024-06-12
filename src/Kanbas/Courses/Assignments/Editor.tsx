import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleSave, handleCancel } from './reducer';

type Assignment = {
  _id: string;
  course: string;
  title: string;
  details: string;
  availableDate: string;
  dueDate: string;
  points: number;
};

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignments = useSelector((state: any) => state.assignments.assignments);
  const assignment = assignments.find((assignment: Assignment) => assignment._id === aid);

  const [title, setTitle] = useState(assignment?.title || '');
  const [details, setDetails] = useState(assignment?.details || '');
  const [points, setPoints] = useState(assignment?.points || 100);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  const saveAssignment = () => {
    const updatedAssignment = { ...assignment, title, details, points };
    dispatch(handleSave(updatedAssignment));
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const cancelEdit = () => {
    dispatch(handleCancel());
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignment-editor" className="p-3">
      <h2 className="mb-4">{assignment.title}</h2>
      <div className="mb-3">
        <label>Assignment Name</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Description</label>
        <textarea
          className="form-control"
          rows={8}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <label>Points</label>
        </div>
        <div className="col-9">
          <input
            type="number"
            className="form-control"
            value={points}
            onChange={(e) => setPoints(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <label>Assignment Group</label>
        </div>
        <div className="col-9">
          <select className="form-control">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>PROJECTS</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <label>Display Grade as</label>
        </div>
        <div className="col-9">
          <select className="form-control">
            <option>Percentage</option>
            <option>Complete/Incomplete</option>
            <option>Points</option>
            <option>Letter Grade</option>
            <option>GPA</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <label>Submission Type</label>
        </div>
        <div className="col-9">
          <select className="form-control">
            <option>Online</option>
            <option>On Paper</option>
            <option>External Tool</option>
          </select>
          <div className="mt-2">
            <label>Online Entry Options</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Text Entry" id="textEntry" />
              <label className="form-check-label" htmlFor="textEntry">
                Text Entry
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Website URL" id="websiteURL" checked />
              <label className="form-check-label" htmlFor="websiteURL">
                Website URL
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Media Recordings" id="mediaRecordings" />
              <label className="form-check-label" htmlFor="mediaRecordings">
                Media Recordings
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Student Annotation" id="studentAnnotation" />
              <label className="form-check-label" htmlFor="studentAnnotation">
                Student Annotation
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="File Uploads" id="fileUploads" />
              <label className="form-check-label" htmlFor="fileUploads">
                File Uploads
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <label>Assign to</label>
        </div>
        <div className="col-9">
          <input type="text" className="form-control" defaultValue="Everyone" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <label>Due</label>
        </div>
        <div className="col-9">
          <input type="datetime-local" className="form-control" defaultValue="2024-05-13T23:59" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <label>Available from</label>
        </div>
        <div className="col-9">
          <input type="datetime-local" className="form-control" defaultValue="2024-05-06T00:00" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <label>Until</label>
        </div>
        <div className="col-9">
          <input type="datetime-local" className="form-control" defaultValue="2024-05-20T23:59" />
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button onClick={cancelEdit} className="btn btn-secondary me-2">Cancel</button>
        <button onClick={saveAssignment} className="btn btn-success">Save</button>
      </div>
    </div>
  );
}
