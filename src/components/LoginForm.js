import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, VertCardSection, Input } from './commons';
import { emailChanged, passwordChanged } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {
    //state = { email: '', password: '' };

    onEmailChange(text) {
        console.log(text);
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    
    render() {
        return (
            <Card>
                <VertCardSection>
                    <Input 
                        label="Email"
                        placeholder="your_email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />                    
                </VertCardSection>
                
                <VertCardSection>
                    <Input 
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </VertCardSection>
            </Card>
            
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, {
    // Passing dispatches
    passwordChanged,
    emailChanged
})(LoginForm);
