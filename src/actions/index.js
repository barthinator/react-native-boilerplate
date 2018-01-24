import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from './types';

//Click on List item reducer
export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};

//Email form reducer
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

//Password field reducer
export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

//User login reducer
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
      });
  };
};
