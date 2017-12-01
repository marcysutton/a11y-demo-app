import React from 'react';

const SignupForm = (
	<div className="signup">
		<h1>Sign Up</h1>
		<div className="field">
			<span>Name</span>
      <input type="text" name="name" />
    </div>
    <div className="field">
			<span>Email</span>
      <input type="text" name="email" />
    </div>
    <div className="field">
    	<span>Subscribe to our newsletter?</span>
    	<input type="checkbox" name="subscribe" value="Yes" />
    </div>
    <button className="submit-btn">Submit</button>
  </div>
)
export default SignupForm
