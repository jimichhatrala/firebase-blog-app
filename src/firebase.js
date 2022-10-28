import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEo-D7ZU3ugijc--I_bxgqFoJZMCSd0FQ",
  authDomain: "teach-on-tech.firebaseapp.com",
  projectId: "teach-on-tech",
  storageBucket: "teach-on-tech.appspot.com",
  messagingSenderId: "451216804487",
  appId: "1:451216804487:web:81c56229fde23e82308622",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
