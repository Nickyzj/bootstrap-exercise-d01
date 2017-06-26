import { Component, OnInit } from '@angular/core';
import { DialogsService } from './dialogs.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})

export class DialogComponent implements OnInit {

  public result: any;

  constructor(private dialogsService: DialogsService) {}

  ngOnInit() {
  }

  public openDialog() {
    this.dialogsService
      .confirm('Confirm Dialog', 'Are you sure you want to do this?')
      .subscribe(res => this.result = res);
  }

}

