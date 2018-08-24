import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import CompanyDetail from './CompanyDetail';
import { Spinner } from './commons';
import company from './company.json';

class CompanyList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    // this is where we call API

    setTimeout(() => {
      this.setState({
        companies: company,
        loading: false
      });
    }, 3000); // wait 3 seconds for fetching the data
  }

  componentWillReceiveProps = nextProps => {
    // here we have company data
    if (nextProps.company) {
      console.log('this is not yet implemented');

      this.setState({
        loading: false
      });
    }
  };

  renderCompanies() {
    return this.state.companies.map(c => <CompanyDetail key={c.id} company={c} />);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <ScrollView>{this.renderCompanies()}</ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CompanyList;
