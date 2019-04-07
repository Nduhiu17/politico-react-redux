import React, { Component } from 'react';
import './App.css';
import LoginPage from "./components/login/loginPage";
import {Provider} from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
              <LoginPage/>
        </div>
      </Provider>
    );
  }
}

export default App;
