import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <>
      <section className='section-grid-2col'>
        <div className='hero-left-container'>
          <h1 className='hero-welcome'>Lira</h1>
          <p className='hero-content'>thisislira</p>
          <button className='hero-cta'>CTA</button>
        </div>
        <div className='hero-right-container'>
          <p>hello im screenschot</p>
        </div>

      </section>
      <section className='section-grid-2col'>
        <div className='hero-left-container'>
          <h1 className='hero-welcome'></h1>
          <p className='hero-content'></p>
        </div>
        <div className='hero-right-container'>
          <p>hello im screenschot</p>
        </div>
      </section>
      <section className='section-grid-2col'>
        <div className='hero-left-container'>
          <h1 className='hero-welcome'></h1>
          <p className='hero-content'></p>
        </div>
        <div className='hero-right-container'>
          <p>hello im screenschot</p>
        </div>
      </section>
      <section className='productInfo-container section-grid-2col'></section>
      <section className='productInfo-container section-grid-2col'></section>
      <section className='productInfo-container section-grid-2col'></section>
      <section className='contact-container section-grid-2col'></section>
    </>
  );
};

export default Landing;
