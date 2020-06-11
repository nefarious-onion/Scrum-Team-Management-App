import React from 'react';
import './LandingSignUp.css'
const LandingSignUp = () => {
    return (
        <div class="contact-form">
            <div class="contact-form-heading">Sign up today!</div>
            <form action="" method="post">
                <label for="field1"><span>email<span class="required" >*</span></span><input type="text" class="input-field" name="field1" value="" required /></label>
                <label for="field2"><span>passowrd <span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" required /></label>
                <label for="field3"><span>confirm passowrd <span class="required">*</span></span><input type="text" class="input-field" name="field3" value="" required /></label>
                <label><span> </span><input type="submit" value="Submit" /></label>
            </form>
        </div>
    );
}

export default LandingSignUp;
