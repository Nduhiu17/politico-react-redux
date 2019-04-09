import React, { Component } from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import MainComponent from "./components/mainComponent";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
             <MainComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
