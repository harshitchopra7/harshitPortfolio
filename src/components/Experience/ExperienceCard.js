import React from 'react'
import './ExperienceCard.css';
import react from '../images/react.svg';
import html from '../images/html.svg';
import css from '../images/css.svg';
import c from '../images/c.png';
import bootstrap from '../images/bootstrap.svg';
import firebase from '../images/firebase.png';
import github from '../images/github.svg';
import js from '../images/js.png';
import material from '../images/material.svg';
import wordpress from '../images/wordpress.png';
import woo from '../images/woo.svg';

function ExperienceCard({ title, line1, line2, line3, line4, line5, img1, img2, img3, img4, img5, img6, img7, img8 }) {
    return (
        <div className="ex">
            <div className="ex_title">
                <p>{title}</p>
            </div>
            <div className="ex_desc">
                <p>{line1}</p>
                <p>{line2}</p>
                <p>{line3}</p>
                <p>{line4}</p>
                <p>{line5}</p>
            </div>
            <div className="ex_tech">
                <div className="ex_tech_title">
                    <p>Tech Used</p>
                </div>
                <div className="ex_tech_img">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard
