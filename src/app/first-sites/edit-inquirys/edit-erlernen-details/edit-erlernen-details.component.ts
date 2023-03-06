import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-edit-erlernen-details',
  templateUrl: './edit-erlernen-details.component.html',
  styleUrls: ['./edit-erlernen-details.component.scss'],
})
export class EditErlernenDetailsComponent implements OnInit {
  @Input() data:any;

  editable = new BehaviorSubject(true);
  constructor() { }

  ngOnInit() {}

  changeEditable(){
    if (this.editable.getValue()){
      this.editable.next(false);
    } else {
      this.editable.next(true);
    }
  }

}