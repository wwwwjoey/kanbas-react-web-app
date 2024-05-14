export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
        <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">
                            CS1234 React JS
                        </a>
                        <p className="wd-dashboard-course-title">
                            Full Stack Software Developer
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/nodejs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5678/Home">
                            CS5678 Node.js
                        </a>
                        <p className="wd-dashboard-course-title">
                            Server-Side Development
                        </p>
                        <a href="#/Kanbas/Courses/5678/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/angular.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/2345/Home">
                            CS2345 Angular Development
                        </a>
                        <p className="wd-dashboard-course-title">
                            Advanced Frontend Frameworks
                        </p>
                        <a href="#/Kanbas/Courses/2345/Home"> Go </a>
                        </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/vuejs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/3456/Home">
                            CS3456 Vue JS
                        </a>
                        <p className="wd-dashboard-course-title">
                            Interactive Web Interfaces
                        </p>
                        <a href="#/Kanbas/Courses/3456/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/python.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/4567/Home">
                            CS4567 Python Programming
                        </a>
                        <p className="wd-dashboard-course-title">
                            Learn Python From Scratch
                        </p>
                        <a href="#/Kanbas/Courses/4567/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/machine_learning.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/6789/Home">
                            CS6789 Machine Learning
                        </a>
                        <p className="wd-dashboard-course-title">
                            Algorithms and Data Analysis
                        </p>
                        <a href="#/Kanbas/Courses/6789/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/data_science.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/7890/Home">
                            CS7890 Data Science
                        </a>
                        <p className="wd-dashboard-course-title">
                            Data Science and Statistics
                        </p>
                        <a href="#/Kanbas/Courses/7890/Home"> Go </a>
                    </div>
                </div>
                </div>

            </div>
    );
}
  