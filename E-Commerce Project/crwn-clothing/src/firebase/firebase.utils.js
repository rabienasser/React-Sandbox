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

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return; //'return and do nothing if there is no userAuth'

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();
   console.log(snapShot);

   // The code below checks to see if snapshot (user) already exists, and if not, it is creating a new user using data from the userAuth object
   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData,
         });
      } catch (error) {
         console.log("error creating user", error.message);
      }
   }

   return userRef;
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
