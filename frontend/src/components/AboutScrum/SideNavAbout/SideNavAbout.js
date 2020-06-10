import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


const SideNavAbout = () => {

    return (
        <ul className="side-navbar">
            <li>
                <Link className="side-navbar-item" to="scrum" smooth={true}>What is scrum</Link>
            </li>
            <li>
                <Link className="side-navbar-item" to="roles" smooth={true}>Roles</Link>
            </li>
            <li>
                <Link className="side-navbar-item" to="events" smooth={true}>Workflow</Link>
            </li>
            <li>
                <Link className="side-navbar-item" to="artifacts" smooth={true}>Artifacts</Link>
            </li>

        </ul >
    );
}

export default SideNavAbout;
