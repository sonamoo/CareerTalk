import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import CompanyList from './components/CompanyList';
import FairList from './components/FairList';

const RouterComponent = () => (
  <Router>
    <Stack key="root">
      <Scene key="companyList" component={CompanyList} title="Comapny List" />
      <Scene key="fairList" component={FairList} title="Career Fair List" />
      <Scene key="login" component={LoginForm} title="Login" />        
    </Stack>
  </Router>
);

export default RouterComponent;
