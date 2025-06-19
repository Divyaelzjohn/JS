/*const var1="Code Malayalam It\"s wonderful"
const var2='Code Malayalam It\'s wonderful'
const var3=`Code Malayalm.It's Wonderful`
//using backtick 1.Multiline String,2.expression inside a string

console.log(var1)
console.log(var2)
console.log(var3)*/

/*document.body.innerHTML=`<div className="item">
    <h4>Product Name</h4>
    <div>Price: 01</div>
</div>`*/

//Expression inide a string
/*var productName="Pen";
// var price="12 Rs"
var price=12;

// const value='The' +productName+ 'is' +price;
const value=`The ${productName} is ${price}`
//const msg=`The product is ${price>10?'Costly':'Cheap'}`
const msg=`The product is ${`Hello ${price}`}`
console.log(value)
console.log(msg)*/

const products=[
    {
        productName:'Pen',
        price:10
    },
    {
        productName:'Book',
        price:20
    }
];
document.body.innerHTML=products.map((item)=>{
return`
<div className="item">
    <h4>${item.productName}</h4>
    <div>Price:${item.price }</div>
</div>`
})