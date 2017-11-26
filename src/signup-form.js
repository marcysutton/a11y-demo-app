import React from 'react';

const SignupForm = (
	<div className="signup">
		<h1>Sign Up</h1>
		<label className="field">
			<span>Name</span>
      <input type="text" name="name" />
    </label>
    <label className="field">
			<span>Email</span>
      <input type="text" name="email" />
    </label>
    <label className="field">
    	<span>Unisex t-shirt size</span>
    	<div>
	    	<input type="radio" name="size" value="XS" />
	    	<input type="radio" name="size" value="S" />
	    	<input type="radio" name="size" value="M" />
	    	<input type="radio" name="size" value="L" />
	    	<input type="radio" name="size" value="XL" />
	    </div>
    </label>
    <button className="submit-btn">Submit</button>
  </div>
)
export default SignupForm
