/*function test(){
    const arr=[11,33,43,22]
    const[a,...rest]=arr              //array destructure
    
    console.log(a,rest)
}
test()*/

/*// rest parameters
function test(...rest){
    const a=rest.reduce((sum,current)=>sum+current)
    console.log(a)
}

// test(11,44,64,22,66,3)
const a=[11,44,64,22,66,3,100]
test(...a)*/

//parameter destructuring---it is opposite to rest operator
// function test(a){
    // console.log(a)
function test({name,age}){     //ith pole eytham
    /*const{
        name,               //igane ezhuthunnathinu pakaram parameter ullil eytham
        age
    }=a*/
    console.log(name,age)
}
const obj={
    name:'Code Malayalam',
    age:1
}
test(obj)