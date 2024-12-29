import { db } from './firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";

export const addData = async (collectionName: string, data: object) => {
  return await addDoc(collection(db, collectionName), data);
};

export const getData = async (collectionName: string) => {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map(doc => doc.data());
};