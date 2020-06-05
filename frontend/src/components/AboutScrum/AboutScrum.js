import React from 'react';
import SideNavAbout from '../SideNavAbout/SideNavAbout'
import './AboutScrum.css'
const AboutScrum = ({ Roles }) => {
    return (
        <>
            <div className="about-container">
                <SideNavAbout />
                <div className="about-item" >
                    <h2>hello</h2>
                </div>
                <div className="about-item" ref={Roles}>
                    <h2>hello</h2>
                </div>
            </div>
        </>
    );
}

export default AboutScrum;
