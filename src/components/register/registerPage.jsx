import React, {Component} from 'react';
import RegisterNavbar from "./registerNavbar";
import RegisterBody from "./registerBody";
import RegisterFooter from "./registerFooter";

class RegisterPage extends Component {
    render() {
        return (
            <div>
                <RegisterNavbar/>
                <RegisterBody/>
                <RegisterFooter/>
            </div>
        );
    }
}

export default RegisterPage;