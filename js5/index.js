// let firstCard=10
// let secondCard=11

// let sum=firstCard+secondCard+6//23

// console.log(sum)
// if (sum < 21){
//     console.log("Do you want to draw a new card?")
// }
// else if(sum === 21){
//     console.log("Wohoo! You've got Blackjack!")
// }
// else{
//     console.log("You're out of the game!")
// }

// let age=21
// if (age<21){
//     console.log("You can not enter the club")
// }
// else{
//     console.log("Welcome!")
// }

// let age=100
// if(age<100){
//     console.log("Not elegible")
// }
// else if(age === 100){
//     console.log("Here is your birthday card from the King!")
// }
// else{
//     console.log("Not elegible, you have already gotten one")
// }


// console.log(4===3)//false
// console.log(5>2)//true
// console.log(12>12)//false
// console.log(3<0)//false
// console.log(3>=3)//true
// console.log(11<=11)//true
// console.log(3<=2)//false


let firstCard=getRandomCard()
let secondCard=getRandomCard()
let cards=[firstCard,secondCard]//array-ordered list of items
let sum=firstCard+secondCard
let hasBlackJack = false
let isAlive=true
let message=""
let messageEl=document.getElementById("message-el")
// console.log(messageEl)
let sumEl=document.getElementById("sum-el")
// console.log("sum-el")
let cardsEl=document.getElementById("cards-el")
//make this function return a random number between 1 and 13
console.log(cards)
function getRandomCard(){
    // if 1 -> retun11
    // if 11-13->return 10
    // return Math.floor(Math.random()*13)
    let randomNumber= Math.floor(Math.random()*13)+1
    if(randomNumber>10){
        return 10
    }else if(randomNumber===1){
        return 11
    }else{
        return randomNumber
    }
}

// function declaration
function startGame(){
    renderGame()
}
function renderGame(){
    // cardsEl.textContent="Cards: "+cards[0]+" "+cards[1]
    cardsEl.textContent="Cards: "

    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i]+" "
    }

    sumEl.textContent="Sum: "+sum
    if (sum<=20){
        message="Do you want to draw a new card?"
    }
    else if(sum===21){
        message="You've got Blackjack!"
        hasBlackJack=true
    }
    else{
        message="You've out of the game!"
        isAlive=false
    } 
    // console.log(message)
    messageEl.textContent=message
}
function newCard(){
    // console.log("Drawing a new card from the deck!")
    let card = getRandomCard()
    sum += card
    cards.push(cards)
    console.log(cards)
    renderGame()
}

// console.log(isAlive)

// console.log(hasBlackJack) 


