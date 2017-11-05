import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1> {{name}}</h1>
                <employee-details></employee-details>`,
})
export class AppComponent  { name = 'NgFor directive'; }
