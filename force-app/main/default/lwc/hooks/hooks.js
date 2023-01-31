import { LightningElement } from 'lwc';

export default class Hooks extends LightningElement {
    name = 'ali'
    constructor()
    {
        super()
        {   console.log('constructor')
           
            const card = this.template.querySelector('lightning-card')
            console.log(card)
           
            const inp = this.template.querySelector('lightning-input')
            console.log(inp)
            
        }
    }
   /* handleClick(event)
    {
        const inp = this.template.querySelector('lightning-input').name
            console.log(inp)
    }*/
}