import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm.js';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBVJ_ed5V7jcDZKYazrOnAPmIZw6OzcgDU',
      authDomain: 'teamdvvy.firebaseapp.com',
      databaseURL: 'https://teamdvvy.firebaseio.com',
      projectId: 'teamdvvy',
      storageBucket: 'teamdvvy.appspot.com',
      messagingSenderId: '635148895061'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
