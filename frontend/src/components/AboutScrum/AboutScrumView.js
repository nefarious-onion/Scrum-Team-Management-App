import React, { useState, useEffect } from 'react';
import '../../api_services/contentful.services';
import { getAllEntries } from '../../api_services/contentful.services';
import AboutList from './AboutList/AboutList';
import SideNavAbout from './SideNavAbout/SideNavAbout';
import './AboutScrum.css';

const AboutScrumView = () => {
  const [aboutScrumList, setAboutScrumList] = useState([]);

  useEffect(() => {
    getAllEntries()
      .then((list) => setAboutScrumList(list))
      .catch((error) => {
        console.log(new Error(error));
      });
  }, []);
  return (
    <div className="sidenav-grid">
      <div>
        <SideNavAbout />
      </div>
      <div className="about-container">
        <AboutList aboutList={aboutScrumList} />
      </div>
    </div>
  );
};

export default AboutScrumView;
