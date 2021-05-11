import React from 'react';
import './Banner.css';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

function Banner() {
    return (
        <div className="banner">
            <div className="banner_title1">
                <p>Hi, my name is</p>
            </div>
            <div className="banner_title2">
                <p>Harshit Chopra.</p>
            </div>
            <div className="banner_desc1">
                <p>I am a passionate web developer fascinated by the tech world.</p>
            </div>
            <div className="banner_desc2">
                <p>
                    I am a 3rd year undergrad student pursuing Computer Science Engineering.
                    I love working on <br />front end web development projects. 
                    I have developed 2 real world websites till now <br /> that are
                    currently being used by the people all over India, and 
                    developing the <br /> third one.
                    I am 3 star c++ and a 3 star python coder at HackerRank.
                </p>
            </div>
            <div className="social_logo">
                <div className="social_logo1">
                    <a href="https://www.linkedin.com/in/harshit-chopra-b98a94189/" target="_blank">
                        <img className="social_logo_image" src={linkedin} alt="" />
                    </a>
                </div>
                <div className="social_logo1">
                <a href="https://github.com/harshitchopra7" target="_blank">
                    <img className="social_logo_image" src={github} alt="" />
                </a>
                </div>
            </div>
        </div>
    )
}

export default Banner;
