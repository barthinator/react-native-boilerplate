import React from 'react';
import { Scene, Router, Drawer } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Collab from './views/Collab';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Scene>
        <Drawer key='drawer'>
          <Scene key="Scene1" component={Collab} />
        </Drawer>
      </Scene>
    </Router>
  );
};


export default RouterComponent;
