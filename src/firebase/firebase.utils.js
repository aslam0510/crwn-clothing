import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config =  {
  apiKey: "AIzaSyBkly4_1DDeKKziDBxHKCeXywn29RIHiqM",
  authDomain: "crwn-e-commerce-2e15c.firebaseapp.com",
  projectId: "crwn-e-commerce-2e15c",
  storageBucket: "crwn-e-commerce-2e15c.appspot.com",
  messagingSenderId: "394967397774",
  appId: "1:394967397774:web:c34c687d8230069e2ca0df",
  measurementId: "G-RCYFTRX940"
};
 
firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase