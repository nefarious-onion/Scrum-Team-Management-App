import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


const SideNavAbout = ({ id }) => {

    return (
        <ul className="side-navbar">
            <li>
                <Link className="side-navbar-item" to="section1" smooth={true}>What is scrum</Link>
            </li>
            <li>
                <Link className="side-navbar-item" to="section1" smooth={true}>Roles</Link>
            </li>
            <li>
                <Link className="side-navbar-item" to="section1" smooth={true}>Workflow</Link>
            </li>
            <li>
                <Link className="side-navbar-item" to="section1" smooth={true}>Artifacts</Link>
            </li>

        </ul >
    );
}

export default SideNavAbout;
