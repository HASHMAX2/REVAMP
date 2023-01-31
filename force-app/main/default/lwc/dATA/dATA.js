import { LightningElement, track } from 'lwc';

export default class DATA extends LightningElement {
   @track country = 'india'
   percentage= 10
   Profile={
    name: 'ALi', age: 28

   }

   cars =['bmw', 'audi', 'merc']
   handleChnage(event)
   {
    const name = event.target.name
    console.log(event.target.name)
    if(name === 'one')
    {
        this.Profile = {...this.Profile, 'name':event.target.value}
    }
    if(name === 'two')
    {
        this.Profile = {...this.Profile, 'age':event.target.value}
    }
    
    
   }
   
   get getterVal()
   {
    return 2+2
   }
   handleChnagepercetage(event)
   {
    this.percentage = event.target.value
   }
   get percentValue()
   {
    return `width:${this.percentage}%` 
   }

}