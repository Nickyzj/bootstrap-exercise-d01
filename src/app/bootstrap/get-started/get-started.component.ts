import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  containerStyle = "container-fluid";

  constructor() { }

  ngOnInit() {
  }

  onSwitch() {
    if (this.containerStyle === 'container-fluid') {
      this.containerStyle = 'container';
    } else {
      this.containerStyle = 'container-fluid';
    }

  }

}
