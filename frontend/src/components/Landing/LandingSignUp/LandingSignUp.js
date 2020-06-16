import React from 'react';
import './LandingSignUp.css';
const LandingSignUp = () => {
  return (
    <div className="contact-form">
      <div className="contact-form-heading">Sign up today!</div>
      <form action="" method="">
        <label htmlFor="email">
          <div>
            Email <span className="required">*</span>
          </div>
          <input
            type="text"
            className="input-field"
            name="email"
            /* value="" */
            required
          />
        </label>
        <label htmlFor="password">
          <div>
            Password <span className="required">*</span>
          </div>
          <input
            type="password"
            className="input-field"
            name="password"
            /* value="" */
            required
          />
        </label>
        <label htmlFor="confirmPassword">
          <div>
            Confirm password <span className="required">*</span>
          </div>
          <input
            type="password"
            className="input-field"
            name="confirmPassword"
            /* value="" */
            required
          />
        </label>
        <label className="submit-btn-wrap">
          <input
            type="submit"
            className="submit-btn landing-btn"
            value="Submit"
          />
        </label>
      </form>
    </div>
  );
};

export default LandingSignUp;
