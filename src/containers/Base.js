import Rebase from 're-base';
import firebase from 'firebase'
import 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyDsp2Fl1uxkUNS-bXyQtz923m4fqKfGGwk",
  authDomain: "defwlog.firebaseapp.com",
  databaseURL: "https://defwlog.firebaseio.com",
  projectId: "defwlog",
  storageBucket: "defwlog.appspot.com",
  messagingSenderId: "832874138092",
  appId: "1:832874138092:web:67f06c50a31953e5af98c9",
  measurementId: "G-5WV9YB7Y0R"
  };
 // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const base = Rebase.createClass(app.database());
 
export {base}