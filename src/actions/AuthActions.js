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
    console.log("email changed called!!");
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
};
