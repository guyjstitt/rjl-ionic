import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-switch',
  templateUrl: './form-switch.component.html',
  styleUrls: ['./form-switch.component.scss'],
})
export class FormSwitchComponent implements OnInit {
  @Input() dynamicForm: any;
  @Input() config: any;

  constructor() { }

  ngOnInit() {
    console.log('dynamic form', this.dynamicForm);
    console.log('config', this.config);
  }
}
