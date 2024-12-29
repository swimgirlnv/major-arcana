import { auth } from './firebase';
import { signInWithEmailAndPassword, signOut as firebaseSignOut } from "firebase/auth";

export const signIn = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOut = async () => {
  return await firebaseSignOut(auth);
};