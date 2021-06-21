import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyBY_ZpeBaBySHLg-rjvqcdSqhaF5L_4_Rw",
   authDomain: "crwn-db-38527.firebaseapp.com",
   projectId: "crwn-db-38527",
   storageBucket: "crwn-db-38527.appspot.com",
   messagingSenderId: "713707495186",
   appId: "1:713707495186:web:5e555a3dbe76836ffb5dcb",
   measurementId: "G-18JJSWS1GV",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
   prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
