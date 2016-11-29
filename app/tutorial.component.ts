import {Component} from '@angular/core';

@Component({
    selector:'my-tutorial',
    template:`
    <h2>{{title}}</h2>
    <button (click)="OnClick($event)">Click me</button>
    <input type="text" #name />
    `
})
export class TutorialComponent{
    public title = "This TEDU Angular2 Tutorial component";

    OnClick(value){
        console.log(value); 
    }
}
