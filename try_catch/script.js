//------try_catch----------

/*console.log('started ')

const a=getVal1()
const b=getVal2()

const result=processValues(a,b)
console.log(result)

console.log('ended')

function getVal1(){
  console.log('inside getVal1')
  var obj=undefined
  junk()
  // return 12
  return obj.value
}

function getVal2(){
  console.log('inside getVal2')
  return 22
}

function processValues(a,b){
  return a+b 
}  
*/

/*console.log('started')

let a;
try{
  console.log('on try')
  a=getVal1()
}
catch(e){
  console.log('on catch')
  a=0
}
const b=getVal2()

const result=processValues(a,b)
console.log(result)
console.log("ended")

function getVal1(){
  console.log('inside getVal1')
  var obj=undefined
  return obj.value
}
function getVal2(){
  console.log('inside getVal2')

  return 22 
}
function processValues(a,b){
  return a+b
}*/

//error in only in a use this

/*console.log('started')
let a,b,result
try{
  console.log('on try')
  a=getVal1()
  b=getVal2()
  result=processValues(a,b)
}
catch(e){
  console.log('on catch')
  result=0
}
 console.log(result)
 console.log('ended')
function getVal1(){
  console.log('inside getval1')
  // var obj=undefined
  // return obj.value
  return 12
}
function getVal2(){
  console.log('inside getVal2')
  return 22
}
function processValues(a,b){
  junk()
  return a+b
}
*/

//-----------finally-------------
/*console.log('started')
let a,b,result
try{
  console.log('on try')
  a=getVal1()
  b=getVal2()
  result=processValues(a,b)
}
catch(e){
  console.log('on catch')
  result=0
  amjsd()
}
finally{
  console.log("in finally")
}
console.log(result)
console.log('ended')

function getVal1(){
  return 12
}
function getVal2(){
  console.log('inside getVal2')
  return 22
  asdfds()
}
function processValues(a,b){
  junk()
  return a+b
}*/
//finally ----catch error indakuvo,catch return cheythaloo use cheyyum

//----throw-----namk error throw cheyyan
console.log('started')
let a,b,result
try{
  console.log('on try')
  a=getVal1()
  b=getVal2()
  result=processValues(a,b)
}
catch(e){
  console.log('inside catch',e)
  result=0
}
// finally{
//   console.log("in finally")
// }
console.log(result)
console.log('ended')

function getVal1(){
  return 12
}
function getVal2(){
  console.log('inside getVal2')
  // throw 'Ente awantham error'
  throw new Error('Ente swantham error')    //--it is java script syntax to write an error
  return 22
}
function processValues(a,b){
  return a+b
} 