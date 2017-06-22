import { Component } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations'

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
      transition('active <=>inactive', animate('2000ms ease-in')),
      //transition('inactive => active', animate('500ms ease-in'))
    ]),
  trigger('myAnimation2', [
    state('out', style({transform: 'translateX(-150%)'})),
    state('in', style({})),
    transition('out => in', [
      animate(2500, keyframes([
        style({opacity: 0, transform: 'translateX(-305px)', offset: 0}),
        style({opacity: 1, transform: 'translateX(-115px) ',  offset: 0.2}),
        style({opacity: 1, transform: 'translateX(-200px)',  offset: 0.4}),
        style({opacity: 1, transform: 'translateX(-90px)',  offset: 0.7}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
    ]),
    transition('in => out', [
      animate(2500, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX( 100px)', offset: 0.2}),
        style({opacity: 1, transform: 'translateX( 100px) translateY(-100px)', offset: 0.6}),
        style({opacity: .5, transform: 'translateX(-150%)',  offset: 1.0})
      ]))
    ])
  ])

  ]
})
export class AppComponent {
  title = 'app';
  animationState= 'inactive';
   animationState2= 'out';

  animate(){
  this.animationState = (this.animationState === 'inactive'? 'active': 'inactive');
this.animationState2 = (this.animationState2 === 'out'? 'in' :'out');
}

  animate2(){
  this.animationState2 = (this.animationState2 === 'out'? 'in' :'out');
}

}

