// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult,onAuthStateChanged } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmcokUV-rBDPDTSEETiuE5j-30kK_Zy7A",
  authDomain: "exam-alt-school.firebaseapp.com",
  projectId: "exam-alt-school",
  storageBucket: "exam-alt-school.appspot.com",
  messagingSenderId: "925810776203",
  appId: "1:925810776203:web:eb5d9657f7826539a85c8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export{
app,
provider,
auth,
signInWithRedirect,
getRedirectResult,
onAuthStateChanged
} ;