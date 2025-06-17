/*class Button{
  constructor(name){
    this.button=document.createElement('button')
    this.button.innerHTML=name
    document.body.appendChild(this.button)
  }
  //using setter---setter used to convert assignment operator function call
  set width(width){
    this.button.style.width=width+'px'
  }
  set height(height){
  this.button.style.height=height+'px'
  }
  // using getter---getter used to convert functioncall to assignment operator
  get width(){
    // return this.button.style.width    //remove the px use parse int
    return parseInt(this.button.style.width,10)  //o/p:100*2
  }
  get height(){
    return parseInt(this.button.style.height,10)
  }
}

var b1=new Button('Click Me!',100,100)
b1.width=100
b1.height=100
// console.log(b1)----------------setter
console.log(b1.width,b1.height)     //o/p :--100px*2*/

/*using object*/

var b1={
  init(name){                               //init used because of no constructor
    this.button=document.createElement('button')
    this.button.innerHTML=name
    document.body.appendChild(this.button)
  },
  set width(width){
    this.button.style.width=width+'px'
  },
  set height(height){
    this.button.style.height=height+'px'
  },
  get width(){
    return parseInt(this.button.style.width,10)
  },
  get height(){
    return parseInt(this.button.style.height,10)
  }
}
b1.init('click')
b1.width=100
b1.height=100
