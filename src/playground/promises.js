const promise = new Promise((resolve, reject) => { 
  setTimeout(() => {
    resolve({
      name: 'Alex',
      age: 37
    });
    reject('Something went wrong!')
  }, 3000);
 
});

console.log('before');

promise.then((data) => { 
  console.log('1', data);

  return 'some data';
}).then((str) => {  
  console.log('does this run?', str);
}).catch((error) => { 
  console.log('error: ', error);
});

// OR

// promise.then((data) => { 
//   console.log('1', data);
// }, (error) => { 
//   console.log('error: ', error);
// });


console.log('after');