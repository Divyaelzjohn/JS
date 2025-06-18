// const cache=null
/*const cache={
  name:'Code Malayalam'
}

function getJson(url){
  if(cache){
    // return cache
    // 
    // return Promise.resolve(cache)    //it is a static function
    return Promise.reject(cache)
  }
  return fetch(url)
  .then((data)=>{
    return data.json()
  })
}*/
// function convertToPromise(data){
//   return new Promise((res,rej)=>{      //it has same function as "Promise.resolve"
//     res(data)
//   })
// }

function getJson(url){
  return fetch(url)
  .then((data)=>{
    return data.json
  })
}