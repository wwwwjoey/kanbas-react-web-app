import { FaSearch, FaPlusCircle, FaCheckCircle } from 'react-icons/fa';
import { BsThreeDotsVertical, BsGripVertical } from 'react-icons/bs';

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text" id="basic-addon1">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control"
            id="wd-search-assignment"
            placeholder="Search for Assignments"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </div>
        <div>
          <button className="btn btn-secondary me-2" id="wd-add-assignment-group">
            <FaPlusCircle className="me-1" />
            Group
          </button>
          <button className="btn btn-danger" id="wd-add-assignment">
            <FaPlusCircle className="me-1" />
            Assignment
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center bg-light p-2 rounded mb-3">
        <h3 id="wd-assignments-title" className="m-0">ASSIGNMENTS</h3>
        <div className="d-flex align-items-center">
          <span className="badge bg-secondary me-2">40% of Total</span>
          <button className="btn btn-outline-secondary btn-sm me-2">
            <FaPlusCircle />
          </button>
          <BsThreeDotsVertical />
        </div>
      </div>
      <ul id="wd-assignment-list" className="list-group">
        <li className="wd-assignment-list-item list-group-item mb-3 d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-4" />
            <div className="me-2" style={{ borderLeft: '3px solid green', paddingLeft: '8px' }}>
              <a className="wd-assignment-link fw-bold" href="#/Kanbas/Courses/1234/Assignments/123">
                A1 - ENV + HTML
              </a>
              <div className="text-muted">Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts</div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaCheckCircle className="text-success me-2" />
            <BsThreeDotsVertical />
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item mb-3 d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-4" />
            <div className="me-2" style={{ borderLeft: '3px solid green', paddingLeft: '8px' }}>
              <a className="wd-assignment-link fw-bold" href="#/Kanbas/Courses/1234/Assignments/234">
                A2 - CSS + BOOTSTRAP
              </a>
              <div className="text-muted">Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts</div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaCheckCircle className="text-success me-2" />
            <BsThreeDotsVertical />
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item mb-3 d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-4" />
            <div className="me-2" style={{ borderLeft: '3px solid green', paddingLeft: '8px' }}>
              <a className="wd-assignment-link fw-bold" href="#/Kanbas/Courses/1234/Assignments/345">
                A3 - JAVASCRIPT + REACT
              </a>
              <div className="text-muted">Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts</div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaCheckCircle className="text-success me-2" />
            <BsThreeDotsVertical />
          </div>
        </li>
      </ul>
    </div>
  );
}
