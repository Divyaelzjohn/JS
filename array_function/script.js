// forEach( find()filter() Map() reduce())
const arr=[
    {
        name:'Alice',  
        mark:35,
        place:'Kannur'
    },
    {
        name:'Bob',
        mark:28,
        place:'Palakad'
    },
    {
        name:'Catherine',
        mark:44,
        place:'Trissur'
    },
    {
        name:'Daniel',
        mark:23,
        place:'Kollam'
    }
]
/* ----forEch----*/
// let sum=0
// // console.log(arr)
// arr.forEach((item,index)=>{
//     // console.log(item.name);  
//     // sum=sum+item.mark               //130
//     console.log(index)                 //0,1,2,3
// })
// // console.log(sum)

/*----Find----*///----match ulla first element return cheyyum
// var found=arr.find((item)=>{
//     return item.name==='Bob'
// })
// console.log(found)
// var found=arr.find((item)=>{
//     return item.mark<30
// })
// console.log(found)

/*----filte r----*///----match ull ella elememntum retun cheyyum and retuen as a array
// var found=arr.filter((item)=>{
//     // return item.mark<30
//     return item.name==='Bob'
// })
// console.log(found)

// var found=arr.filter((item,index)=>{
//     return index<2
// })
// console.log(found)

/*----map-----*/
// var newArr=arr.map((item)=>{
//     // return item.name+item.place;
//     // return 'hi'
//     return{
//         ...item,
//         country:"India"
//     }
// })
// console.log(newArr)     

/*----reduce----*/
// var value =arr.reduce((item)=>{
var value=arr.reduce((total,item)=>{
    total.push(item.name)
    // return total+item.mark;                   //23--last mark
    return total
// },0)
},[]);
console.log(value)