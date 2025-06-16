// // stack---local variable store cheyyum
// // heap ---object store cheyyunnu

// function add(a,b){
//     function myAdd(){
//         const c=a+b
//         return c
//     }
//     return myAdd
// }
// function main(){
//     const res=add(3,4)
//     const val=res()
//     console.dir(res)//closure use
// }
// main()

// // stack akath value illathe work cheyyipikkunna method closure
// // oru enclosing function parent functione variable access cheyyan  js use method closure

// function main(a){
//     [1,2,3,4,5]
//     .forEach(function(i){
//         console.log(i,a)
//     })
// }
// main(10)

// closure use case example
var objs=[
    {
        name:'One',
        msg:"Hello I am one"
    },
    {
        name:'Two',
        msg:'Hello I am two'
    },
    {
        name:'Three',
        msg:"Hello I am three"
    }
]

function main(){
    objs.forEach((item)=>{
        const bt=document.createElement('button')
        bt.innerHTML=item.name
        bt.onclick=getCallBack(item.msg)
        document.body.appendChild(bt)
    })
}
function getCallBack(arg){
    return function(){
        alert(arg)
    }
}
// function myCallback(){
//     // alert('hi') 
// }
main()