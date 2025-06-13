// let featuredPosts=[
//     "Check out my Netflix clone",
//      "Here's the code for my project",
//      "I've just relaunched my portfolio"
// ]
// console.log(featuredPosts[0])

// let experience=["CEO at Scrimba","frondend developer at Xeneta","People counter for Norst"]
// console.log(experience[1])
// console.log(experience[2])
// console.log(experience[3])
// console.log(featuredPosts.length)

// let per=["Per Harald Borgen",35,true]


// let cards=[7,4]

// cards.push(6)

// let messages=[
//     "Hey,how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]
// let newMessage="Same here!"

// messages.log(messages)
// messages.push(newMessage)
// messages.pop()
// console.log(messages)


// for(let count=10;count<21;count+=2){
//     console.log(count)
// }


// for(let i = 0; i < 6; i += 1){
//     console.log(i)
// }
// for(let i = 0; i < 101; i += 10){
//     console.log(i)
// }


// let messages = [
//     "hey, how's it going?",
//     "I'm grat, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear",
//     "imj"
// ]
// DRY-Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

// for(let i=0; i<5; i+=1){
//     console.log(messages[])
// }


// let cards=[7,3,9]
// for (let i = 0; i < cards.length; i++){
//     console.log(cards[i])
// }

// let sentence=["Hello","my","name","is","per"]
// let greeetingEl=document.getElementById("greeting-el")

// for(let i = 0; i < sentence.length; i++){
//     greeetingEl.textContent +=sentence[i]+" "
// }


// let player1Time = 102
// let player2Time =107

// function getFastestRaceTime(){
//     if (player1Time<player2Time){
//         return player1Time
//     }else if(player2Time<player1Time){
//         return player2Time
//     }else{
//         return player1Time
//     }
// }
// let FastestRace= getFastestRaceTime()

// console.log(FastestRace)

// function getTotalRceTime(){
//     return player1Time+player2Time
// }
// let totalTime=getTotalRceTime()
// console.log(totalTime)


// math object
// let randomNumber =Math.random() * 6
// console.log(randomNumber)
// let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber)

let randomNumber = Math.floor(Math.random()*6)+1
// console.log(randomNumber)

function rollDice(){
    let randomNumber=Math.floor(Math.random()*6)+1
    return randomNumber
}
console.log(rollDice())

