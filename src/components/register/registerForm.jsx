import React, {Component} from 'react';
import {connect} from "react-redux";
import { registerUser } from "../../actions/registerActions";

class RegisterForm extends Component {
          constructor(props){
      super(props);
      this.state = {
          firstname:'',
          lastname:'',
          othername:'',
          email:'',
          county:'',
          phonenumber:'',
          nationalid:'',
          passporturl:'',
          password:''
      };
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e){
      this.setState({[e.target.name]:e.target.value});
  }

  onSubmit(e){
      e.preventDefault();
      const newUser = {
          firstname:this.state.firstname,
          lastname:this.state.lastname,
          othername:this.state.othername,
          email:this.state.email,
          county:this.state.county,
          phonenumber:this.state.phonenumber,
          nationalid:this.state.nationalid,
          passporturl:this.state.passporturl,
          password:this.state.password
      };

      this.props.registerUser(newUser)

  }
    render() {
        return (
            <div>
                <form className="sign-up-form" onSubmit={this.onSubmit}>
                    <label>First Name</label>
                    <input type="text" placeholder="Your first name" id="signup-fname" name="firstname" onChange={this.onChange} value={this.state.firstname }/>
                    <label>Last Name</label>
                    <input type="text" placeholder="Your last name.." id="signup-lname" name="lastname" onChange={this.onChange} value={this.state.lastname }/>
                    <label>Other Name</label>
                    <input type="text" placeholder="Your other name.." id="signup-oname" name="othername" onChange={this.onChange} value={this.state.othername }/>
                    <label>Email</label>
                    <input type="email" placeholder="Your email.." id="signup-email" name="email" onChange={this.onChange} value={this.state.email }/>
                    <label>County</label>
                    <input type="text" placeholder="Your county..." id="signup-county" name="county" onChange={this.onChange} value={this.state.county }/>
                    <label>Phone Number</label>
                    <input type="text" placeholder="Your phone number.." id="signup-phone" name="phonenumber" onChange={this.onChange} value={this.state.phonenumber }/>
                    <label>National ID</label>
                    <input type="text" placeholder="Your national ID.." id="signup-nationalid" name="nationalid" onChange={this.onChange} value={this.state.nationalid }/>
                    <label>Passport Url</label>
                    <input type="text" placeholder="Your passport url.." id="signup-passporturl" name="passporturl" onChange={this.onChange} value={this.state.passporturl }/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter password.." id="signup-password" name="password" onChange={this.onChange} value={this.state.password }/>
                    <label>Repeat Password</label>
                    <input type="password" placeholder="Repeat password.." id="signup-rpassword"/>
                    <button id="login-button" type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { registerUser })(RegisterForm);
