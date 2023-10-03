import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  or,
  and,
  query,
  where,
  limit,
} from 'firebase/firestore';

import { app } from './index.js';

const db = getFirestore(app);

const wordsCollectionRef = collection(db, 'words');
const foldersCollectionRef = collection(db, 'folders');




