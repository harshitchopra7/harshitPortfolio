import React from 'react';
import './Banner.css';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from "typewriter-effect";

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
                <p>I am an SDE intern at <span className="emerge">Swiggy</span>.</p>
                {/* <p>a passionate web developer, fascinated by the tech world.</p> */}
                {/* <p>I am a passionate web developer, fascinated by the tech world.</p> */}
                {/* <p>I am
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("an SDE intern at Swiggy")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("a web developer")
                                .start();
                        }}
                    />
                </p> */}
            </div>
            <div className="banner_desc2">
                <p>
                    I am a final year undergrad pursuing Computer Science Engineering.
                    I love working on front end web development projects.<br />
                    I have developed <span className="emerge">3 real world websites</span> till now that are
                    currently being <span className="emerge">used by the people all over India</span>.<br />
                    I am a 3 star C++ and a 3 star Python coder at HackerRank.
                </p>
            </div>
            <div className="social_logo">
                <div className="social_logo1">
                    <a href="https://www.linkedin.com/in/harshit-chopra-b98a94189/" target="_blank" rel="noreferrer">
                        <img className="social_logo_image" src={linkedin} alt="" />
                    </a>
                </div>
                <div className="social_logo1">
                    <a href="https://github.com/harshitchopra7" target="_blank" rel="noreferrer">
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
