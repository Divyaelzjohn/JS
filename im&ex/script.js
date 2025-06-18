 const name='My Array Library'
 const options={
    version:'1.1',
    author:'Code Malayalam'
}
 function addAll(arr=[]){
    log('addAll')
    return arr.reduce((total,item)=>total+item,0)
}
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
    findMax
 }
