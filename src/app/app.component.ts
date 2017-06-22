import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular Design and Templating';
  toggleState = true;
  mouseState = true;
logoUrl ="http://lnked.in/linkedinlogopng";

toggleLogo(){
  this.toggleState = (this.toggleState? false: true);
}
imgChger(){



   if(this.mouseState){
     this.toggleState = true;
     this.logoUrl = "http://lorempixel.com/400/200";

    setTimeout(()=>{
this.logoUrl ="http://lnked.in/linkedinlogopng";
    }, 2000);
}

}

  listener(e){
    console.log(e.target);
  }
}


