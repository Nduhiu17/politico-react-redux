import React, { Component } from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import AllOfficesPage from "./components/offices/allOfficesPage";
import LoginPage from "./components/login/loginPage";
import {Router} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import history from './history';
class App extends Component {
  render() {
    return <Provider store={store}>
        <div className="App">
            <Router history={history}>
                <div>
                    <Route exact path="/" component={AllOfficesPage}/>
                    <Route path="/login" component={LoginPage}/>
                </div>
            </Router>
        </div>
    </Provider>;
  }
}

export default App;
