import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'], 
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
    ])
  ]
})
export class AnimationsComponent implements OnInit {

  state = 'normal';

  constructor() { }

  ngOnInit() {
  }

  onAnimate() {
    this.state == "normal" ? this.state = "highlighted" : this.state = "normal";
  }

}
