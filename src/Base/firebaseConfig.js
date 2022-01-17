import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDWCeZdWyIXOSfGZ4PoeVGr0MRABBhfm-8",
    authDomain: "lrm-portafolio.firebaseapp.com",
    projectId: "lrm-portafolio",
    storageBucket: "lrm-portafolio.appspot.com",
    messagingSenderId: "938830703645",
    appId: "1:938830703645:web:5c001c3692495a45f16af4"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
