// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "./firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCfhLKlXAyTyhpkcXnndsERDRNNYK_hyi8",
    authDomain: "whatsapp-clone-66e4f.firebaseapp.com",
    projectId: "whatsapp-clone-66e4f",
    storageBucket: "whatsapp-clone-66e4f.appspot.com",
    messagingSenderId: "699504545514",
    appId: "1:699504545514:web:8bf9415468014107265193",
    measurementId: "G-3JCDP8C0YG"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export {auth,provider}
export default db;