function myFetch(url){
  return new Promise((res,rej)=>{//res-resolve,rej-reject
    $.ajax({
      type:"GET",
      url:url,
      success:function(msg){
        // console.log(msg)
        res(msg)
      },
      error:function(xhr,statusText){
        // console.log(statusText)
        rej(statusText)
      },
    })  
  })
}