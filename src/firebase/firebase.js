import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCiHEwXXeX7-n4N37ziu1CfXoxW4bkXHts',
  authDomain: 'react-redux-journal-3808a.firebaseapp.com',
  projectId: 'react-redux-journal-3808a',
  storageBucket: 'react-redux-journal-3808a.appspot.com',
  messagingSenderId: '180892369072',
  appId: '1:180892369072:web:b2338c0365e8a6ce85bb75',
  measurementId: 'G-5508H3DTBD',
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const googleAuthProvider = new GoogleAuthProvider();

const db = getFirestore(firebaseApp);

export {
  firebaseApp,
  auth,
  db,
  googleAuthProvider,
};
