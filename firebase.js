import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAxfxP03Q11fUEqQl_bdNy_XkSzI-HWxA8",
    authDomain: "clone-8670f.firebaseapp.com",
    projectId: "clone-8670f",
    storageBucket: "clone-8670f.appspot.com",
    messagingSenderId: "347752526561",
    appId: "1:347752526561:web:629fd7b966082714ea3da0"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  const db = app.firestore();
 
  export {db};