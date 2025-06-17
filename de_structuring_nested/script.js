// var obj={
//     name:'Alice',
//     mark:35,
//     place:'Kannur',
//     subject:{
//         teacher:'Bob'
//     }
// }
// var{
//     // name,mark
//     subject:{
//         teacher
//     }
// }=obj
// // console.log(name,mark) 
// console.log(teacher)

// in arrays
/*var arr=[11,22,33]
var [val1,val2,val3]=arr
console.log(val2)*/

//array +object
/*var arr=[
  {
    name:'Alice',//it is a object
    mark:35,
    place:'Kannur',
    subject:{
      teacher:'Bob'
    }
  },22,33]         //it is an array
var[{
  // name     
  subject:{
    teacher
  }     
}]=arr
// console.log(name)  //o/p:--Alice
console.log(teacher)*/

var obj={
  name:'Alice',
  mark:35,
  place:'Kannur',
  // subject:{
  //   teacher:'Bob'
  // }
}
var{
  subject:{
    teacher
  }={}
}=obj
console.assertlog(teacher)

//LODASH