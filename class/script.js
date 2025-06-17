/*class Student{
  name
  yob
  place
  // constructor-- class akathulla function name ann 
  constructor(name,yob){
    this.name=name
    this.yob=yob
  }
  getAge(){
    return new Date().getFullYear()-this.yob
  }
  getName(){
    return this.name
  }
}
//new  meaning create a new object
var student=new Student('Alen',1990)
// student.name='Alen'
var student1=new Student('Bob',1995)
var student2=new Student('Cook',1980)
console.log(student)
console.log(student1)
console.log(student2)*/
  

// static function-related to class
// function printMinYob(...args){
//   var arr=args.map((item=>item.yob))
//   console.log(Math.min(...arr))
// }

class Student{
  name
  yob
  constructor(name,yob){
    this.name=name
    this.yob=yob
  }
  //static function inside of the class
  static printMinYob(...args){
    var arr=args.map((item=>item.yob))
    console.log(Math.min(...arr))
  }
  getAge(){
    return new Date().getFullYear()-this.yob
  }
  getName(){
    return this.name
  }
}
//it is a static function
// Student.printMinYob=function(...args){
//   var arr=args.map((item=>item.yob))
//   console.log(Math.min(...arr))
// }
var student1=new Student('Alen',1990)
var student2=new Student('Bob',1995)
var student3=new Student('Cook',1980)
// console.log(student1)
// console.log(student2)
// console.log(student3)
// printMinYob(student1,student2,student3)
Student.printMinYob(student1,student2,student3)
