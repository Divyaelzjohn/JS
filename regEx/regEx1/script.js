/*function textOnChange(arg){
    const label=document.getElementById('validation-label')
    const error=validate(arg.value)
    if(error){
        label.innerText=error
    }
    else{
        label.innerText=''
    }
}*/
/*function validate(value){
    // const regex=/^\d{1,2}-\d{1,2}-\d{4}$/i
    const regex=/^([012]?\d|3[01])-([0]?\d|1[012])-\d{4}$/i
    const result=regex.test(value)
    if (result){
        return ''
    }else{
        return 'Invalid String'
    }
}
*/
//date year moth extract cheyaam  --using max

/*function validate(value){
    const regex=/^(?:[012]?\d|3[01])-([0]?\d|1[012])-(\d{4})$/i   // round brace ullath print avum ---capturing group
    const result=value.match(regex)                               //rllam vendenkil--use --?: ___noncapturing
    console.log(result);
    
   if(result===null){
    return 'Invalid String'
   }
   else{
    return ''
   }
}
*/

/*flags 
i
m
g --global*/
