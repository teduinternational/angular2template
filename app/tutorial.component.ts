import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `
    <h2>{{title}}</h2>
    <p>Child component: {{name}}</p>
    <button [disabled]="voted" (click)="vote(true)">Agree</button>
    <button [disabled]="voted" (click)="vote(false)">Disgree</button>
    <p>{{voted}}</p>
    `
})
export class TutorialComponent {
    @Input() name: string;
    @Output() onVote = new EventEmitter<boolean>();

    public voted: boolean = false;
    changeName(name:string){
        this.name = name;
    }
    vote(isVoted: boolean) {
        this.onVote.emit(isVoted);
        this.voted = true;

    }
}
