// var button=document.getElementById('mybutton')
// button.onclick=()=>{
//     console.log('hello')
// }

var button=document.getElementById('mybutton')
button.onclick=()=>{
  console.log('started click event')
  $.ajax({
    url:'https://jsonplaceholder.typicode.com/todos/1',
    success:(data)=>{
      console.log(data)
    },
    async:false,      //it is synchronus
  })
  console.log('ended click event') 
}
// this is a asynchronus call back
// event therunna munne excute cheythal synchronu call back
// event kazhinj next event varumbo ann execute cheyunnathenkil asynchronus call back*/

/*var button=document.getElementById('mybutton')
button.onclick=()=>{
  console.log('started click event')
  var arr=[1,2,3,4,5]
  arr.forEach((item)=>{               //synchronus
    console.log(item)
  })
  console.log('ended click event')
}

/*var button=document.getElementById('mybutton')
button.onclick=()=>{
  console.log('started click event')
  var arr=[]
  $.ajax({
    url:'https://jsonplaceholder.typicode.com/todos/1',         //asynchronus
    success:(data)=>{
      console.log('ajax1 started',data.title)
      arr.push(data.title)
      $.ajax({
        url:'https://jsonplaceholder.typicode.com/todos/2',
        success:(data)=>{
          console.log('ajax2 started',data.title)
          arr.push(data.title)
          console.log('ajax2 ended')

          document.getElementById('mytext').value=arr.join('\n')
        },
        async:true
      })
      console.log('ajax1 ended')
    },
    async:true
  })

  // $.ajax({
  //   url:'https://jsonplaceholder.typicode.com/todos/2',        //syunchronus call back
  //   success:(data=>{
  //     console.log('ajax2 started',data.title)
  //     arr.push(data.title)
  //     console.log('ajax2 ended')
  //   }),
  //   async:true
  // })
  // document.getElementById('mytext').value=arr.join('\n')
  console.log('ended click event')
}*/
//synchronus  call back disadvantage event blocking
//asynch nammal eythiya code block cheyyilla
