import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from '../actions/types';

export const emailChanged = (text) => {
    console.log('email changed called!!: ', text);
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    console.log('password changed called: ', text);
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const login = ({ email, password }) => {
    console.log('got password and email');
    console.log(email, password);
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginSuccess(dispatch, user))
            .catch(error => {
                // Here creates account when we could not find the login information.
                console.log(error);

                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginSuccess(dispatch, user))
                    .catch(() => loginFailed(dispatch));

            });
    };
};

const loginSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.companyList();
};

const loginFailed = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};
