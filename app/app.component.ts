import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title | uppercase}}!</h1>
  <p>Date today: {{today | date:'shortDate' | uppercase}}</p>
  <p>Percent: {{percentNumber | percent}}</p>
  <p>e (3.1-5): {{e | number}}</p>
  <pre>{{object | json}}</pre>
  <p>2 power 10: {{ 2 |  exponentialStrength:2}}</p>
  <ul>
    <li *ngFor="let i of collection | slice:1:3">{{i}}</li>
  </ul>
  <my-tutorial></my-tutorial>
  `,
})
export class AppComponent {
  public title = "Hello TEDU Channel"
  public today = Date.now();
  public percentNumber = 1.3495;
  public  e: number = 2.718281828459045;
   public object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

   public collection: string[] = ['a', 'b', 'c', 'd'];
}
