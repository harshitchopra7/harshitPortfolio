import React from "react";
import "./Projects.css";
import Project from "./Project";
import { projectsList } from "../../constants/projects";

function Projects() {
  return (
    <div className="projects">
      <div className="component_title">
        <p>Projects</p>
      </div>
      <div className="project_div">
        {projectsList.map((val, index) => (
          <Project
            image={val.IMG}
            title={val.TITLE}
            line1={val.LINE1}
            line2={val.LINE2}
            line3={val.LINE3}
            line4={val.LINE4}
            line5={val.LINE5}
            line6={val.LINE6}
            link={val.LINK}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
