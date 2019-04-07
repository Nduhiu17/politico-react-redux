import React, {Component} from 'react';
import LoginNavbar from "./loginNavbar";
import LoginBody from "./loginBody";
import LoginFooter from "./loginFooter";

class LoginPage extends Component {
    render() {
        return (
            <div>
                <LoginNavbar/>
                <LoginBody/>
                <LoginFooter/>
            </div>
        );
    }
}

export default LoginPage;