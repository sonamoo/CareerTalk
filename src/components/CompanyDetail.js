import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection } from './commons';

const CompanyDetail = ({company}) => {
    return (
        <Card>
            <View style={styles.companyDetailStyle}>
                <View style={{ flex: 1 }}>
                    <CardSection>
                        <Image 
                            source={ require('../img/google.png') } 
                            style={styles.imgStyle}
                        />
                    </CardSection>
                </View>
                <View style={{ flex: 4 }}>
                    <CardSection>
                        <View style={styles.companyContentStyle}>
                            <Text style={styles.companyNameTextStyle}>{company.name}</Text>
                        </View>
                    </CardSection>
                </View>
            </View> 
        </Card>
    );
};

const styles = {
    imgStyle: {
        height: 50,
        width: 50
    },
    companyDetailStyle: {
        flex: 1,
        flexDirection: 'row',
    },
    companyNameTextStyle: {
        height: 30,
        fontSize: 15,
    },    
};

export default CompanyDetail;
