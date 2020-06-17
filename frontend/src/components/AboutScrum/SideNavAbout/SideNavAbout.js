import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import creative_process from '../../../assets/creative_process_green.svg';

const SideNavAbout = () => {
  return (
    <ul className="side-navbar">
      <h4>About scrum</h4>
      <li>
        <Link className="side-navbar-item" to="scrum" smooth={true}>
          What is scrum
        </Link>
      </li>
      <li>
        <Link className="side-navbar-item" to="roles" smooth={true}>
          Roles
        </Link>
      </li>
      <li>
        <Link className="side-navbar-item" to="events" smooth={true}>
          Workflow
        </Link>
      </li>
      <li>
        <Link className="side-navbar-item" to="artifacts" smooth={true}>
          Artifacts
        </Link>
      </li>
      <li>
        <img src={creative_process} alt="creative process" />
      </li>
    </ul>
  );
};

export default SideNavAbout;
