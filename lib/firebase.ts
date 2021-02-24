import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
};
firebase.initializeApp(firebaseConfig);

export const storageService = firebase.storage();
