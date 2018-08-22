import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
const RouterComponent = () => {
    return (
        <Router>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Login"></Scene>
            </Scene>
        </Router>
    );
  };

export default RouterComponent;