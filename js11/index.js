// let person={
//     name:"per",
//     age:35,
//     country:"norway"
// }
// function logData(){
//     console.log(person.name+" is "+person.age+" years old and lives in "+person.country)
// }
// logData()

// conditonal statment

// let age=25
// if(age<6){
//     console.log("free")
// }
// else if (age<18){
//     console.log("child discount")
// }
// else if(age<27){
//     console.log("student discount")
// }
// else if(age<67){
//     console.log("full price")
// }
// else{
//     console.log("senior citizen discount")
// }
// console.log("The 5 largest countries in the world:")
// let largeCountries=["Tuvalu","India","USA","Indonesia","Monaco"]
// for (let i=0;i<largeCountries.length; i++){
//     console.log("- "+largeCountries[i])
// }
// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)

// let dayOfMonth=13
// let weekday="Tuesday"
// if(dayOfMonth===13&& weekday==="friday"){
//     console.log("😱")
// }

// let hands=["rock","paper","scissor"]
// function getHand(){
//     let randomIndex=Math.floor(Math.random()*3)
//     return hands[randomIndex]
// }
// console.log(getHand())

let fruit=["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf=document.getElementById("apple-shelf")
let orangeShelf=document.getElementById("orange-shelf")

function sortFruit(){
  for(let i=0;i<fruit.length;i++){
    if(fruit[i]==="🍎"){
      appleShelf.textContent+="🍎"
    }
    else if(fruit[i]==="🍊"){
      orangeShelf.textContent+="🍊"
    }
  }
}
sortFruit()
