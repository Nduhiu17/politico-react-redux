import React, {Component} from 'react';
import RegisterForm from "./registerForm";

class RegisterBody extends Component {
    render() {
        return (
            <div>
                <div className="main-form-container" id="register-main-div">
                    <div className="left-form-container">

                    </div>
                    <div className="container-form">
                        <div className="sign-up-heading">
                            Register
                        </div>
                    <RegisterForm/>
                    </div>
                    <div className="right-form-container">

                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterBody;