import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import LandingSignUp from '../Landing/LandingSignUp/LandingSignUp';
import career1 from '../../assets/career__flatline.svg';
//import career2 from '../../assets/career2__flatline.svg';
import checklist from '../../assets/checklist__flatline.svg';
//import completed_task from '../../assets/completed_task__flatline.svg';
//import creative_process from '../../assets/creative_process__flatline.svg';
//import graphic_chart from '../../assets/graphic_chart__flatline.svg';
import moving_forward from '../../assets/moving_forward__flatline.svg';
//import office_work from '../../assets/office_work__flatline.svg';
import problem_solving from '../../assets/problem_solving__flatline.svg';
import reminder_note from '../../assets/reminder_note__flatline.svg';
//import rocketplanning from '../../assets/rocketplanning__flatline.svg';
import scrum_board from '../../assets/scrum_board__flatline.svg';
import team_meeting from '../../assets/team_meeting__flatline.svg';
//import team_presentation from '../../assets/team_presentation__flatline.svg';
//import team_presentation2 from '../../assets/team_presentation2__flatline.svg';

const Landing = () => {
  return (
    <>
      <section className="section-grid-2col">
        <div className="hero-left-container">
          <h2 className="hero-welcome">Lira</h2>
          <p className="hero-cta-content">
            Begin your path to mastering the Scrum method today!
          </p>
          <Link className="hero-cta-btn" to="/about">
            <button className="primary-btn">Get started!</button>
          </Link>
        </div>
        <div className="hero-right-container">
          <img src={career1} alt="career up" />
        </div>
      </section>
      <section className="section-grid-2col">
        <div className="marketing-content-left-col">
          <img src={moving_forward} alt="moving forward" />
        </div>
        <div className="marketing-content-right-col">
          <p>
            Get to know the basics of the Scrum method - just as much as you
            need to start and learn more as you go!
          </p>
        </div>
      </section>
      <section className="section-grid-2col">
        <div className="marketing-content-left-col">
          <p>
            Forgot what you've just read in the info page? Our quick tips got
            you covered
          </p>
        </div>
        <div className="marketing-content-right-col">
          <img src={checklist} alt="checklist" />
        </div>
      </section>
      <section className="section-grid-2col">
        <div className="marketing-content-left-col">
          <img src={scrum_board} alt="scrum board" />
        </div>
        <div className="marketing-content-right-col">
          <p>
            Easily write userstories and move them around between the scrum
            lists
          </p>
        </div>
      </section>
      <section className="section-grid-2col">
        <div className="marketing-content-left-col">
          <p>
            Faciliate meetings like a boss... even thought there are no bosses
            in the Scrum method
          </p>
        </div>
        <div className="marketing-content-right-col">
          <img src={team_meeting} alt="team meeting" />
        </div>
      </section>
      <section className="section-grid-2col">
        <div className="marketing-content-left-col">
          <img src={reminder_note} alt="reminder note" />
        </div>
        <div className="marketing-content-right-col">
          <p>
            Put your scheduled meetings in the in-app calendar for all your
            teammates to see
          </p>
        </div>
      </section>
      <section className="section-grid-2col contact">
        <div className="marketing-content-left-col">
          <LandingSignUp />
        </div>
        <div className="marketing-content-right-col">
          <img src={problem_solving} alt="problem solving" />
        </div>
      </section>
    </>
  );
};

export default Landing;
