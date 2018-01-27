import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import allReducers from './reducers'
import { Provider } from 'react-redux';
import User from './components/UserComponent';

const store = createStore(allReducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <User/>
      </Provider>
     
    );
  }
}

export default App;
