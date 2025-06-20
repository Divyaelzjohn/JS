/*const val1=5
const val2=5
console.log("Integer",val1===val2)

const val3="Code Malayalam"
const val4="Code Malayalam"
console.log("String",val3===val4)

const val5=["Code","Malayalam"]
const val6=["Code","Malayalam"]
console.log("Array",val5===val6)

const val7={name:"Code Malayalam"}
const val8={name:"Code Malayalam"}
console.log("Object",val7===val8)
*/

/* Data Types -
1.Primitive--string,number,bigint,boolean,undefined,symbol,null
2.Non-primitive--object,array,map,function
*/
//primitives direct value edkkukkum 
//non primitives reference edkkum


// mutable and immutable

/*
it is mutable-it can change
var a={
    name:'Code Malayalam'
}
var b=a
b.name='Code Malayalam 2.0'
console.log('a=',a)
console.log('b=',b)*/

/*
immutable--can't be changed
var a=10
var b=a
b=b+1
console.log('a=',a)
console.log('b=',b)
*/
/*
variable store reference
mutable-value can chnage
immutable-value cannot change
primitives are always immutable
non primitives are mutable
immutable!=const
const-reference cannot be changed
immutable-value cannot be changed
*/

function junk(obj){
    //  obj.test="Test"
     const ret={
        ...obj,
        test:"test"
     }
     return ret
}

const myObj={
    name:'Code Malayalam '
}

var ret=junk(myObj)
console.log(myObj)
console.log(ret)
console.log(ret===myObj);

// splice-changes conntents of an array
