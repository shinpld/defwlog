import Rebase from 're-base';
import firebase from 'firebase'
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyCOVANCu8-K_O69X8RaiqOofuoSO2IlZUo",
    authDomain: "aeroasset-f44b3.firebaseapp.com",
    databaseURL: "https://aeroasset-f44b3.firebaseio.com",
    projectId: "aeroasset-f44b3",
    storageBucket: "aeroasset-f44b3.appspot.com",
    messagingSenderId: "1049931300120",
    appId: "1:1049931300120:web:33b2b43ff7630ed2bc726d"
  };
 // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const base = Rebase.createClass(app.database())
 
export {base}