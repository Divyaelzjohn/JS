// const recipient="James"
// const sender="Per Haraald"


// const email=`
//     Hey ${recipient}!
//     How is it going? 
//     Cheers Per ${sender}
//     `
// console.log(email)

// const credits=0

// if (credits) {
//     console.log("Let's play 🎰")
// } else {
//     console.log("Sorry, you have no credits 😭")
// }
// truthy
// falsy

// false
// 0
// ""
// null -> how to a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN -> Not a Numb

// let currentViewers=null
// currentViewers=["jane","nick"]
// //exampleo f null
// currentViewers=null
// if(currentViewers){
//     // do something,e.g. notify the live streamers
//     console.log("we have viewers")
// }

// let currentViewers=["jane"]
// //example.undefined
// console.log(currentViewers[5])

// let trueorFalse=Boolean("")
// console.log(trueorFalse)

// console.log(Boolean(""))
// console.log(Boolean("0"))
// console.log(Boolean(100))
// console.log(Boolean(null))
// console.log(Boolean([0]))
// console.log(Boolean(-0))

// const player="per"
// const opponent="Nick"
// const game="AmazingFighter"

// let points=0
// let hasWon=false

// points+=100
// haswon=true

// if(hasWon){
//     console.log(`${player} got ${points}  points and won the ${game} game!`)
// }
// else{
//     console.log(`The winner is ${opponent} ! ${player} lost the game`)
// }

// let myCourses=["Learn Css Animations", "UI Design Fundamentals","Intro to clean code"]

// // create a function that takes a single parameter , an Array,
// // and logs all  the items of the array to the console.
// // assertCalll the function while passing in myCourses as an argument

// function logItems(arr){
//     for (let i=0;i<arr.length;i++){
//         console.log(arr[i])
//     }
// }
// logItems(myCourses)


// // save a value to localStorage
// // Delete your code and refresh the page 
// // Fetch your value from localStorage and log it out

// let myCredits=localStorage.getItem("myCredits")
// console.log(myCredits)


// using css

// let data=[
//     {
//         player:"Jane",
//         score:52
//     },
//     {
//         player:"Mark",
//         score:41
//     }
// ]
// //Fetch the button from the DOM, store it in a variable
// //Use addEventListener() to listen for button clicks
// //Log Jane's score when the button is clicked (via data)
// const janeBtn=document.getElementById("jane-btn")
// janeBtn.addEventListener("click",function(){
//     console.log(data[0].score)
// })
// The generateSentence(DecompressionStream, arr) takes two parameter: a description and an Array.
// It should return a string based upon the description and array
//
// Example 1: if you pass in : "largest countiries",and ["China","India","USA"],
// it should return the String: "The 3 largest countries are China,India,USA"

// Example 2: If you pass in "best fruits" and ["Apple","Bananas"], it should return:
// "The 2 best fruits are Apples,Bananas"

// Use both a for loop and a template string to solve the challenge

// function generateSentence(desc,arr){
//   let baseString=`The ${arr.length} ${desc} are`
//   const lastIndex=arr.length-1
//   for(let i=0;i<arr.length;i++){
//     if(i===lastIndex){
//       baseString += arr[i]
//     }
//     else{
//       baseString +=arr[i]+", "
//     }
//   }
//   return baseString
// }
// const sentence=generateSentence("highest mountains",["Mount Everest","K2"])
// console.log(sentence)


// Create a function that render the three team images
// Use a for loop, template string(``), plus equals (+=)
// .innerHTML to solve the challnge
// const imgs=[
//   "img/hip1.jpg",
//   "img/hip2.jpg",
//   "img/h1p3.jpg"
// ]

// const container=document.getElementById("container")
// function renderImages(){
//   let imgsDOM=""
//   for(let i=0; i<imgs.length; i++){
//     imgsDOM+=`<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`
//   }
//   container.innerHTML=imgsDOM
// }
// renderImages()

