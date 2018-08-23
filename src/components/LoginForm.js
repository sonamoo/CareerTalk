import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, VertCardSection, Input, Button } from './commons';
import { emailChanged, passwordChanged, login } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        console.log(text);
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        console.log('button pressed');
        //console.log('passing in values: ', this.props.email, this.props.password);
        const { email, password } = this.props;
        this.props.login({ email, password });
    }
    renderButton() {
        if (this.props.loading) {
            console.log('loading');
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
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
                <VertCardSection>
                     {this.renderButton()}
                </VertCardSection>
                <VertCardSection>
                     <Text style={styles.errorStyle}>{this.props.error}</Text>
                </VertCardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 17,
        color: 'red',
        alignSelf: 'center'
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, {
    // Passing dispatches
    login,
    passwordChanged,
    emailChanged
})(LoginForm);
