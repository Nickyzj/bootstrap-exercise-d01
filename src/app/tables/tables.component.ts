import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent{

  tableStyle = "table";
  index = 0;
  tableStyleCount = 5;

  rowStyle = "";
  rowIndex = 0;
  rowStyleCount = 6;

  onSwitch() {
    this.index++;
    this.index = this.index % this.tableStyleCount;

    switch(this.index) {
      case 0: {
        this.tableStyle = "table";
        break;
      }
      case 1: {
        this.tableStyle = "table table-striped"
        break;
      }
      case 2: {
        this.tableStyle = "table table-bordered"
        break;
      }
      case 3: {
        this.tableStyle = "table table-hover"
        break;
      }
      case 4: {
        this.tableStyle = "table table-condensed"
        break;
      }
    }
  }

  onClickRow() {
    this.rowIndex++;
    this.rowIndex = this.rowIndex % this.rowStyleCount;
    switch(this.rowIndex) {
      case 0: {
        this.rowStyle = "";
        break;
      }
      case 1: {
        this.rowStyle = "success";
        break;
      }
      case 2: {
        this.rowStyle = "danger";
        break;
      }
      case 3: {
        this.rowStyle = "info";
        break;
      }
      case 4: {
        this.rowStyle = "warning";
        break;
      }
      case 5: {
        this.rowStyle = "active";
        break;
      }
    }
  }

}
