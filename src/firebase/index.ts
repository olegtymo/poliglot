import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection } from 'firebase/firestore';
const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'vocabruaryauth.firebaseapp.com',
  databaseURL: 'https://vocabruaryauth-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'vocabruaryauth',
  storageBucket: 'vocabruaryauth.appspot.com',
  messagingSenderId: '530447870621',
  appId: '1:530447870621:web:607268ada4e4490a184274',
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();



onAuthStateChanged(auth, (user) => {
  console.log(user);
});
