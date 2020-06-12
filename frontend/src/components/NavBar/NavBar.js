import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <Link className="nav-link" to="/">
        <h1 className="logo">LIRA</h1>
      </Link>
      <ul>
        <li className="nav-item">
          <Link className="nav-link" to="/backlog">
            Product Backlog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/scrumboard">
            Scrum Board
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/meetings">
            Meetings
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/eventplanning">
            Event Planning
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/calendar">
            Calendar
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/overview">
            Project Overview
          </Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About Scrum
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
