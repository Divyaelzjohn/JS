//Default parameters also called default argument

// function average(a=0,b=0){   //default value
// function average(a=getDefault(),b=0){
// function average(a,b=a){
function average(a,b=a+100){
    console.log(a,b)
    const avg=(a+b)/2
    return avg
}
function getDefault(){ 
    return 100
}
const avg=average(10)
console.log(avg)
