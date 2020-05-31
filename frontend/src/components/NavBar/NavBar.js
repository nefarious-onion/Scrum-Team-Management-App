import React from 'react';
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav>
            <Link to='/'><h1 className="logo">LIRA</h1></Link>
            <ul>
                <li className='nav'>
                    <Link to='/backlog'>Product Backlog</Link>
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
        </nav>
    );
}

export default NavBar;
