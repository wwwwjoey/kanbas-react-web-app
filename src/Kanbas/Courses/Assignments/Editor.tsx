import React from 'react';
import { useParams, Link } from 'react-router-dom';
import assignmentData from '../../Database/assignments.json';

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const assignments = assignmentData as any[];
  const assignment = assignments.find(assignment => assignment._id === aid);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignment-editor" className="p-3">
      <h2 className="mb-4">{assignment.title}</h2>
      <div className="mb-3">
        <label>Assignment Name</label>
        <input
          type="text"
          className="form-control"
          defaultValue={assignment.title}
        />
      </div>
      <div className="mb-3">
        <label>Description</label>
        <textarea
          className="form-control"
          rows={8}
          defaultValue={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
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
            defaultValue="100"
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
        <Link to={`/courses/${cid}/assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <Link to={`/courses/${cid}/assignments`} className="btn btn-success">Save</Link>
      </div>
    </div>
  );
}

