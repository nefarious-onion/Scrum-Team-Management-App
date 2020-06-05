import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
const useMountEffect = (fun) => useEffect(fun, [])


const SideNavAbout = () => {
    const Roles = useRef(null)
    useMountEffect(() => scrollToRef(Roles))
    return (
        <ul className="side-navbar">
            <li>
                <Link className="side-navbar-item" onClick={() => scrollToRef(Roles)} >What is scrum</Link>
            </li>
            <li>
                <Link className="side-navbar-item"  >Roles</Link>
            </li>
            <li>
                <Link className="side-navbar-item"   >Workflow</Link>
            </li>
            <li>
                <Link className="side-navbar-item"   >Artifacts</Link>
            </li>

        </ul >
    );
}

export default SideNavAbout;
