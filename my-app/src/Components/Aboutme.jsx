import React from "react";
import './Aboutme.css'
import me from '../Images/MeInWhite.jpeg'
function AboutMe(){
    return (
        <>
        <div className="about-me">
            <img src = {me} alt="me" className="profile"/>
            <div className="text">
                <p>
                    My name is Arafat Chowdhury, and I’m 22 years old. 
                    I have a degree in Computer Science with a minor in Psychology.
                    In my free time, I enjoy looking at design work—I’m a visual person and love creative things. 
                </p>
            </div>
        </div>
        </>
    );
}

export default AboutMe;