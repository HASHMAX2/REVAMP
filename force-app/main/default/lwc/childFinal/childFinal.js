import { LightningElement,api } from 'lwc';

export default class ChildFinal extends LightningElement {
    profileInfo

   @api get getterDemo()
   {
    return this.profileInfo
   }

   set getterDemo(data)
   {
    this.profileInfo = {...data, age:data.age*2,location:"australia",  Style : 'background:lightblue'}
   }
  
}