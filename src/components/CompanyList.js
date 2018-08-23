import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import CompanyDetail from './CompanyDetail';
import company from './company.json';
import Header from './commons';

class CompanyList extends Component {
  constructor() {
    super();
    this.state = { companies: company };
  }

  renderCompanies() {
    return this.state.companies.map(c => <CompanyDetail key={c.id} company={c} />);
  }

  render() {
    //console.log(this.state);

    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Company List'} />
        <CompanyList />
        <ScrollView>{this.renderCompanies()}</ScrollView>
      </View>
    );
  }
}

export default CompanyList;
