import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import CompanyList from './components/CompanyList';

const RouterComponent = () => (
  <Router>
    <Stack key="root">
      <Scene key="companyList" component={CompanyList} title="Comapny List" />
      <Scene key="login" component={LoginForm} title="Login" />        
    </Stack>
  </Router>
);

export default RouterComponent;
