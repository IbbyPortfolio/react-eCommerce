import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handleUserProfile = async (userAuth, additionalData) => {
   if (!userAuth) return;
   // uid is retrived from firebase auth object
   const { uid } = userAuth;
   // check if user exisit in firestore collection "users by looking up a document thorugh "uid"
   const userRef = firestore.doc(`users/${uid}`);
   const snapshot = await userRef.get();

   // this checks if the above document at "uid" address exisits. "exisits" is a firebase method
   if (!snapshot.exists) {
      //descibtryct
      const { displayName, email } = userAuth;
      const timestamp = new Date();
      try {
         await userRef.set({
            displayName,
            email,
            createdDate: timestamp,
            ...additionalData,
         });
      } catch (err) {
         //  console.log('err', err);
      }
   }
   // return "userRef" to update the local state for the app
   return userRef;
};
