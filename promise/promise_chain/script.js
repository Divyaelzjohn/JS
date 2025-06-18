/*console.log('Request 1')
const pr=fetch('https://jsonplaceholder.typicode.com/todos/1')

pr.then((data)=>{
  console.log(data)

  console.log('Requesting 2')
  const pr=fetch('https://jsonplaceholder.typicode.com/todos/2')
  pr.then((data)=>{
    console.log(data)

    console.log('Request 3')
    const pr=fetch('https://jsonplaceholder.typicode.com/todos/3')
    pr.then((data)=>{
      console.log(data)
    })
  })
})*/
// This code is nested it is not that easy so we use promise chain

/*console.log('Requesting 1')
const pr=fetch('https://jsonplaceholder.typicode.com/todos/1')

const pr2=pr.then((data)=>{   //then return cheyyunath promise aan
  console.log(data)
  // return 'hello'
  console.log('Requesting 2')
  return fetch('https://jsonplaceholder.typicode.com/todos/2')
})
 
// console.log('val ',val)
const pr3=pr2.then((data)=>{
  console.log(data)
  console.log('requesting 3')
  return fetch('https://jsonplaceholder.typicode.com/todos/3')
})
pr3.then((data)=>{
  console.log(data)
})*/ 

//easy way---it is a promise chain
/*console.log('Requesting 1')
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((data)=>{
    return data.json()
  })
  .then((data)=>{
    console.log(data)
    console.log("requesting 2")
    return fetch('https://jsonplaceholder.typicode.com/todos/2')
  })
  .then((data)=>{
    return data.json()
  })
  .then((data)=>{
    console.log(data)
    console.log('Requesting 3')
    return fetch('https://jsonplaceholder.typicode.com/todos/3')
  })
  .then((data)=>{
    return data.json()
  })
  .then((data)=>{
    console.log(data)
  })*/
 
/*console.log('Requesting 1')
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((data)=>{
    // console.log(data.json())   //---o/p---promise
    return data.json()            //---o/p---user......
  })
  .then((data)=>{
    console.log(data)
  })*/

//when we write script_mtfetch.js we dont need to write like this


// function getJson(url){
  
//   return fetch(url)
//     .then((data)=>{
//       return data.json()
//     })
// }
 
console.log("Requesting 1")
getJson('https://jsonplaceholder.typicode.com/todos/1')
  .then((data)=>{
    console.log(data)
  })
