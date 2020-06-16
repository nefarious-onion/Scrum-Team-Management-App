import React from 'react';
import './LandingSignUp.css'
const LandingSignUp = () => {
    return (
        <div class="contact-form">
            <div class="contact-form-heading">Sign up today!</div>
            <form action="" method="post">
                <label for="email"><span>email<span class="required" >*</span></span><input type="text" class="input-field" name="email" value="" required /></label>
                <label for="password"><span>password <span class="required">*</span></span><input type="text" class="input-field" name="password" value="" required /></label>
                <label for="confirmPassword"><span>confirm password <span class="required">*</span></span><input type="text" class="input-field" name="confirmPassword" value="" required /></label>
                <label><span> </span><input type="submit" value="Submit" /></label>
                {
                    //if span is removed, submit will go out of its slot - check this on last week polish
                }
            </form>
        </div>
    );
}

export default LandingSignUp;
