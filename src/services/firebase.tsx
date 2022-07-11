// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD2GR0GdTD3u0XmT_-dBLLceoc7K77iMJI',
  authDomain: 'personalportfolio-7abaf.firebaseapp.com',
  projectId: 'personalportfolio-7abaf',
  storageBucket: 'personalportfolio-7abaf.appspot.com',
  messagingSenderId: '338862741052',
  appId: '338862741052:web:3ff1e7613fe39a6c9fd539'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get info from firebase
export async function getInfo() {
    const info = collection(db, 'infoPortafolio');
    const data= await getDocs(info);
    const infoArray = data.docs.map(doc => doc.data())
    return infoArray;
}

