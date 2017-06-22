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
      }))
    ])
  ]
})
export class AppComponent {
  title = 'app';
  animationState= 'inactive';

  animate(){
  this.animationState =(this.animationState === 'inactive'? 'active': 'inactive');
}

}

