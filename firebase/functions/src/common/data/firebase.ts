import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {Firestore} from '@google-cloud/firestore'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as dotenv from 'dotenv';


const firebaseConfig = {
  apiKey: "AIzaSyAdIXgr9dAaZ8_t8sxXDSte-sgyePMT0zM",
  authDomain: "recreatememories-fcd50.firebaseapp.com",
  databaseURL: "https://recreatememories-fcd50.firebaseio.com",
  projectId: "recreatememories-fcd50",
  storageBucket: "recreatememories-fcd50.appspot.com",
  messagingSenderId: "272599563445",
  appId: "1:272599563445:web:559e2b0557ea672cb0d2fc",
  measurementId: "G-F96391D6FS"
};

export const firestore = new Firestore({projectId: "benni-363814"})

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)

export const authenticateUser = () => {
  dotenv.config();
  if(process.env.FIREBASE_USERNAME && process.env.FIREBASE_PASSWORD){
    signInWithEmailAndPassword(auth, process.env.FIREBASE_USERNAME, process.env.FIREBASE_PASSWORD)
    .then((userCredential) => {
      // const user = userCredential.user;
    })
    .catch((error) => {
    console.log(error)
      // const errorCode = error.code;
      // const errorMessage = error.message;
    });
  }

}


