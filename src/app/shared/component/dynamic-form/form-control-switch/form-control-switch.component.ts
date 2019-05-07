import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-control-switch',
  templateUrl: './form-control-switch.component.html',
  styleUrls: ['./form-control-switch.component.scss'],
})
export class FormControlSwitchComponent implements OnInit {
  @Input() dynamicForm: any;
  @Input() control: FormControl;
  @Input() config: any;

  constructor() { }

  ngOnInit() {
    console.log('dtest');
  }

}
