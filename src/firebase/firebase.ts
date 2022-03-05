import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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
import { config } from '../../configApi';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId,
};

// console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth

let auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

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
