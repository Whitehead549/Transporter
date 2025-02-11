import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDwlxi_9nn5ykq2RxsbU8A9yElsP49h5ik",
  authDomain: "consignment-d28cb.firebaseapp.com",
  projectId: "consignment-d28cb",
  storageBucket: "consignment-d28cb.firebasestorage.app",
  messagingSenderId: "415956799924",
  appId: "1:415956799924:web:25f90b8b405616c038a2e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)