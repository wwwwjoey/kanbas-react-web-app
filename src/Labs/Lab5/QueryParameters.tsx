import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

const QueryParameters: React.FC = () => {
  const [a, setA] = useState<number | string>(34);
  const [b, setB] = useState<number | string>(23);

  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input
        id="wd-query-parameter-a"
        className="form-control mb-2"
        value={a}
        type="number"
        onChange={(e) => setA(e.target.value)}
      />
      <input
        id="wd-query-parameter-b"
        className="form-control mb-2"
        value={b}
        type="number"
        onChange={(e) => setB(e.target.value)}
      />
      <div className="d-flex justify-content-between">
        <a
          id="wd-query-parameter-add"
          className="btn btn-primary me-2 flex-grow-1"
          href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Add {a} + {b}
        </a>
        <a
          id="wd-query-parameter-subtract"
          className="btn btn-danger me-2 flex-grow-1"
          href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Subtract {a} - {b}
        </a>
        <a
          id="wd-query-parameter-multiply"
          className="btn btn-success me-2 flex-grow-1"
          href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Multiply {a} * {b}
        </a>
        <a
          id="wd-query-parameter-divide"
          className="btn btn-warning flex-grow-1"
          href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Divide {a} / {b}
        </a>
      </div>
      <hr />
    </div>
  );
};

export default QueryParameters;
