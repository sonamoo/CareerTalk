// import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import credential from '../credentials.json';
import { createStore, applyMiddleware } from 'redux';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp(credential);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider>
        <Router />
      </Provider>
    );
  }
}
export default App;

