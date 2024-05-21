export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2>
        <hr />
        <div id="wd-dashboard-courses" className="row">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" alt="React JS"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack Software Developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/nodejs.jpg" alt="Node.js"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5678/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS5678 Node.js
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Server-Side Development
                </p>
                <a href="#/Kanbas/Courses/5678/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
  
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/angular.jpg" alt="Angular Development"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/2345/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS2345 Angular Development
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Advanced Frontend Frameworks
                </p>
                <a href="#/Kanbas/Courses/2345/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
  
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/vuejs.jpg" alt="Vue JS"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/3456/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS3456 Vue JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Interactive Web Interfaces
                </p>
                <a href="#/Kanbas/Courses/3456/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
  
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/python.jpg" alt="Python Programming"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/4567/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS4567 Python Programming
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Learn Python From Scratch
                </p>
                <a href="#/Kanbas/Courses/4567/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
  
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/machine_learning.jpg" alt="Machine Learning"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/6789/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS6789 Machine Learning
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Algorithms and Data Analysis
                </p>
                <a href="#/Kanbas/Courses/6789/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
  
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/data_science.jpg" alt="Data Science"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/7890/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS7890 Data Science
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Data Science and Statistics
                </p>
                <a href="#/Kanbas/Courses/7890/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  