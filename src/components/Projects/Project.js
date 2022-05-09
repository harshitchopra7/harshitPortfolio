import React from 'react';
import './Project.css';

function Project( { image, title, line1, line2, line3, line4, line5, line6, link }) {

    const arrow = ">";

    return (
        <div className="project">
            <div className="project_image">
                <img src={image} alt="" />
            </div>
            <div className="project_title">
                {title}
            </div>
            <div className="project_desc">
                <p>{arrow} {line1}</p>
                <p>{arrow} {line2}</p>
                <p>{arrow} {line3}</p>
                <p>{arrow} {line4}</p>
                <p>{arrow} {line5}</p>
                <p>{arrow} {line6}</p>
            </div>
            <div className="project_link">
                <p><span className="emerges">Link</span> - 
                    <a className="project_link_link" href={link}>
                        {link}
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Project;
