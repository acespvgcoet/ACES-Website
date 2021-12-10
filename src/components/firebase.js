import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCs20wTx7JTKYEnji_VfHDRx9C_csNMsuU",
    authDomain: "aces-website-9fc34.firebaseapp.com",
    databaseURL: "https://aces-website-9fc34.firebaseio.com",
    projectId: "aces-website-9fc34",
    storageBucket: "aces-website-9fc34.appspot.com",
    messagingSenderId: "672686625402",
    appId: "1:672686625402:web:ddb406f4ea4a883af6a1c3",
    measurementId: "G-MXP2Z60CNT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const time = firebase.firestore.FieldValue.serverTimestamp();
  export {auth,time}
   export default db; 