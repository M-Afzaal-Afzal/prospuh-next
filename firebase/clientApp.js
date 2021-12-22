// import "firebase/auth";
// import "firebase/firestore";
import {initializeApp,getApps,getApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore";
import {addDoc,collection} from '@firebase/firestore';
// import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = !getApps().length ? initializeApp(clientCredentials) : getApp();

const db = getFirestore();

const addNumberDocument = async (number) => {
    const docRef = await addDoc(collection(db,'numbers'),{
        value: number
    })

    console.log('New document added',docRef.id);
};

export {app,db,addNumberDocument};
