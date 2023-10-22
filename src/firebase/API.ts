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
} from "firebase/firestore";

import { PopUp } from "@/components";

import { app } from "./firebase.js";

const db = getFirestore(app);

const wordsCollectionRef = collection(db, "words");
const foldersCollectionRef = collection(db, "folders");

//TODO: use currentUser ID to fetch all the data, because you need to show only user's words to him

export const getWord = async (title: String) => {
  // const currentUser = Router.user
  const result = await query(
    wordsCollectionRef,
    where("inEnglish", "==", title)
  );
  const querySnapshot = await getDocs(result);

  if (querySnapshot.docs.length === 0) {
    return null;
  }
  return querySnapshot.docs[0].data();
};

export const getWords = async () => {
  const querySnapshot = await getDocs(wordsCollectionRef);
  const wordsArr: object[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    wordsArr.push({ id: doc.id, ...data });
  });
  return wordsArr;
};

export const saveWord = async (obj: { [key: string]: string }) => {
  const checkWord = await getWord(obj.inEnglish);
  if (checkWord !== null) {
    return "The word has already exist";
  } else {
    await addDoc(wordsCollectionRef, obj);
  }
};

export const getFolder = async (title: String) => {
  // const currentUser = Router.user
  const result = await query(foldersCollectionRef, where("name", "==", title));
  const querySnapshot = await getDocs(result);

  if (querySnapshot.docs.length === 0) {
    return null;
  }
  // console.log(querySnapshot.docs[0].data());
  return querySnapshot.docs[0].data();
};

export const getFolders = async () => {
  const querySnapshot = await getDocs(foldersCollectionRef);
  const foldersArr: object[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    foldersArr.push({ id: doc.id, ...data });
  });
  return foldersArr;
};

export const saveFolder = async (obj: {
  [key: string]: string | undefined;
}) => {
  const checkFolder = await getFolder(obj.name);
  if (checkFolder !== null) {
    throw new ReferenceError("The folder has already exist");
  }
  await addDoc(foldersCollectionRef, obj);
};
