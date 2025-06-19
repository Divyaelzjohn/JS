//  import {test1} from './script2.js'

 const name='My Array Library'
 const options={
    version:'1.1',
    author:'Code Malayalam'
}
 function addAll(arr=[]){
    log('addAll')
    return arr.reduce((total,item)=>total+item,0)
}
// export default function findMax(arr=[]){
function findMax(arr=[]){
    log('findMax')
    return Math.max(...arr)
}
function log(val){
    console.log('INSIDE',val)
}
//two types of export---1.named,---2.default
//Named-to  exportusing names ,it give starting of a function
 export{
    name as LibraryName,
    options, 
    addAll,
    findMax,
}

// defalut-name is not important
// export default findMax;
// export default 5
export default()=>{
   console.log('hello') 
}  

// export {text1} from './script2.js'
export * as myname from './script2.js'