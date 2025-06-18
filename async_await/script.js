// async function myFunction(){      //async-function declare cheyyumbo use cheyyum  
//     var a=getJson()               //await-function call cheyyumbo eythunnath
// }

/*async function getValue(){
  // return 12
  // return fetch('https://jsonplaceholder.typicode.com/todos/1')   //this return a promise
  // return Promise.resolve(12)                                      // it is the way to call promise
  // await // we use async function to use await
}
const result=getValue()   
// console.log(result)                 ---without async o/p is----12 ,with async---o/p is promise
result.then((data)=>{               // ---when promise appear to get the number use this code
  console.log(data)
})*/


/*console.log('Started')
// getValue()
var aa=getValue()
aa.then((data)=>{
  console.log(data)
})
console.log('Ended')


async function getValue(){
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then((data)=>{
  //     return data.json()
  //   })
  //   .then((data)=>{
  //     console.log(data)
  //   })
//using async and await we can resuce the lines of code
  const data= await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const jsonData=await data.json() 
  // console.log(data)
  return jsonData
}*/

// error handling
console.log('Started')
var aa=getValue()
.then((data)=>{
  console.log(data)
})
// .catch(()=>{
//   console.log('handled')   //this is one method
//   return {}
// })
console.log('Ended')

async function getValue(){
  try{
    const data=await fetch('https://jsonplaceholder.typicodesjd.com/todos/1')
    const jsonData=await data.json()
    return jsonData
   }
   catch(e){
    console.log('handled')
    return{}
   }
}

