import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Design and Templating';
  property1 = false;
  property2 = true;
  property3 = true;

  myClasses ={
    danger: this.property1,
    safe: this.property2,
    changed: this.property3
  }
  myFunction(count){
    console.log(count.value.length);
  }
  alertStatus(status){
    if(status == 'danger'){
      return true;
    }
  }
}


