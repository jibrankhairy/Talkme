import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuWCJ-WBhcyeNQZfSf56hg6NIMvkIYs0w",
  authDomain: "chat-app-talkme.firebaseapp.com",
  projectId: "chat-app-talkme",
  storageBucket: "chat-app-talkme.firebasestorage.app",
  messagingSenderId: "641657709667",
  appId: "1:641657709667:web:c69454ec79579ca5024456",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, functions, auth };
