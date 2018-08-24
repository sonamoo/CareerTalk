import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

// This Spinner take all screen
const Spinner = ({ size }) => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size={size || 'large'} />
  </View>
);

// More customized spinner goes here..

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

export { Spinner };
