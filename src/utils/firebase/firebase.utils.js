import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe7UAPt4TXLRMKl385_G5sFwq00sZNJ00",
  authDomain: "crwn-clothing-db-b04a8.firebaseapp.com",
  projectId: "crwn-clothing-db-b04a8",
  storageBucket: "crwn-clothing-db-b04a8.appspot.com",
  messagingSenderId: "145723302870",
  appId: "1:145723302870:web:540205d929c23d02a2ba77"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);