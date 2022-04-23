import bootstrap from "../images/bootstrap.svg";
import c from "../images/c.png";
import css from "../images/css.svg";
import firebase from "../images/firebase.png";
import github from "../images/github.png";
import html from "../images/html.svg";
import js from "../images/js.png";
import material from "../images/material.svg";
import react from "../images/react.svg";
import woo from "../images/woo.svg";
import wordpress from "../images/wordpress.png";

const IMAGE = {
  REACT: react,
  JS: js,
  HTML: html,
  CSS: css,
  FIREBASE: firebase,
  C: c,
  GITHUB: github,
  BOOTSTRAP: bootstrap,
  MATERIAL: material,
  WORDPRESS: wordpress,
};

const NAME = {
  REACT: "React",
  JS: "JavaScript",
  HTML: "HTML 5",
  CSS: "CSS 3",
  FIREBASE: "Firebase",
  C: "C++",
  GITHUB: "Github",
  BOOTSTRAP: "Bootstrap",
  MATERIAL: "Material UI",
  WORDPRESS: "Wordpress",
};

const LINK = {
  REACT: "https://reactjs.org/docs/getting-started.html",
  JS: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterators",
  HTML: "https://dev.w3.org/html5/html-author/",
  CSS: "https://devdocs.io/css/",
  FIREBASE: "https://firebase.google.com/docs/guides",
  C: "https://www.w3schools.com/cpp/cpp_intro.asp",
  GITHUB: "https://docs.github.com/en/github",
  BOOTSTRAP: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
  MATERIAL: "https://www.w3schools.com/cpp/cpp_intro.asp",
  WORDPRESS: "",
};

export const techStackList = [
  {
    img: IMAGE.REACT,
    name: NAME.REACT,
    link: LINK.REACT,
  },
  {
    img: IMAGE.JS,
    name: NAME.JS,
    link: LINK.JS,
  },
  {
    img: IMAGE.HTML,
    name: NAME.HTML,
    link: LINK.HTML,
  },
  {
    img: IMAGE.CSS,
    name: NAME.CSS,
    link: LINK.CSS,
  },
  {
    img: IMAGE.FIREBASE,
    name: NAME.FIREBASE,
    link: LINK.FIREBASE,
  },
  {
    img: IMAGE.C,
    name: NAME.C,
    link: LINK.C,
  },
  {
    img: IMAGE.GITHUB,
    name: NAME.GITHUB,
    link: LINK.GITHUB,
  },
  {
    img: IMAGE.BOOTSTRAP,
    name: NAME.BOOTSTRAP,
    link: LINK.BOOTSTRAP,
  },
  {
    img: IMAGE.MATERIAL,
    name: NAME.MATERIAL,
    link: LINK.MATERIAL,
  },
  {
    img: IMAGE.WORDPRESS,
    name: NAME.WORDPRESS,
    link: "",
  },
];
