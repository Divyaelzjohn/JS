//  console.log('started')
//  $.ajax({
//     type:'GET',
//     url:'https://jsonplaceholder.typeicode.com/todos/1',
//     success:(msg)=>{
//         console.log(msg)
//     },
//     error:(xhr,statusText)=>{
//         console.log(statusText)
//     },
//  })
//  console.log('ended')
 

//  resolve ,reject
// resolve--API call vilich athinte success call vilikkunnath ann succcess


/*console.log('started')

const pr = fetch('https://jsonplaceholder.typicode.com/todos/1')
// pr.then((data)=>{
//   console.log(data)
// })
function buttonClick(){
  console.log('clicked')
  pr.then((data)=>{
    console.log(data)
  },
  (err)=>{
    console.log(err)
  })
}
// console.log(pr) 
console.log('ended')*/

//how to create a call back

// console.log('started')

const pr=myFetch('https://jsonplaceholder.typeicode.com/todos/1')
function buttonClick(){
  console.log('clicked')
  pr.then((data)=>{
    console.log(data)
  },
  (err)=>{
    console.log(err)
  })
}
console.log('ended')
