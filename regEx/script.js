// patterns
/*// pttern rules
const regexp=/cat/i         //this is the syntax to write a regular expression
                            //i is a flag
// const regexp=new RegExp('cat','i')     //elaborate cheyth eythunne                     
const result=regexp.test('my Cat')
console.log(result)*/

// const regexObj=/[cr]at/i;
// const regexObj=/[k-z0-9]at/i;
// const regexObj=/^cat/i
// const regexObj=/meat$/im ;  //m is a flag m-multiline---line end meat indekil true varum
/*const regexObj=/^is/im

const str1="The 9cat is white";
const str2="Cat eats meat";
const str3="There are good meats";
const str4=`
good meat
is always good
`;

// var result1=regexObj.test(str1)
// console.log(result1)

// var result2=regexObj.test(str2)
// console.log(result2)

// var result3=regexObj.test(str3)
// console.log(result3)

var result4=regexObj.test(str4)
console.log(result4)
*/

/*// const regexObj=/fish(es)?$/im
// const regexObj=/meats*$/im 
const regexObj=/meats.+$/im

const str1="The cat is white"
// const str2="Cat eats fish"
// const str3="These are good fishes"
const str2="Cat eats meat"
// const str3="These are good meatssss"
const str3="These are good meatshjk"


var result1=regexObj.test(str1)
console.log(result1)

var result2=regexObj.test(str2)
console.log(result2)

var result3=regexObj.test(str3)
console.log(result3)
*/
// const regex=/.*/i
/*const regex=/[^kmj]/i
const string='Hello'

// regex.test(string)
const result=regex.test(string)
console.log(result)*/

// const regex=/l{2}o$/i   //true
// const regex=/l{4,6}o$/i
// const regex=/He{4,6}o$/i
/*const regex=/Hel{2, }o$/i
const string='Hellllo'
const result=regex.test(string)   
console.log(result)*/
 
/*const regex=/\d/i
const string='Hell9o'
const result=regex.test(string)
console.log(result )*/


const regex=/\./i
const string='334.12'
const result=regex.test(string)
console.log(result)


// special characters
// []--range 
// -
// ^---starting of a string
// ^[]--not in 
// $--- end of string
// ?---optional --?munne ullath varam varthirikkam
// ()---group cheyaan
// *---0 or many
// +---1 or many--minimum 1 venm 
// .---any char,symbol,number
// {}--exact no koukkan
// \d---digit           // \ is called escape character ,special character escape cheyyanum ith use cheyyum
// \D---non digit
// \s---whitespace
// \S---non-whitespace
// \w---word character
// \W---non-word character
//  |---or-1 true

function textOnChange(arg){
    const label=document.getElementById('validation-label')
    const error=validate(arg.value)
    if(error){
        label.innerText=error
    }
    else{
        label.innerText=''
    }
}
function validate(value){
    const regexp=/^[a-z][a-z0-9_]*$/i
    const result=regexp.test(value)
    if(result){
        return ''
    }
    else{
        return 'Invalid String'
    }
    return false
}

