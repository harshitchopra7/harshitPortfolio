import React from 'react';
import './Banner.css';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

function Banner() {
    return (
        <div className="banner">
            <div className="banner_title1">
                <p><span className="emerge">Hi,</span> my name is</p>
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
                    I love working on front end web development projects. 
                    I have developed <span className="emerge">2 real world websites</span> till now that are
                    currently being <span className="emerge">used by the people all over India</span>, and 
                    developing the third one.
                    I am a 3 star C++ and a 3 star Python coder at HackerRank.
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
            <div className="mail_btn">
                <a href="mailto: chopraharshit2000@gmail.com">
                    <button className="mail_btnn">Get in Touch</button>
                </a>
            </div>
        </div>
    )
}

export default Banner;
