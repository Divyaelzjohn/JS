// functions are three types
// 1.anonimous function
// 2.normal function
// 3.arrow function

// console.log('one')
// const a=[2,3,7,6,4,5]
// a.forEach(item=>console.log(item))
// console.log('two')

// function myFunction(val){
//     console.log("Hello World",val)
// }
// myFunction();

// // const values=[1,2,3,4,5,6,7];
 
// //----it is afunction with name(myFunction)
// myFunction(100)
// // error!----------fn(200)
// function myFunction(val){                   //o/p
//     console.log("Hello Me",val)             //hello me 1,2,.....
// }
// // values.forEach(myFunction)
// //it

// //----it is a function without name
// // values.forEach(function(val){               //o/p
// //        console.log("Hello World",val);      //hello world 1,2,3
// // });

// const fn=function(val){                 //o/p
//     console.log("Hello World=",val)     //hello world1,2,3.....
// }
// // myFunction(100)
// fn(200)
 
// // values.forEach(fn)

//--- anonimus function -call only after declaration
//--- but normal function call before the declaration--its is called Hoisting


// arrow function-anonimus function ezhuthan ulla puthiya syntax

// const fn=function(a,b){
//     // console.log("Hello World=",val)
//     return a*b
// }
// // const fn2=(a,b)=> { 
// //     // console.log("Hello Me=",val)
// //     return a+b
// // }
// // //----when the code is only one line we can remove {} and return like
// // const fn2=(a,b)=>a+b
// // //------if an only if one argument there is no need of () like
// // const fn2=a=>a+100
// // const add=fn2(3)
// //----return a string
// const fn2=()=>"Hello"

// // fn(1)
// // fn2(2)

// const mult=fn(3,2)
// const add=fn2(3,2)


// console.log(add,mult)


// //---array return
// const fn2=()=>[1,2,3,4,5]
// const val=fn2()
// console.log(val)

// //----object return
// //1st method
// // const fn2=()=>({
// //     a:1,
// //     b:2
// // })
// //second method
// const fn2=()=>{
//     return {
//         a:1,
//         b:2
//     }
// }

// const val=fn2()
// console.log(val)

//functionality base diff from anonimous andarrow function
const obj ={
    a:100,
    b:200,
    // myFun:function(){    //o/p----300
    myFun:()=>{  //using array function    //o/p----NaN
        return this.a+this.b //wihtout 'this' it is not working
    }
}
console.log(obj.myFun( ))

