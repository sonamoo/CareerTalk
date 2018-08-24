import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, CardSection } from './commons';

const FairDetail = ({ fair }) => (
  <Card>
    <View style={styles.fairDetailStyle}>
      <View style={{ flex: 1 }}>
        <CardSection>
          <Image source={require('../img/uic_logo.png')} style={styles.imgStyle} />
        </CardSection>
      </View>
      <View style={{ flex: 4 }}>
        <CardSection>
          <TouchableOpacity>
            <View>
              <Text style={styles.fairNameTextStyle}>{fair.name}</Text>
            </View>
          </TouchableOpacity>
        </CardSection>
      </View>
      <View style={{ flex: 1 }}>
        <CardSection>
          <TouchableOpacity>
            <Text>Add</Text>
          </TouchableOpacity>
        </CardSection>
      </View>
    </View>
  </Card>
);

const styles = {
  imgStyle: {
    height: 50,
    width: 50
  },
  fairDetailStyle: {
    flex: 1,
    flexDirection: 'row'
  },
  fairNameTextStyle: {
    height: 30,
    fontSize: 15
  }
};

export default FairDetail;
