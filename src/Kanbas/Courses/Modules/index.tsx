import React, { useState, useEffect  } from "react";
import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import * as client from "./client";
import { deleteModule, addModule,  updateModule,  setModules, editModule } from "./reducer";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { useDispatch } from "react-redux";
import { modules } from "../../Database";


export default function Modules() {
  const saveModule = async (module: any) => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const { cid } = useParams();
  const dispatch = useDispatch();
  const createModule = async (module: any) => {
    const newModule = await client.createModule(cid as string, module);
    dispatch(addModule(newModule));
  };

  const [moduleName, setModuleName] = useState("");

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);




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
    <div className="wd-modules">
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
        addModule={() => {
          createModule({ name: moduleName, course: cid });
          setModuleName("");
        }} />
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
               onChange={(e) => saveModule({ ...module, name: e.target.value })}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                  saveModule({ ...module, editing: false });
                 }
               }}
               value={module.name}/>
      )}
                  {module.name}
                  <ModuleControlButtons moduleId={module._id}
        deleteModule={(moduleId) => { removeModule(moduleId); }}
        editModule={(moduleId) => dispatch(editModule(moduleId))} />

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

function dispatch(arg0: void) {
  throw new Error("Function not implemented.");
}
