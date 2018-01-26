import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Feed from './views/Feed';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Please Login" initial />
        <Scene key="feed" component={Feed} title="Feed List" />
      </Scene>
    </Router>
  );
};


export default RouterComponent;
