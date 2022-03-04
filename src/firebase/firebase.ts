import {
  AuthCredential,
  getReactNativePersistence,
} from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGE_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from '@env';

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';

// addDoc => for adding documents
// deleteDoc => for deleting documents
// doc gives a reference to a specific DOCUMENT!
import {
  addDoc,
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  DocumentData,
  CollectionReference,
} from 'firebase/firestore';
import { Platform } from 'react-native';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth

let auth: any;

Platform.OS === 'web'
  ? (auth = getAuth(app))
  : (auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    }));

// setPersistence(auth, browserLocalPersistence)
//   .then(() => {
//     return signInWithEmailAndPassword(auth, email, password);
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// auth.languageCode = 'en';
// console.log('AUTH', auth);
// console.log(getAuth);

const googleProvider = new GoogleAuthProvider();
// googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// googleProvider.setCustomParameters({
//   login_hint: 'user@example.com',
// });
// console.log('GOOGLE PROVIDER', googleProvider);

// Init services
// Represents our db connection
const db = getFirestore();

// collection ref => takes in the db connection as a first argument
// the second argument is the collection we want to access
// basically creating a reference to the part of the DB
const colRef = collection(db, 'products');

// get collection data

// getDocs => returns a promise on which we can call .then
// to get a snapshot of the current collections
getDocs(colRef)
  .then((snapshot) => {
    // console.log(snapshot.docs);
    let games = [];
    // for each document (doc) we call the data() function and spread it into
    // and object than we grab the id: doc.id. So for each document we push an
    // object containing the data to the games array.
    snapshot.docs.forEach((doc) => games.push({ ...doc.data(), id: doc.id }));

    // console.log('GAMES FROM FIRESTORE', games);
  })
  .catch((error) => console.log(error));

// get collection (snapshot) of data ONLY RUNS ones.
getDocs(colRef)
  .then((snapshot) => {
    // console.log(snapshot.docs);
    let games = [];
    // for each document (doc) we call the data() function and spread it into
    // and object than we grab the id: doc.id. So for each document we push an
    // object containing the data to the games array.
    snapshot.docs.forEach((doc) => games.push({ ...doc.data(), id: doc.id }));

    // console.log('GAMES FROM FIRESTORE', games);
    // setProducts(games);
    // productsLength = products.length;
  })
  .catch((error) => console.log(error));

// real time colllection data onSnapshot takes in two arguments
// a colRef and as a second argument a function which fires everytimes their
// is a change in the snapshot
onSnapshot(colRef, (snapshot) => {
  let games = [];
  // for each document (doc) we call the data() function and spread it into
  // and object than we grab the id: doc.id. So for each document we push an
  // object containing the data to the games array.
  snapshot.docs.forEach((doc) => games.push({ ...doc.data(), id: doc.id }));

  // console.log('GAMES FROM FIRESTORE', games);
  // setProducts(games);
});

const seedFireStoreCollection = (
  collection: CollectionReference,
  jsonFile: any
) => {
  console.log(collection);
  console.log(jsonFile);

  const promiseArray = [];

  for (let i = 0; i < jsonFile.length; i++) {
    console.log(jsonFile[i]);
    promiseArray.push(addDoc(collection, { ...jsonFile[i] }));
  }

  console.log(promiseArray);
};

// seeds the database
// seedFireStoreCollection(colRef, productsJson);

export {
  auth,
  addDoc,
  signInWithPopup,
  googleProvider,
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  db,
  colRef,
};
