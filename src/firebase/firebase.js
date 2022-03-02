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
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCG5p0qmJkUexfaUq6CKZEq9CIBwcysrYw',
  authDomain: 'tg-lamestop-webshop.firebaseapp.com',
  databaseURL:
    'https://tg-lamestop-webshop-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'tg-lamestop-webshop',
  storageBucket: 'tg-lamestop-webshop.appspot.com',
  messagingSenderId: '288452728781',
  appId: '1:288452728781:web:ab3b9bfbd70e6900e45684',
  measurementId: 'G-WF6JMWP35R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

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


    console.log('GAMES FROM FIRESTORE', games)

}).catch(error => console.log(error))

export { auth };
