import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import CompanyDetail from './CompanyDetail';
import company from './company.json';

class CompanyList extends Component {
  constructor() {
    super();
    this.state = { companies: company };
  }
  
  renderCompanies() {
    console.log('render company');
    return this.state.companies.map(c => <CompanyDetail key={c.id} company={c} />);
  }

  render() {
    //console.log(this.state);
    console.log('render');
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>{this.renderCompanies()}</ScrollView>
      </View>
    );
  }
}

export default CompanyList;
