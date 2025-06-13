// const welcomeEl=document.getElementById("welcome-el")
// // give the function parameter, greeting that replacesa'welcome backa'
// function greetUser(greeting, name){
//     // rewrite the Expression usingtemplate literals
//     welcomeEl.textContent=`${greeting}, ${name}👋 `
// }

// greetUser("Howdy","James")


// const welcomeEl=document.getElementById("welcome-el")
// function greetUser(greeting, name, emoji){
//     welcomeEl.textContent=`${greeting}, ${name}, ${emoji} `
// }

// greetUser("Howdy","James","👋")

// // create a function, add(),that adds two numbers together and return the sum
// function add(num1,num2){
//     return num1+num2
// }

// console.log(add(3,4))
// console.log(add(9,102))

//parameter
// function greetUser(greeting, name){
//     welcomeEl.textContent= `${greeting},${name} 👋`
// }

// // arguments
// let hi="Howdy"
// greetUser(hi,"James")

// function add(num1,num2){
//     return num1+num2
// }
// add(3,4)

// what are greeting and name? parameters
// what are "howdy" and "James"? argument
// what are num1 and num2? parameters
// what are 3 and 4? arguments


// create a function, getFirst(arr),that returns the first item in the array
function getFirst(arr){
    return arr[0]
}
let firstCard = getFirst([10,2,5])
console.log(firstCard)
// call it with an array as an argument to verify that it works
