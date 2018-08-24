import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Spinner } from './commons';
import FairDetail from './FairDetail';
import fair from './fairs.json';

class FairList extends Component {
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
        fairs: fair,
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

  renderFairs() {
    return this.state.fairs.map(f => <FairDetail key={f.id} fair={f} />);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <ScrollView>{this.renderFairs()}</ScrollView>
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

export default FairList;
