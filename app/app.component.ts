import { Component,ViewChild } from '@angular/core';
import {TutorialComponent} from './tutorial.component';
@Component({
  selector: 'my-app',
  template: `
  <h1>Helo {{title}}!</h1>
  <p>Agree: {{agreed}}. Disgree: {{disgreed}}
  <my-tutorial *ngFor="let item of names" [name]="item" (onVote)="onVoteParent($event)"></my-tutorial>
  `,
})
export class AppComponent {
  public title = "TEDU Channel"
  public agreed: number = 0;
  public disgreed: number = 0;

  @ViewChild(TutorialComponent)
  private tutorialComponent : TutorialComponent;

  public names = ['Mr A','Mr B','Ms C','Mrs D'];

  onVoteParent(agree:boolean){
      if(agree) this.agreed ++;
      else this.disgreed++;
      this.tutorialComponent.changeName('Name changed');
  }
}
