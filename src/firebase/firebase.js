import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB2QeO07fL9t-nNVkDquW0S-cBpt7isKqw",
  authDomain: "expensify-alx100.firebaseapp.com",
  databaseURL: "https://expensify-alx100.firebaseio.com",
  projectId: "expensify-alx100",
  storageBucket: "expensify-alx100.appspot.com",
  messagingSenderId: "108614517559"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Alex',
  age: 37,
  isSingle: false,
  location: {
    city: 'Kharkiv',
    country: 'Ukraine'
  }
});

// database.ref().set('Data');
database.ref('age').set(30);
database.ref('location/city').set('Kyiv');

database.ref('attributes').set({
  height: 180,
  weight: 76
});