import firebase from "firebase/app";
import "firebase/auth";

// require("dotenv").config();

const firebaseConfig = {
  apiKey: "AIzaSyB0ED4Cgcx9fX7kHrPgKDw7Gl_sMWH3Wb8",
  authDomain: "grocery-wish.firebaseapp.com",
  projectId: "grocery-wish",
  storageBucket: "grocery-wish.appspot.com",
  messagingSenderId: "298147356545",
  appId: "1:298147356545:web:32708e8aa5bb455aaa5280",
  //   apiKey: process.env.FIREBASE_API_KEY,
  //   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  //   projectId: process.env.FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.FIREBASE_API_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Google Sign In Method

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const { displayName, email } = result.user;
      const newUser = {
        name: displayName,
        email: email,
      };
      return newUser;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
