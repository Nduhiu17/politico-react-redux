import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginPage from "./login/loginPage";
import RegisterPage from "./register/registerPage";
import AllOfficesPage from "./offices/allOfficesPage";

class MainComponent extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                   <Switch>
                       <Route exact path='/' component={ LoginPage }></Route>
                       <Route exact path='/register' component={ RegisterPage }></Route>
                       <Route exact path='/offices' component={ AllOfficesPage }></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default MainComponent;