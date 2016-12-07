import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-clients></my-clients>
  `
})
export class AppComponent {
  title = 'Clients Salon';
}
