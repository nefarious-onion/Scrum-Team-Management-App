import React from 'react';
import { Link } from 'react-router-dom';
import '../SideNav.css';

const SideNavMeet = ({ meetingsUrl }) => {
  return (
    <div className="side-navbar">
      <h4>Meetings</h4>
      <ul>
        <li>
          <Link to={`${meetingsUrl}`}>Overview</Link>
        </li>
        <li>
          <Link to={`${meetingsUrl}/project-planning`}>Project Planning</Link>
        </li>
        <li>
          <Link to={`${meetingsUrl}/sprint-planning`}>Sprint Planning</Link>
        </li>
        <li>
          <Link to={`${meetingsUrl}/daily`}>Daily</Link>
        </li>
        <li>
          <Link to={`${meetingsUrl}/review`}>Review</Link>
        </li>
        <li>
          <Link to={`${meetingsUrl}/retrospective`}>Retrospective</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavMeet;
