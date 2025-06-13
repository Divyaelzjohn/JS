// document.getElementById("count").innerText = 5

// cmd+k+c
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

// let myAge = 35
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let count = 5
// count = count + 10
// count = count - 2
// count=count+1

// console.log(count)

// let bonusPoints=50
// console.log(bonusPoints)
// bonusPoints=bonusPoints+50
// console.log(bonusPoints)
// bonusPoints=bonusPoints-75
// console.log(bonusPoints)
// bonusPoints=bonusPoints+45
// console.log(bonusPoints)

// function increment(){
//     console.log("The button was clicked")
// }

// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// countdown()

// function myLogger(){
//     console.log(42)
// }
// myLogger()

// let lap1=34
// let lap2=33
// let lap3=36

// function logLapTime(){
//     let totalTime=lap1+lap2+lap3
//     console.log(totalTime)
// }

// console.log(totalTime)
// logLapTime()


// let lastCompleted=0
// function incrementLap(){
//     lastCompleted=lastCompleted+1
// }
// incrementLap()
// incrementLap()
// incrementLap()
// console.log(lastCompleted)


// camelCase
// let countEl= document.getElementById("count-el")//pass in arg
// console.log(countEl)
// let count=0
// function increment(){
//     count=count+1
//     countEl.innerText=count
// }

// function save(){
//     console.log(count)
// }

// let username="per"
// console.log(username)
// let message="You have a three new notification"
// let messageToUser=message+","+username+"!"
// console.log(messageToUser)

// let name= 42
// let greeting=" Hi , my name is "
// let MyGreeting= greeting+name
// console.log(MyGreeting)

// let points=4
// let bonusPoints="10"
// let totalPoints=points + bonusPoints
// console.log(totalPoints)

// console.log(4+5)
// console.log("2"+"4")
// console.log("5"+1)
// console.log(100+"100")

// let countEl=document.getElementById("count-el")
// let count=0
// function increment(){
//     count+=1
//     countEl.innerText=count
// }
// function SVGAElement(){
//     console.log(count)
// }

let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
let count=0

// console.log(saveEl)

function increment(){
    count+=1
    countEl.textContent=count
}

function save(){
    let countStr=count+" - "
    saveEl.textContent+=countStr
    countEl.textContent=0
    count=0
    // console.log(count)
} 

