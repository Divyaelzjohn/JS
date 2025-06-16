// const myObj ={
//     a:1,
//     b:2,
//     c:function(){
//         // console.log('hello')
//         console.log(this)//----{a: 1, b: 2, c: ƒ}
//     }
// }
// var aa=myObj.c
// // console.log(aa)
// // console.log(myObj)//---o/p---{a: 1, b: 2, c: ƒ}  
// myObj.c()  //o/p---hello

// // using arrow function
// const myObj={
//     a:1,
//     b:2,
//     c:()=>{
//         console.log(this)
//     }
// }
// var aa=myObj.c
// myObj.c()
// aa()  
//egane call egheythalum ithinte context eythiya sthalthinte context aan 
//anonimus and normal function  vilikkunna context ann this
//in arrow function ezhuthuiyathinu anusarichulla context ann this--

// const myObj={
//     a:1,
//     b:1,
//     c:function(){                    //o/p
//         console.log(this)            //Window
//     }
// }
// const yourObj={  
//     k:12,
//     j:22
// }

// var aa=myObj.c
// // aa()
// //vilikumbo than  e context set cheyyanulla function ann ------call
// aa.call(yourObj)

// // anther one is ---apply it like call
// //apply koduthal 2nd arg array ayirikkanm
// const myObj={
//     a:1,
//     b:2,
//     c:function(a,b){
//         console.log(this,a,b)
//     }
// }
// var k=myObj.c
// // k.call(myObj,1,2)                       //{a:1,b:2,c:f}1 2
// k.apply(myObj,[1,2])

// ///--ezhuthumbo thanne context set cheyyan ------bind
// myObj.c=myObj.c.bind(myObj)
// var k=myObj.c
// k()  


// class MyClass{
//     myFunction(){ 
//         console.log(this)
//     }
// }
// var obj=new MyClass()
// // var  a=obj.myFunction
// var a=obj.myFunction.bind(obj)
// a(obj)                  //o/p ----MyClass{}
// // a()                  //o/p ----undefined---class ullil anekil window print cheyila 
// // a.call(obj)          //o/p ----MyClass{}
// // obj.myFunction()     //o/p ----MyClass{}

class MyClass{
    myFunction=()=>{
        console.log(this)
    }
}
const myc=new MyClass()     //o/p ----MyClass
// myc.myFunction()
const k=myc.myFunction
k()
