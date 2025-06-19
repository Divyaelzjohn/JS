
let isGreen=true
let handle=null     //it is used to stop intervel
export function changeBg(){
    handle= setInterval(()=>{   //it help to change color in 500 m.s
        document.body.style.background=isGreen?'green':'blue'
        isGreen=!isGreen
    },500)
}
export function stopChangingBg(){
    if(handle){
        clearInterval(handle)       //using this the timer is stoped
        handle=null
        document.body.style.background='none'
    }
}

//delay page load,unnecessary server load
//solution feature 2 click cheyyumbo mathram load cheyyanm
//so we use dynamic import. it use in script.js(we create button)