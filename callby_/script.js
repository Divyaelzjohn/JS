// function one(){
//     // var a=100
//     // var a={                //object declaring
//     //     value:100
//     // }
//     var a=[100]                //using array
//     two(a)
//     console.log('one',a[0])
//     // console.log('one',a.value) //object declaring
// }
// function two(a){
// //     a.value=a.value+1          //object declaring
// //     console.log('two',a.value)
//     a[0]=a[0]+1
//     console.log('two',a[0])       //o/p----two 101,one 101
// }
// one()


// function one(){
//     var a=100 
//     two(a)
//     console.log('one',a)
// }
// function two(a){
//     a=a+1
//     console.log('two',a)
// }
// one()

//two types of memmory stack and heap
//--stack---local ayic heyhtituula variable povunnath
// stack obj copy cheyyum

// function one(){
//     var a={
//         value1:100,
//         value2:100,
//         value3:100,
//         value4:100,
//         value5:100,
//         value6:100,
//         value7:100
//     }
//     two(a)
//     console.log('one',a)
// }
// function two(a){
//     a=a+1
//     console.log('two',a)
// }
// one()
// //heap object reffernce copy cheythidum 


function one(){
    var a={
        value:100
    }
    two(a)
    console.log('one',a.value)
}
function two(a){
    a={
        value:400
    }
    console.log('two',a.value)
}
one()  