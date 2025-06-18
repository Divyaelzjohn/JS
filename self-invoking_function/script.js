//It is related to variable scoping
//variable scoping---1.Globla Scope,2.Local Scope,3.Block Scope
//Local scope--example--function akth delcare cheythal athin akathninnu mathre access cheyyan pattu

/*function fn1(){
  var number=12
  console.log(number)
}
function fn2(){
  console.log(number)
}
fn1()
fn2()*/

//Global variable--we can access from any where (include any file)

/*var number=25
function fn1(){
  console.log(number)
}
function fn2(){
  console.log(number)
}
fn1()
fn2()*/

// var button=document.getElementById('hello')
// button.style.background='green'
// button.onclick=()=>{
//   console.log(button.innerHTML)
// }

//when we write like this there is an error occure when we press hello button out put is bye to remove this we can use this function
//so we use local scopeing 
/*function main(){
  var button=document.getElementById('hello')
  button.style.background='green'
  button.onclick=()=>{
    console.log(button.innerHTML)
  }
}*/
// main()
//when we call main( again in other funtion it override to avoid this javascript provide a function called immediate invokation)
//javascript provide immediate invokation
//syntax----it is self i
(function(){
  var buttoon=document.getElementById('hello')
  buttoon.style.background='green'
  buttoon.onclick=()=>{
    console.log(buttoon.innerHTML )
  }
})()
