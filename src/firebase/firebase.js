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

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => { 
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => { 
  console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref('expenses').on('child_added', (snapshot) => { 
  console.log(snapshot.key, snapshot.val());
});



// database.ref('expenses').on('value', (snapshot) => { 
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => { 
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => { 
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => { 
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'Rent',
//   amount: 10950,
//   note:'',
//   createdAt: 9569295923
// });


// database.ref('notes/-L1TGoGFja9xvBQRO1uE').remove();

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'Go for a run'
// });


// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// }, (e) => { 
//   console.log('Error data fetching', e);
// });



// // Subscribe on changes
// const onValueChange = database.ref().on('value', (snapshot) => { 
//   console.log(snapshot.val())
// }, (e) => { 
//   console.log('Error data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// // Unsubscribe for changes
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {  
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => { 
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Alex',
//   age: 37,
//   stressLevel: 6,
//   job: {
//     title: 'Dev',
//     company: 'Google'
//   },
//   location: {
//     city: 'Kharkiv',
//     country: 'Ukraine'
//   }
// }).then(() => {  
//   console.log('Data is saved!');
// }).catch((e) => { 
//   console.log('This failed', e);
//  });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Kyiv'
// });

 // database.ref('isSingle').set(null);

// OR

//  database.ref('isSingle')
//   .remove()
//   .then(() => {  
//     console.log('Data was remove');
//   }).catch((e) => { 
//     console.log('Did not remove data', e);
//   });