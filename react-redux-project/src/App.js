import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import allReducers from './reducers'
import { Provider } from 'react-redux';
import User from './components/UserComponent';
import UserDetail from './components/UserDetailComponent';
const store = createStore(allReducers);

class App extends Component {
  render() {
    return (
   
      <Provider store={store}>
      <div>
      <User/>
      <hr/>
      <UserDetail/>
      </div>
      </Provider>

     
    );
  }
}

export default App;
