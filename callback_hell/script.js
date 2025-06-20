//how to remove call back using promis,async await

/*
issues with nested coding
-deficult to maintain nested code
-difficult error handling
-difficult in modularizing
*/

// function getAllStudentsForClassTecher2(cls,successFn,errorFn){
//     get(`${BASE_URL}/class/${cls}.json`,(data)=>{
//         const classTeacher=data.classTeacher;
//         get(`${BASE_URL}/staff/${classTeacher}.json`,(data)=>{
//             const classess=data.classess
//             let count=0
//             let sum=0
//             let error=false
//             for(let i=0;i<classess.length;i++){
//                 const element=classess[i]
//                 get(`${BASE_URL}/class/${element}.json`,(data)=>{
//                     count++
//                     sum+=data.numberOfStudents
//                     if(!error && count===classess.length){
//                         successFn(sum)
//                     }
//                 },(err)=>{
//                     if(error===false){
//                         errorFn(err)
//                         error=true
//                     }
//                 })
//             }
//         },errorFn)
//     },errorFn)
// }



/*const get=require('./api.js')

const BASE_URL='https://github.com/code-malayalam/school-test-api/'

function getTotalStudnets(clsName,success,failure){
   get(`${BASE_URL}/class/${clsName}.json`,(data)=>{
    console.log(data)
    const classTeacher=data.classTeacher
        get(`${BASE_URL}/staff/${classTeacher}.json`,()=>{
            console.log(data)
            const classess=data.classess
            let count=0
            let sum=0
            let error=false
            for(let index=0;index<classess.length;index++){
                const element=classess[index]
                get(`${BASE_URL}/class/${clsName}.json`,(data)=>{
                    count++
                    sum=sum+data.numberOfStudents
                    if(count===classess.length&& error===false){
                        console.log(sum)
                        success(sum)
                    }
                },(err)=>{
                    error=true
                    error(err)
                })
            }
        },failure)
   },()=>{})
}
getTotalStudnets('10c', (data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})

*/

// using promise to avoid callback hell

/*const get=require('./api.js')
    const BASE_URL="https://coDe-malayalam.github.git.io?school-test-api"
    function getTotalStudentsPr(clsName){
        return axios(`$(BASE_URL/class/${clsName}`.at.json)
            .then((data)=>{
                const classTeacher=data.classTeacher
                return  axios(`${BASE_URL}/staff/${classTeacher}.json`,)   
            })
            ,then(()=>{
                const classess=data.data.classess
                classess.map(element=>{
                    return axios(`{BASE_URL}/classsdsa/${element}.json`)
                })
                return Promise.all(promiseArr)
             })
            .then((data)=>{
                return data.reduce((total,item)=>{
                    return total+item.data.numberOfStudents
                },0)
            })
            // .then((data)=>{
            //     // console.log(data)
            //     return data
            // })
            // .catch((err)=>{
            //     // console.log(err)
            //     return 0
            // })
    }

    function getTotalStudnets(clsName,success,failure){
        get(`${BASE_URL}/class/${clsName}.json`,(data)=>{
         console.log(data)
         const classTeacher=data.classTeacher
             get(`${BASE_URL}/staff/${classTeacher}.json`,()=>{
                 console.log(data)
                 const classess=data.classess
                 let count=0
                 let sum=0
                 let error=false
                 for(let index=0;index<classess.length;index++){
                     const element=classess[index]
                     get(`${BASE_URL}/class/${clsName}.json`,(data)=>{
                         count++
                         sum=sum+data.numberOfStudents
                         if(count===classess.length&& error===false){
                             console.log(sum)
                             success(sum)
                         }
                     },(err)=>{
                         error=true
                         error(err)
                     })
                 }
             },failure)
        },()=>{})
     }
     getTotalStudentsPr('10c')
     .then((data)=>{
        console.log('***',data)
     })
     .catch((err)=>{
        console.log('ERROR')
     })
     */

 const get=require('./api.js')
 const axios=require('axios')
 const BASE_URL='https://code-malayalam.github.io/school-test-api'

 async function gerTotalStudentsAS(clsName){

    try{
        const data=await axios(`${BASE_URL}/class/${clsName}.json`)
        const classTeacher=data.data.classTeacher
        const data2=await axios(`${BASE_URL}/class/${clsName}.json`)
        const classes=data2.data.classes
        const promiseArr=classes.map((element)=>{
            return axios(`${BASE_URL}/class/${element}.json`)
        })
        const data3=await Promise.all(promiseArr)
        const result=data3.reduce((total,item)=>{
            return total+item.data.numberOfStudents
        },0)
        return result
    }catch(e){

    }
}
getTotalStudentsAs('10c')
    .then((data)=>{
        console.log('***',data)
    })
    .catch((errr)=>{
        console.log('ERROR')
    })
 
    