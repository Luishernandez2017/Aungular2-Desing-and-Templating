import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newUser;
  title = 'Angular Desing and Templating.';
  sport ="surfing";
  teams=[
    {baseball: 'Braves'},
    {baseball: 'Indians'},
    {baseball: 'Yankees'}


  ]
  user = {
    name: "Juan",
    email: "juan@mail.com"
  }
}
