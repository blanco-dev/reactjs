import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyC-SpAdCMVIOCbw-b7GbheJPQxcgxWaAvM',
  authDomain: 'bookstore-89cc9.firebaseapp.com',
  projectId: 'bookstore-89cc9',
  storageBucket: 'bookstore-89cc9.appspot.com',
  messagingSenderId: '321102867587',
  appId: '1:321102867587:web:b56256ac389b45f801bfb6',
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
