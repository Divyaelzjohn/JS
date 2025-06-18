/*console.log('===Requesting 1')
getJson('https://jsonplaceholderkmnknknk.typicode.com/todos/1')
  .then((data)=>{
    console.log(data)
    console.log('===Request2')
    return getJson('https://jsonplaceholder.typicode.com/todos/2')
  })
  // (err)=>{
  //   console.log('ERROR',err)
  //   // return {}
  // })
  .then((data)=>{
    console.log(data)
    console.log('===Request 3')
    return getJson('https://jsonplaceholder.typicode.com/todos/3')
  })
  .then((data)=>{
    console.log(data)
  })
  .catch((err)=>{
    console.log('ERROR:',err)
  })
//once nammal error catch cheythal backi ulla thenilkk kayarum
//catch is used for error handling--*/


//Util Functions
//--1.promise.resolve,--2.promise.reject,--3.reject,promise.all,--4.Promis.race
/*getJson('https://jsonplaceholder.typicode.com/todos/1')
  .then((data)=>{
    console.log(data)
  })
  .catch((data)=>{
    console.log(data)
  })*/

// --3.Promise.all
// getJson('https://jsonplaceholder.typicode.com/todos/1')
//   .then((data)=>{
//     console.log(data)
//   })
//   .catch((data)=>{
//     console.log(data)
//   })
  /*Promise.all([
    getJson('https://jsonplaceholder.typicode.com/todos/1'),
    getJson('https://jsonplaceholder.typicode.com/todos/2'),
    getJson('https://jsonplaceholder.typicode.com/todos/3')
  ])
  .then((data)=>{
    console.log(data)
  })
*/

//.Promise.race
Promise.race([
  getJson('https://jsonplaceholder.typicode.com/todos/1'),
  getJson('https://jsonplaceholder.typicode.com/todos/2'),
  getJson('https://jsonplaceholder.typicode.com/todos/3')
])
.then((data)=>{
  console.log(data)
})
