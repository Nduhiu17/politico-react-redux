import React, {Component} from 'react';
import propTypes from 'prop-types';
import { loginUser } from "../../actions/loginActions";
import {connect} from "react-redux";


class LoginForm extends Component {
      constructor(props){
      super(props);
      this.state = {
          email:'',
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
      const user = {
          email:this.state.email,
          password:this.state.password
      };

      this.props.loginUser(user)
  }


    render() {
        return (
            <div>
              <form className="sign-up-form" onSubmit={this.onSubmit}>
                    <label>Email</label>
                    <input type="email" placeholder="Your email.." id="login-email" name="email" onChange={this.onChange} value={this.state.email }/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter password.." id="login-password" name="password" onChange={this.onChange} value={this.state.password }/>
                    <p className="reset-password-login">Forgot your password?Click <a
                                href="reset-password.html">here to create</a> a new password.</p>
                   <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    loginUser: propTypes.func.isRequired
}

export default connect(null,{ loginUser })(LoginForm);