 console.log('started')
 $.ajax({
    type:'GET',
    url:'https://jsonplaceholder.typeicode.com/todos/1',
    success:(msg)=>{
        console.log(msg)
    },
    error:(xhr,statusText)=>{
        console.log(statusText)
    },
 })
 console.log('ended')
 