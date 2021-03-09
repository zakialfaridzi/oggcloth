import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCD5jUC5wD_3IazFtdmoOv78P8nnqk_p3I",
  authDomain: "ogcloth-306612.firebaseapp.com",
  databaseURL: "https://ogcloth-306612-default-rtdb.firebaseio.com",
  projectId: "ogcloth-306612",
  storageBucket: "ogcloth-306612.appspot.com",
  messagingSenderId: "4001806254",
  appId: "1:4001806254:web:3e463a5400737cf0b33a3f",
  measurementId: "G-8H081TL6XZ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`Users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
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
      console.log("error creating user", error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
