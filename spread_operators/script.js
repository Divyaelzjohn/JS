// useful ofrarray ,obj,function arg 

// var obj={
//     a:1,
//     b:2,
//     c:'Hello'
// }
// var obj2={
//     ...obj          //that means write like a:1,b:2,c:"Hello"
// }
// console.log(obj)
// console.log(obj2)

// // -----Array

// var a=[1,2,3,4]
// var b=[...a]
// console.log(a)
// console.log(b)

// var obj={
//     a:1,
//     b:2,
//     c:'Hello'
// }
// // var obj2=obj
// // console.log(obj2===obj)   //o/p----true
// var obj2={
//     ...obj
// }
// console.log(obj2===obj)      //false
// //-----------it is called cloing or shallow cloning
// //---obj concatinate cheyyan,clone indakkan,concatinate cheythathil property add cheyyan 

// var objA={
//     a:1,
//     b:2,
//     c:'Hello'
// }
// var objB={
//     a1:1,                        //o/p
//     b1:2,                        //a:1,b:2,c:"hello 2",a1:1,b1:2
//     c:'Hello 2'                  // the o/p is comabained of both
// }                                //last varunnathin kudutham pripority indavuka
// var obj2={
//     ...objA,
//     ...objB,
//     // z:32
// }
// console.log(obj2)


// Array
// var a=[1,2,3,4]
// var b=[6,7,8,9]
// var c=[...a,...b]
// console.log(c)

// var a=[1,2,3,4]
// // var b=a              //true
// var b=[...a]            //false
// console.log(b===a)   

// // shallowcloning ----
// var obj1={
//     a:1,
//     b:2,
//     c:{
//         name:'raman',      //both lines are same
//         age:45
//     }
// }
// // var obj2=obj1           //a:1,b:2,c:33*2
// var obj2={...obj1}         //a:1,b:2,c:2      ,, a:1,b:2,c:33
// // obj2.c=33
// obj1.d=44                  // it only added obj1
// obj1.c.name="krishnan"
// console.log(obj1,obj2)

// // deep cloning ----

// // js argument
// // var a=Math.max(1,2,33,49,15,6)       //o/p ---49
// var arr=[1,2,33,49,15,6]                //o/p ---NaN
// var a=Math.max(...arr)                  //49   using spread
// console.log(a)