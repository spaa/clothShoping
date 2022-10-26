// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';


import { getFirestore, doc , getDoc, setDoc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM_lSe_Sm0ZIWTxlTlKtpuLTC_-PCymik",
  authDomain: "shopping-react-app-db142.firebaseapp.com",
  projectId: "shopping-react-app-db142",
  storageBucket: "shopping-react-app-db142.appspot.com",
  messagingSenderId: "867478735247",
  appId: "1:867478735247:web:85c3ea79a77349de55a3fa"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt : "select_account"
})


export const auth = getAuth();
export const signUpWithPopup = ()=>signInWithPopup(auth,googleProvider);
export const signinWithRedirect = ()=>signInWithRedirect(auth,googleProvider);

export const db = getFirestore();

export const createUserFromAuth = async (userAuth, additionalInformation = {})=>{
  console.log(userAuth.uid);
  const docRef = doc(db, 'users' , userAuth.uid);

  const userSnapshot = await getDoc(docRef);

  console.log(docRef);
  console.log(userSnapshot.exists());

  
  if(!userSnapshot.exists()){
    const {displayName , email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(docRef, {displayName, email , createdAt, ...additionalInformation });
    }
    catch(err){
      console.log(err)
    }
  }
  return docRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password)=>{
  if (!email || !password) return ;
  return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword = async (email,password)=>{
  if (!email || !password) return ;
  return await signInWithEmailAndPassword(auth,email,password);
}