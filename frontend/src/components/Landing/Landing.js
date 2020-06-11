import React from 'react';
import './Landing.css';
import LandingSignUp from '../Landing/LandingSignUp/LandingSignUp'

const Landing = () => {
  return (
    <>
      <section className='section-grid-2col'>
        <div className='hero-left-container'>
          <h2 className='hero-welcome'>Lira</h2>
          <p className='hero-cta-content'>Begin your path to mastering the Scrum method today!</p>
          <button className='hero-cta-btn'>get started!</button>
        </div>
        <div className='hero-right-container'>
          <p>こんにちは私の名前はコンテンツです</p>
        </div>
      </section>
      <section className='section-grid-2col'>
        <div className='marketing-content-left-col'>
          <p>こんにちは私の名前はコンテンツです</p>
        </div>
        <div className='marketing-content-right-col'>
          <p>Get to know the basics of the Scrum method - just as much as you need to start and learn more as you go!</p>
        </div>
      </section>
      <section className='section-grid-2col'>
        <div className='marketing-content-left-col'>
          <p>Forgot what you've just read in the info page ? Our quick tips got you covered</p>
        </div>
        <div className='marketing-content-right-col'>
          <p>こんにちは私の名前はコンテンツです</p>
        </div>
      </section>
      <section className='section-grid-2col'>
        <div className='marketing-content-left-col'>
          <p>こんにちは私の名前はコンテンツです</p>
        </div>
        <div className='marketing-content-right-col'>
          <p>Easily write userstories and move them around between the scrum lists</p>
        </div>
      </section>
      <section className='section-grid-2col'>
        <div className='marketing-content-left-col'>
          <p>Faciliate meetings like a boss... even thought there are no bosses in the Scrum method</p>
        </div>
        <div className='marketing-content-right-col'>
          <p>こんにちは私の名前はコンテンツです</p>
        </div>
      </section>
      <section className='section-grid-2col'>
        <div className='marketing-content-left-col'>
          <p>こんにちは私の名前はコンテンツです</p>
        </div>
        <div className='marketing-content-right-col'>
          <p>Put your scheduled meetings in the in-app calendar for all your teammates to see</p>
        </div>
      </section>
      <section className='contact'>
        <LandingSignUp />
      </section>
    </>
  );
};

export default Landing;
