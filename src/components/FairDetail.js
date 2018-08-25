import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './commons';

const fairOnpress = (fair) => {
  console.log(fair);
  console.log("fair is pressed");
};

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
              <Text onPress={() => fairOnpress.bind(fair)} style={styles.fairNameTextStyle}>{fair.name}</Text>
            </View>
            <View>
              <Text style={styles.fairDateTextStyle}>{fair.month}/{fair.date}/{fair.year}</Text>
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
    fontSize: 12
  },
  fairDateTextStyle: {
    fontSize: 11
  }
};

export default FairDetail;
