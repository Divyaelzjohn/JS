// var a="Code Malayalam"
// let a='Code Malayalam'
// const a="Code Malayalam"
// console.log(a)

// var                 // corrupts window object
                       // var will Hoistllows multiple declaraion in a scope
                       // allow multiple declaration in ascope
                       // function scope
                       // Hoisted

// var a  =10          //when we declare a variable outside (global declare) the function  it store s in the window object
// window.a=10         //window objectil illatha propery venm global variable ayitt upayogikkan---example
// let location="hello";
// console.log(a)

//let                  //wont corrupts window object
                       //wont hoist
                       //only one declaration in ascope
                       //block scope
                       //not hoisted
 
// scope diff
/*unction test(){
    console.log(testVar)
    testVar=12
    var testVar 
    console.log(testVar)
}
// hoisting  ----------evedennu declare cheythalum declaration topil koduvan idum,hoisting complicated
test()*/

/*function test(){
    console.log(testVar)
    var testVar
    testVar=12
    var testVar
    var testVar
}
test()*/

/*function test(){       

    if(true){           //block
        var a=100
    }
    console.log(a)       //var blockin akath ayalum access cheyyan patttum
}
test()*/

/*function test(){
    let a=20
    if(true){
        // let a=100
        console.log(a)
    }
    // console.log(a)       //let blockin akath mathre access cheyyan pattu
}
test()

*/

function test(){
    const a=[]
    a=[12,11]
    // a.push(12)
    // console.log(a)
}
test()