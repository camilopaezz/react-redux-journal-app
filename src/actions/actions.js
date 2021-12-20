import {signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import {googleAuthProvider, auth} from '../firebase/firebase';
import {types} from '../types/types';

export const loginWithEmail = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((credentials) => {
          dispatch(
              login(credentials.user.uid, credentials.user.displayName),
          );
        })
        .catch((e) => {
          console.log(e);
          console.log('Something was wrong...');
        });
  };
};

export const loginWithGoogle = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleAuthProvider).then((credentials) => {
      dispatch(
          login(credentials.user.uid, credentials.user.displayName),
      );
    });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
