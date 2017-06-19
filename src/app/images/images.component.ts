import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  imageStyle = "";
  index = 0;
  indexCount = 3;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.index++;
    this.index %= this.indexCount;

    switch(this.index) {
      case 0 : {
        this.imageStyle = "img-rounded";
        break;
      }
      case 1 : {
        this.imageStyle = "img-circle";
        break;
      }
      case 2 : {
        this.imageStyle = "img-thumbnail";
        break;
      }
    }
  }
}
