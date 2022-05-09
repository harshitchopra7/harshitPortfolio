import React from 'react';
import './Projects.css';
import Project from './Project';
import tsc from '../images/tsc.png';
import kcart from '../images/kcart.png';
import clg from '../images/clg.png';
import port from '../images/port.png';

function Projects() {
    return (
        <div className="projects">
            <div className="component_title">
                <p>Projects</p>
            </div>
            <div className="project_div">
                <Project 
                    image={tsc}
                    title="Takshshila Student Community (Desktop Web App)"
                    line1="Built a platform where students of a college can interact with each other."
                    line2="Here, students can ask anything they are curious about."
                    line3="They can also sell off their non needy things."
                    line4="Or can buy things that they need from the listings."
                    line5="It's database is managed on Firestore and is hosted on Firebase. "
                    line6="Technologies - Reactjs, JavaScript, Redux, HTML, CSS, Firebase."
                    link="https://takshshila-tsc.web.app/"
                />
                <Project 
                    image={kcart}
                    title="KCart Shopping (Desktop Web App)"
                    line1="This an ecommerce website where user can buy various items."
                    line2="The user can register them and can use same credentials for signing in."
                    line3="The user can add items to cart and remove them as well."
                    line4="Reusable components are built to showcase different items."
                    line5="It's database is managed on Firestore and is hosted on Firebase."
                    line6="Technologies - Reactjs, JavaScript, Redux, HTML, CSS, Firebase."
                    link="https://k-cart.web.app/"
                />
                <Project 
                    image={port}
                    title="My Portfolio (Responsive)"
                    line1="This Portfolio too is built using React."
                    line2="It is a website which answers to the question who am I?"
                    line3="And what have I done."
                    line4="It is hosted on Firebase."
                    line5="Have a look at it, and please feel free to contact anytime."
                    line6="Technologies - Reactjs, JavaScript, HTML, CSS, Firebase."
                    link="https://harshit-portfolio99.web.app/"
                />
                <Project 
                    image={clg}
                    title="College Website (Desktop Web App)"
                    line1="This was the first project that I created when I started development."
                    line2="This is a simple website where the students can see informations about"
                    line3="a number of different branches that are available in our college."
                    line4="This website is built on React using reusable components."
                    line5="It is hosted on Firebase."
                    line6="Technologies - Reactjs, JavaScript, HTML, CSS, Firebase."
                    link="https://taks-b7f55.web.app/"
                />
            </div>
        </div>
    )
}

export default Projects;
