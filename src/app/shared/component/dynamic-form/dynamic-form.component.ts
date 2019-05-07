import { DynamicFormService } from './../../services/dynamic-form.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { config } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() dynamicForm: FormGroup;
  @Input() config: any;

  constructor() { }

  ngOnInit() {
    console.log('dynamic form top', this.dynamicForm);
  }
}
