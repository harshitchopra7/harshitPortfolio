import React from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";
import { experienceList } from "../../constants/experience";

function Experience() {
  return (
    <div className="experience">
      <div className="component_title">
        <p>Experience</p>
      </div>

      <div className="ex_card">
        {experienceList.map((val, index) => (
          <ExperienceCard
            title={val.COMPANY_NAME}
            line1={val.SENTENCE_1}
            line2={val.SENTENCE_2}
            line3={val.SENTENCE_3}
            line4={val.SENTENCE_4}
            line5={val.SENTENCE_5}
            img1={val.img1}
            img2={val.img2}
            img3={val.img3}
            img4={val.img4}
            img5={val.img5}
            img6={val.img6}
            img7={val.img7}
            img8={val.img8}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
