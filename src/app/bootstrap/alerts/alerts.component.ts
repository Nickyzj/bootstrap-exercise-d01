import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'display': 'block'
      })),
      state('hidden', style({
        'opacity': 0,
        'display': 'none'
      })),
      transition('normal <=> hidden', animate(1300))
    ])
  ]
})
export class AlertsComponent implements OnInit {

  isAlertShow = true;
  state = 'normal';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onClickAlert() {
    this.router.navigate(['./'], {relativeTo: this.route});
  }

  onCloseAlert(myAlert) {
    this.state = 'hidden';
  }

  onShowAlert(myAlert) {
    this.state = 'normal';
  }


}
