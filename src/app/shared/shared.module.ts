import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
import { FormSwitchComponent } from './component/dynamic-form/form-switch/form-switch.component';
import { FormControlSwitchComponent } from './component/dynamic-form/form-control-switch/form-control-switch.component';
import { DynamicFormService } from './services/dynamic-form.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormControlSwitchComponent,
    FormSwitchComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicFormComponent
  ],
  providers: [
    DynamicFormService
  ]
})
export class SharedModule { }
