import firebase from 'firebase/compat/app';
// import "firebase/compat/firestore";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'



const firebaseConfig = {
    apiKey: "AIzaSyC8KYB0zGePDxVv_vw-s-Yn90oTANt1H80",
    authDomain: "disneyplus-clone-736f4.firebaseapp.com",
    projectId: "disneyplus-clone-736f4",
    storageBucket: "disneyplus-clone-736f4.appspot.com",
    messagingSenderId: "67824659294",
    appId: "1:67824659294:web:08c296f71d70d7a3283dcf",
    measurementId: "G-RTFRMEQ4GD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;