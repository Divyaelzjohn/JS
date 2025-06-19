// import { stopChangingBg } from "./feature2.js";
import {createButton} from "./widget.js";
// import {changeBg,stopChangingBg} from './feature2.js'
createButton('Features 1',()=>{
    // console.log('clicked Feature 1')
    alert('feature1')
})
// createButton('Feature 2',()=>{
createButton('Feature 2',async()=>{
    // console.log('clicked Feature 2')
   /* import('./feature2.js')                 //this is dynamic impoert
        .then((obj)=>{
            createButton('Start Disco',obj.changeBg)
            createButton('Stop Disco',obj.stopChangingBg)
        })*/
    /* createButton('Start Disco',changeBg)
    createButton('Stop Disco',stopChangingBg)*/
    const obj=await import('./feature2.js')
    createButton('Start Disco',obj.changeBg)
    createButton('Stop Disco',obj.stopChangingBg)
})