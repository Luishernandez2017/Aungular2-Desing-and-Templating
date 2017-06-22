import { Component } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // set animations trigger and state
  animations:[
    trigger('myAnimation', [
      state('inactive',
      style({
        backgroundColor: '#eee'

      })),

      state('active', style({
        backgroundColor: '#ffcc00'
      })),
      transition('active <=>inactive', animate('1000ms ease-in')),
      //transition('inactive => active', animate('500ms ease-in'))
    ]),
    trigger('myAnimation2', [
      state('inactive', style({
        transform: 'translateX(-305px)'
      })),
      state('active', style({
        transform: 'translateX(0px)'
      })),
      transition('inactive => acitve',
      animate('300ms ease-in')



      ),


    ])
  ]
})
export class AppComponent {
  title = 'app';
  animationState= 'inactive';
   animationState2= 'inactive';

  animate(){
  this.animationState = (this.animationState === 'inactive'? 'active': 'inactive');
  this.animationState2 = (this.animationState2 === 'inactive'? 'active' :'inactive');
}

}

