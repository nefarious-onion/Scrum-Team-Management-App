import React, { useState, useEffect } from 'react';
import '../../api_services/contentful.services'
import { getAllEntries } from '../../api_services/contentful.services';
import AboutList from './AboutList/AboutList'
import SideNav from './SideNavAbout/SideNavAbout'
import './AboutScrum.css'

const AboutScrumView = () => {

    const [aboutScrumList, setAboutScrumList] = useState([]);

    useEffect(() => {
        getAllEntries()
            .then(list =>
                setAboutScrumList(list)
            )
            .catch((error) => {
                console.log(new Error(error))
            })
    }, []);
    return (
        <div className="about-container">
            <div>
                <SideNav />
            </div>
            <div>

                <AboutList aboutList={aboutScrumList} />
            </div>
        </div>
    );
}

export default AboutScrumView;
