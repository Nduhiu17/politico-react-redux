import React, {Component} from 'react';

class RegisterNavbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="nav-logo">
                        <div className="logo-img">
                            <img src={require('../images/logo.jpg')} alt="logo" className="logo"/>
                        </div>
                        <div className="logo-text">
                            Politico
                        </div>
                    </div>
                    <div className="nav-items">
                        <div className="sign-up">
                        </div>
                        <div className="sign-in">
                        </div>
                        <div className="profile-div">
                        </div>
                        <div className="profile-div">
                            <a href="signin.html">Sign in</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterNavbar;