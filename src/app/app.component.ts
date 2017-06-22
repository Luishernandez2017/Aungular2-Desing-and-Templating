import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Design and Templating';

  ngStyles ={
    'color': 'red',
    'font-weight': 'bold'
  }
  myColor='blue';
}


