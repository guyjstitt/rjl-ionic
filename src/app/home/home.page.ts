import { DynamicFormService } from './../shared/services/dynamic-form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public config: any = [
    // [
    //   {
    //     name: 'control-one',
    //     formType: 'formControl',
    //     type: 'input'
    //   },
    //   {
    //     name: 'control-two',
    //     formType: 'formControl',
    //     type: 'input',
    //     validators: ['required']
    //   }
    // ],
    // [
    //   {
    //     name: 'row-two-control-one',
    //     formType: 'formControl',
    //     type: 'input'
    //   },
    //   {
    //     name: 'row-two-control-two',
    //     formType: 'formControl',
    //     type: 'input',
    //     validators: ['required']
    //   }
    // ],
    // [
    //   {
    //     name: 'group-one',
    //     formType: 'formGroup',
    //     controls: [
    //       {
    //         name: 'group-one-control-one',
    //         formType: 'formControl',
    //         type: 'input'
    //       },
    //       {
    //         name: 'group-one-control-two',
    //         formType: 'formControl',
    //         type: 'input'
    //       },
    //       {
    //         name: 'group-one-nested-group',
    //         formType: 'formGroup',
    //         controls: [
    //           {
    //             name: 'nested-group-control-one',
    //             formType: 'formControl',
    //             type: 'input'
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // ],
    [
      {
        name: 'array-one',
        formType: 'formArray',
        controls: [
          {
            name: 'array-group-one',
            formType: 'formGroup',
            controls: [
              {
                name: 'array-control-one',
                formType: 'formControl',
                type: 'input'
              },
              {
                name: 'array-control-two',
                formType: 'formControl',
                type: 'input'
              }
            ]
          },
          {
            name: 'array-group-two',
            formType: 'formGroup',
            controls: [
              {
                name: 'array-two-control-one',
                formType: 'formControl',
                type: 'input'
              },
              {
                name: 'array-two-control-two',
                formType: 'formControl',
                type: 'input'
              }
            ]
          }
        ]
      }
    ]
  ];

  constructor(
    public dynamicFormService: DynamicFormService
  ) {}

  ngOnInit() {
    let formGroup = this.dynamicFormService.generateForm(this.config);

    console.log('group', formGroup.value);
  }
}
