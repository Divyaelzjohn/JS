// import {                //using named import and export
//     addAll,
//     findMax,
//     LibraryName as Name///we can change name using as  
// } from "./script.js"

// const val=addAll([1,2,3])
// // console.log(val)
// const max=findMax([22,12,67,4])
// console.log(max)
// console.log(Name)


/*import add from './script.js'

const max=add([22,12,67,4])     
console.log(max)

console.log(add)

console.log(add())   //--function ()*/

//how to combine these two
/*import myPrint,{      //---default export myPrint
    addAll,           //---named expoert
    findMax           
}from './script.js'
*/

//how to get all-----ethra import vennelumkodukkam
import * as libobj from './script.js'
/*var a='./script.js'           -----wrong
import { text1 } from a*/
// import{text1} from './script2.js'

console.log(libobj)

const max=libobj.findMax([1,4,2])
console.log(max)
