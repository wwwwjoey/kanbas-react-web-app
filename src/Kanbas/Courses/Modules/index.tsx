import React, { useState } from "react";
import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import * as db from "../../Database";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [modules, setModules] = useState<any[]>(db.modules);
  const [moduleName, setModuleName] = useState("");
  const addModule = () => {
    setModules([ ...modules, { _id: new Date().getTime().toString(),
                                     name: moduleName, course: cid, lessons: [] } ]);
    setModuleName("");
  };
  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
  };
  const editModule = (moduleId: string) => {
    setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
  };
  const updateModule = (module: any) => {
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  };




  return (
    <div>
      <div>
        <button>Collapse All</button>
        <button>View Progress</button>
        <select>
          <option value="">Publish All</option>
          <option value="module1">Don't Publish</option>
          <option value="module2">Publish</option>
        </select>
        <button>+ Module</button>
      </div>
      <div id="wd-modules">
        <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={addModule}/><br /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
          {modules
          .filter((module) => module.course === cid)
          .map((module: any) => (
              <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical className="me-2 fs-3" />
                  {!module.editing && module.name}
      { module.editing && (
        <input className="form-control w-50 d-inline-block"
               onChange={(e) => updateModule({ ...module, name: e.target.value })}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                   updateModule({ ...module, editing: false });
                 }
               }}
               value={module.name}/>
      )}
                  {module.name}
                  <ModuleControlButtons moduleId={module._id}
        deleteModule={deleteModule}
        editModule={editModule}/>
                </div>
                {module.lessons && (
                  <ul className="wd-lessons list-group rounded-0">
                    {module.lessons.map((lesson: any) => (
                      <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        {lesson.name}
                        <LessonControlButtons />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}