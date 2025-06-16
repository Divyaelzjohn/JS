// callBack function

// Normal function
// function myFunction(arg){
//     console.log(arg);
// }
// myFunction(10)


// //call Back Function--arg kodukkan adikaram illenkil ulla function
// //call back function is a function passed as an argument to another function
// //it is a examle of asynchronus call back

// console.log('one');
// document.getElementById('button').onclick=myFunction;
// function myFunction(arg){
//   console.log(arg);               //o/p
// }                                 //one
// myFunction(10)                    //10
// console.log('two');               //two
//                                   //mouse click chayyuvanekil it work with function arg
// //myFunction(10) without this the code is call back function

// //Two types of call back function Synchronus and asynchronus
// //execute line by line -called thread of execution
// //function and the one ,two both are two diffrent thrad
// //function only excute when the button clicked.so it is asynchronus
// //asynchronus-function running in parallel with other functions -eg:event handler ,button click,select,mouse over,data fetch

// //synchronus-utility call backs eg: for each,map,reduce
// console.log('one')
//                                   //o/p
// const a=[2,3,7,6,4,5]             //one
//                                   //1
//                                   //2
// function myFunction(arg){         //7
//   console.log(arg)                //6.....
// }                                  //two

// a.forEach(myFunction)

// console.log("Two")

// -------normal way rihgt the code 
// console.log('one')
                                  
// const a=[2,3,7,6,4,5]             
                        
// a.forEach(function(arg){     
//   console.log(arg)                
// })

// console.log("Two")
//a function has no name it is called anonimus function

