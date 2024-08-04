import React from "react";
import '../aboutMe/aboutMe.css';

export default function AboutMe() {
    return (
        <div className="aboutMe">
            <h1>About Me</h1>
            <p>This is a paragraph about me. I'm a software engineer with a passion for technology and design.</p>

            <a className='btn btn-outline-primary' href="../../src/assets/cv/cv.pdf" download >Download CV</a>

        </div>
    );
}
