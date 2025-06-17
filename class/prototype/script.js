/* class Button{
  constructor(name){
    this.button=document.createElement('button')
    this.button.innerHTML=name
    document.body.appendChild(this.button)
  }
  onClick(fn){
    this.button.onclick=fn
  }
}
var b1=new Button('Hello')
console.log(b1);
console.log(typeof Button)    //function*/

// without class
//in js eath functionum constructor aayi use cheyyam

/*function MyButton(name){
  this.button=document.createElement('button')
  this.button.innerHTML=name
  document.body.appendChild(this.button)
  // return 'hello'       //new ilathe print cheythal o/p-hello
}
MyButton.prototype.onClick=function(fn){
  this.button.onclick=fn
}
var b2=new MyButton('Yo!')     //new vach vilich kayinja eathoru functionum oru constructor ayi act cheyyum 
b2.onClick(function(){
  console.log('clicked')
})
console.log(b2)           //o/p---button,MyButton  

//function name class name ayitt act cheyyum*/

// // inheritance
function MyButton(name){
  this.button=document.createElement('button')
  this.button.innerHTML=name
  document.body.appendChild(this.button)
}

MyButton.prototype.onClick=function(fn){
  this.button.onclick=fn
}

function MyGreenButton(name){
  MyButton.call(this,name)
}

console.log(Object.create(MyButton.prototype))
MyGreenButton.prototype=Object.create(MyButton.prototype)
MyGreenButton.prototype.onClick=function(fn){
  MyButton.prototype.onClick.call(this, ()=>{
    this.button.style.background='green'
    fn()
  })
}

MyGreenButton.prototype.printme=()=>{
  console.log('hello')
}

var b2=new MyGreenButton('Yo')
b2.onClick(function(){
  console.log('clicked')
})

console.dir(MyGreenButton)
console.dir(b2)
b2.printme() 

// prototype