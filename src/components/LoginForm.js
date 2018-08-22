import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, VertCardSection, Input } from './commons';

class LoginForm extends Component {
    state = { email: '', password: '' };

    onEmailChange(text) {
        console.log(text);
    }
    onPasswordChange(text) {
        console.log(text);
    }
    render() {
        return (
            <Card>
                <VertCardSection>
                    <Input 
                        label="Email"
                        placeholder="your_email@gmail.com"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />                    
                </VertCardSection>
                <VertCardSection>
                    <Input 
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                </VertCardSection>
            </Card>
            
        );
    };
}

export default LoginForm;
