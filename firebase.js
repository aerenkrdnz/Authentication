// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYiztP7ah1gvZGBAI_1xDBPDJPHgR-CJY",
  authDomain: "authentication-f0898.firebaseapp.com",
  projectId: "authentication-f0898",
  storageBucket: "authentication-f0898.appspot.com",
  messagingSenderId: "596851463767",
  appId: "1:596851463767:web:f42131023a03b6d233f512"
};

// Initialize Firebase
if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

export { auth };