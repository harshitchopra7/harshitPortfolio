import React from "react";
import "./TechStack.css";
import ToolsImg from "./ToolsImg";
import { techStackList } from "../../constants/techStack";

function TechStack() {
  return (
    <div className="techstack">
      <div className="component_title">
        <p>Tech Stack</p>
      </div>
      <div className="ts_images">
        {techStackList.map((val, index) => (
          <ToolsImg img={val.img} name={val.name} link={val.link} />
        ))}
      </div>
    </div>
  );
}

export default TechStack;
