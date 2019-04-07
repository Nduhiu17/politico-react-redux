import React, { Component } from 'react';
import './App.css';
import LoginPage from "./components/login/loginPage";
import {Provider} from "react-redux";
import store from "./store";
import RegisterPage from "./components/register/registerPage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
              {/*<LoginPage/>*/}
              <RegisterPage/>
        </div>
      </Provider>
    );
  }
}

export default App;
