import React from 'react';
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <ul>
                <li className='nav'>
                    <Link to='/'>Product Backlog</Link>
                </li>
                <li className='nav'>
                    <Link to='/scrumboard'>Scrum Board</Link>
                </li>
                <li className='nav'>
                    <Link to='/meetings'>Meetings</Link>
                </li>
                <li className='nav'>
                    <Link to='/calendar'>Calendar</Link>
                </li>
                <li className='nav'>
                    <Link to='/overview'>Project Overview</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
