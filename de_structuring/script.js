// destructuring ---obj,array value assingn into variable
// const obj1={
//     name:'Code Malayalam',
//     place:'Kerala',
//     rank:100
// }
// function myFunction(){
//     // const name=obj1.name
//     // const place=obj1.place
//     // const rank=obj1.rank             //o/p
//     // const{                              //code Malayalam,kerala ,100
//     //     name,
//     //     place, 
//     //     rank
//     // }=obj1
//     // console.log(name,place,rank)
//     const {
//         name,
//         ...others
//     }=obj1
//     console.log(name,others)
// }
// myFunction()

// // Array
// const obj1={
//     name:'Code Malayalam',
//     place:'Kerala',
//     rank:1000,
//     status:null
// }
// const marks=[1,4,6,7,12]
// function myFunction(){
//     // const[a,,b,...others]=marks
//     // console.log(a,b,others)
//     const{
//         name,
//         place,
//         rank,
//         status=false
//     }=obj1
//     console.log(name,place,rank,status)
// }
// myFunction()

// const marks=[1,4,6]
// function myFunction(){
//     const [a,b,c,d=false]=marks
//     console.log(a,b,c,d)
// }
// myFunction()

// const marks=[1,4,6]
// function myFunction([a,b,c]){
//     console.log(a,b,c)
// }
// myFunction(marks)

// const marks =[1,4,6]
// var obj1={
//     name:'Code Malayalam',
//     place:'Kerala',
//     rank:100
// }
// function myFunction(){
//     var [a,b,c]=getValue()
//     console.log(a,b,c)
// }
// // function myFunction({name,place}){
// //     console.log(name,place)
// // }
// function getValue(){
//     return marks
// }
// myFunction(obj1)

var obj1={
    name:'Code Malayalam',
    place:'Kerala'
}
var obj2={
    name:'Bob',
    place:'America'
}
function abc(){
    var {
        name,
        place
    }=obj1
    var {
        name:name2,
        place:place2
    }=obj2
    console.log(name,place,name2,place2)
}
abc()                             //Bob   America
