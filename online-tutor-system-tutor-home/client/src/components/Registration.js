import React, {Component} from 'react'


class Registration extends Component {
    render(){
        return(
            <div className="">
                <form>
                <h1>Please Fill out the form with your Information!</h1>

                <h2>Student Information</h2>
												
					<input type="text" name="first-name" id="first-name" placeholder="First Name" />
					<input type="text" name="last-name" id="last-name" placeholder="Last Name" />
					<input type="text" name="birthdate" id="birthdate" placeholder="Date Of Birth" />
				<p>Gender:</p>
 					<input type="radio" id="male" name="gender" value="male"/>
  					<label for="male">Male</label>
  					<input type="radio" id="female" name="gender" value="female"/>
  					<label for="female">Female</label>
  					<input type="radio" id="other" name="gender" value="other"/>
  					<label for="other">Other</label>
  													
												
					<input type="text" name="email" id="email" placeholder="Email Address" />
					<input type="text" name="phone" id="phonenumber" placeholder="Phone Number" /><br></br>
					<input type="text" name="street" id="street-add" placeholder="Street Address" />
					<input type="text" name="city" id="city" placeholder="City" />
					<input type="text" name="province" id="province" placeholder="Province" />
					<input type="text" name="postal-code" id="postal-code" placeholder="Postal Code" />
										
				<p>Select a Username:</p>
					<input type="text" name="username" id="username" placeholder="Username" /><br></br>
					<input type="text" name="pwd" id="pwd" placeholder="Password" /><br/>
					<input type="text" name="confirm-pwd" id="confirm-pwd" placeholder="Confirm Password" />
            </form>
                        
            </div>
        );
    }
}
export default Registration;