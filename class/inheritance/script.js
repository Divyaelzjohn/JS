class Button{
  constructor(name){
    this.button=document.createElement('button')
    this.button.innerHTML=name
    document.body.appendChild(this.button)
  }
  onClick(fn){
    this.button.onclick=fn
  }
}
// var b1=new Button('My Button 1')
// b1.onClick(function(){
//   console.log("clicked")
// })

//inheritance--reuse cheyyan
class GreenButton extends Button{

  constructor(name){
    super(name)
  }
  // constructor(name){
  //   this.button=document.createElement('button')
  //   this.button.innerHTML=name
  //   document.body.appendChild(this.button)
  // }
  onClick(fn){
    super.onClick(function(){                        //parent onclick
      this.button.style.background='green'
     fn()
    }.bind(this))            
    // this.button.onclick=function(){
    //   this.button.style.background='green'
    //   fn()
    // }.bind(this)
  }
  printme(){
    console.log('me')
  }
}
var b1=new GreenButton('GButton')
b1.onClick(function(){
  console.log("Clicked")
})
b1.printme()