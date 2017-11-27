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
    	<span>Unisex t-shirt size</span>
    	<div>
	    	<input type="radio" name="size" value="XS" />
	    	<input type="radio" name="size" value="S" />
	    	<input type="radio" name="size" value="M" />
	    	<input type="radio" name="size" value="L" />
	    	<input type="radio" name="size" value="XL" />
	    </div>
    </div>
    <button className="submit-btn">Submit</button>
  </div>
)
export default SignupForm
