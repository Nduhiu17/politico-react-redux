import React, {Component} from 'react';
import LoginForm from './loginForm';

class LoginBody extends Component {
    render() {
        return (
            <div>
                <div className="main-form-container">
                    <div className="left-form-container">

                    </div>
                    <div className="container-form">
                        <div className="sign-in-heading">
                            Login
                        </div>
                        <LoginForm/>
                    </div>
                    <div className="right-form-container">

                    </div>
                </div>
            </div>
        );
    }
}

export default LoginBody;