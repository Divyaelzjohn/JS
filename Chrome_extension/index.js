
// let myLeads=[]
// const inputEl=document.getElementById("input-el")
// const inputBtn=document.getElementById("input-btn")
// // let inputBtn=document.getElementById("input-btn")



// inputBtn.addEventListener("click",function(){
//   console.log("Button clicked")
// })
// function saveLead(){
//   console.log("Button clicked!")
// }

// let inputBtn=document.getElementById("input-btn")
// inputBtn.addEventListener("click", function(){
//   console.log("Button clicked from addEventListener")
// })

// let box=document.getElementById("box")
// box.addEventListener("click",function(){
//   console.log("I want to open the box!")
// })

//  const playerName="per"
//  let credits=45
// credits=credits-10
// playerName="something else"

// const basePrice=520
// const discount=120
// let shippingCost=12
// let shippingTime="5-12 days"

// shippingCost=15
// shippingTime="7-14 days"

// const fullPrice=basePrice-discount+shippingCost
// console.log("Totaal cost: "+fullPrice+". It will arrive in"+shippingTime)

// let myLeads=["www.awesomelead.com","www.epiclead.com","www.greatlead.com"]
// let myLeads=`["www.awesomelead.com"]`
// myLeads=JSON.parse(myLeads)
// myLeads.push("www.epiclead.com") 
// myLeads=JSON.stringify(typeof myLeads)
// console.log(myLeads)
// myLeads=JSON.parse(myLeads)
// myLeads=JSON.stringify(myLeads)
// console.log(typeof myLeads)
////turn my leads string into array,push a new value to the array,turn the array into a string again,console.log the string using typeof to verify that it's a string
// myLeads=JSON.parse(myLeads)
// myLeads=push("www.leasds.com")
// myLeads=JSON.stringify(myLeads)
// console.log(typeof myLeads)

// const inputEl=document.getElementById("input-el")
// const inputBtn=document.getElementById("input-btn")
// const ulEl=document.getElementById("ul-el")
// const ulEl=document.getElementById("ul-el")
// console.log(ulEl)

// localStorage.setItem("myLeads","www.examplelead.com")
// console.log(localStorage.getItem("myLeads"))

// // localStorage.setItem("myName","Per Harald Borgen")
// let name=localStorage.getItem("myName")
// console.log(name)
// localStorage.clear()



// inputBtn.addEventListener("click", function(){
  // console.log("button clicked")
  
  // myLeads.push(inputEl.value)
  // inputEl.value=""
  // renderLeads()
  // console.log(myLeads)
  // localStorage.setItem("myLeads",JSON.stringify(myLeads))
  ////save the myLeads array to locslStorage  Ps:remember JSON .stringfy()
//   localStorage.setItem("myLeads",JSON.stringify(myLeads))
//   renderLeads()
//   console.log(localStorage.getItem("myLeads"))
// })
// function renderLeads(){
//   let listItems=""
//   for(let i=0;i<myLeads.length;i++){
  // listItems +="<li>"+myLeads[i]+"</li>"
  // listItems += `
  // <li>
  //   <a target='_blank' href="${myLeads[i]}">
  //     ${myLeads[i]}
  //   </a>
  // </li>
  // `
  // listItems += "<li><a target= '_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li>"
  // console.log(listItems)
//   }
//   ulEl.innerHTML=listItems
// }

// let listItems=""
// for(let i=0; i< myLeads.length; i++){
//   // console.log(myLeads[i])
//   // ulEl.textContent += myLeads[i]+" "
//   // ulEl.innerHTML += "<li>"+myLeads[i] + "</li>"
//   listItems+="<li>"+myLeads[i]+"</li>"
//   // create element
//   // const li=document.createElement("li")
//   // li.textContent=myLeads[i]
//   // ulEl.append(li)
// } 
// ulEl.innerHTML=listItems
// const container=document.getElementById("container")
// container.innerHTML="<button onclick='buy()'>Buy!</Button>"

// // function buy(){
// //   container.innerHTML="<p>Thank you for buying!</p>"
// // }
// function buy(){
//   container.innerHTML +="<p>Thank you for buying!</p>"
// }


// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// // // get the leads from local storage
// // localStorage.clear()
// let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeeads"))
// // // store it n a vaariablr , leadsfromLocalStorage
// console.log(leadsFromLocalStorage)
// // //Log out the variable
// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     // Save the myLeads array to localStorage 
//     localStorage.setItem("myLeads",JSON.stringify(myLeads))
//     // PS: remember JSON.stringify()
//     console.log(leadsFromLocalStorage)
//     renderLeads()
    
//     // To verify that it works:
//     console.log( localStorage.getItem("myLeads") )
// })

// function renderLeads() {
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {
//         listItems += `
//             <li>
//                 <a target='_blank' href='${myLeads[i]}'>
//                     ${myLeads[i]}
//                 </a>
//             </li>
//         `
//     }
//     ulEl.innerHTML = listItems  
// }

// let myLeads=[]
// const inputEl=document.getElementById("input-el")
// const inputBtn=document.getElementById("input-btn")
// const ulEl=document.getElementById("ul-el")

// // ["lead1","lead2"] or null

// let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadsFromLocalStorage)
// // check ifleadsFromLocalStorage is truthy
// // if SourceBuffer,set,myLeads to its value and call renderLeads()
// if(leadsFromLocalStorage){
//   myLeads=leadsFromLocalStorage
//   renderLeads()
// }

// inputBtn.addEventListener("click",function(){
//   myLeads.push(inputEl.value)
//   inputEl.value=""
//   localStorage.setItem("myLeads",JSON.stringify(myLeads))
//   renderLeads()
// })
// function renderLeads(){
//   let listItems=""
//   for(let  i=0;i<myLeads.length;i++){
//     listItems += `
//     <li>
//       <a target="_blank" href='${myLeads[i]}'>
//       ${myLeads[i]}</a>
//     </li>
//     `
//   }
//   ulEl.innerHTML=listItems
// }


// let myLeads=[]
// const inputEl=document.getElementById("input-el")
// const inputBtn=document.getElementById("input-btn")
// const ulEl=document.getElementById("ul-el")
// const deleteBtn=document.getElementById("delete-btn")
// // 1.Store the delete button in a deleteBtn variable

// const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

// if(leadsFromLocalStorage){
//   myLeads=leadsFromLocalStorage
//   renderLeads()
// }
// deleteBtn.addEventListener("dblclick",function(){
//   console.log("double clicked!")
//   localStorage.clear()
//   myLeads=[]
//   renderLeads()
// })

// //2.Listen for double clicks on the delete button

// //.3.when clicked, clear localStorage, myLeads, and the DOM

// inputBtn.addEventListener("click",function(){
//   myLeads.push(inputEl.value)
//   inputEl.value=""
//   localStorage.setItem("myLeads",JSON.stringify(myLeads))
//   renderLeads()
// })
// function renderLeads(){
//   let listItems=""
//   for(let  i=0;i<myLeads.length;i++){
//     listItems += `
//     <li>
//       <a target="_blank" href='${myLeads[i]}'>
//       ${myLeads[i]}</a>
//     </li>
//     `
//   }
//   ulEl.innerHTML=listItems
// // }
// let myLeads = []
// let oldLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")
// const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

// if (leadsFromLocalStorage) {
//   myLeads = leadsFromLocalStorage
//   render(myLeads)
// }

// function render(leads) {
//   let listItems = ""
//   for (let i = 0; i < leads.length; i++) {
//     listItems += `
//       <li>
//         <a target='_blank' href='${leads[i]}'>
//           ${leads[i]}
//         </a>
//       </li>
//     `
//   }
//   ulEl.innerHTML = listItems
// }

// deleteBtn.addEventListener("dblclick", function() {
//   localStorage.clear()
//   myLeads = []
//   render(myLeads)
// })

// inputBtn.addEventListener("click", function() {
//   myLeads.push(inputEl.value)
//   inputEl.value = ""
//   localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//   render(myLeads)
// })

// let myLeads = []
// let oldLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")
// const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
// const tabBtn=document.getElementById("tab-btn")
// // 1.grab the save tab button and store it in a tabBtn variable

// if (leadsFromLocalStorage) {
//   myLeads = leadsFromLocalStorage
//   render(myLeads)
// }
// // 2.listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
// const tabs=[
//   {url: "https://www.linked in.com/in/per-harald-borgen/"}
// ]

// tabBtn.addEventListener("click",function(){
//   //save the url instead of looging it out
//   // console.log(tabs[0].url)
//   localStorage.setItem("myLeads",JSON.stringify(myLeads))
//   // myLeads.push(tabs[0].url)
//   render(myLeads)
// })
// lknn
// // refactor the function so that it takes  a parameter, leads, that it uses 
// // instesd of the global myLeads variable. Remember to update all invocatons
// // of the function as well.

// function render(leads) {
//   let listItems = ""
//   for (let i = 0; i < leads.length; i++) {
//     listItems += `
//       <li>
//         <a target='_blank' href='${leads[i]}'>
//           ${leads[i]}
//         </a>
//       </li>
//     `
//   }
//   ulEl.innerHTML = listItems
// }

// deleteBtn.addEventListener("dblclick", function() {
//   localStorage.clear()
//   myLeads = []
//   render(myLeads)
// })

// inputBtn.addEventListener("click", function() {
//   myLeads.push(inputEl.value)
//   inputEl.value = ""
//   localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//   render(myLeads)
// })

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]


tabBtn.addEventListener("click", function(){
    // Grab the URL of the current tab!
    // chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        
    // })
    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
    
})


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})
