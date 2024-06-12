import React, { useState } from "react";

const REMOTE_SERVER = 'http://localhost:10000';

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState<any>(null);

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  const getModule = async () => {
    const response = await fetch(MODULE_API_URL);
    const data = await response.json();
    setModule(data);
  };

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input className="form-control w-75" id="wd-assignment-title"
        value={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })} />
      <hr />

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr />
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr />

      <h4>Retrieving Module</h4>
      <button id="wd-retrieve-module" className="btn btn-primary" onClick={getModule}>
        Get Module
      </button>
      {module && (
        <div>
          <pre>{JSON.stringify(module, null, 2)}</pre>
        </div>
      )}
      <hr />
      <h4>Retrieving Module Name</h4>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Name
      </a><hr />
    </div>
  );
}
