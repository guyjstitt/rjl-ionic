import { Injectable } from "@angular/core";
import { FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { DynamicFormInput } from '../models/dynamic-forms/input.model';

@Injectable()
export class DynamicFormService {

  /* 
    Goals:
      1. create a generic service that can generate reactive forms from configs
      2. can generate a form group, form array, or control at any level
      3. re-usable, simple, understandable


    TODO
    1. Create form group based on server configuration
      - create control, group, or array for each 
      - config will be array or arrays
        - first array will define the row
        - second array defines the form within the row
          - what if a form within a row expands multiple rows? answer: continue to add columns
    2. A control could also be a form group or form array
       - how do we handle columns within a column? if a form group/array has 3 controls inside on column
  */

    /**
   * 
   
  [
    [
      name: 'my-group'
      formType: 'formGroup'
      controls: [
        {
          name: 'my-control',
          formType: 'control',
          inputType: 'input' 
        },
        {
          name: 'my-child-group',
          formType: 'formGroup',
          controls: [
            {
              name: 'my-child-control'
              formType: 'control',
              inputType: 'input'
            }
          ]
        }
      ]
    ],
    [
      name: 'my-array',
      formType: 'formArray',
      controls: [
        {
          name: 'my-arr-group',
          formType: 'formGroup',
          controls: [
            {
              name: 'my-arr-control'
              formType: 'control',
              inputType: 'input'
            }
          ]
        }
      ]
    ]
    [
      name: 'my-control',
      formType: 'control'
    ]
  ]
*/
 
  // loop through top level rows to generate 
  generateForm(formConfig) {
    let parentGroup = new FormGroup({});

    for (let row of formConfig) {
      this.generateSubForm(parentGroup, row);
    }

    return parentGroup;
  }

  /*
    Lets say first row is a form group with controls.

    1. adds empty form group to parent group
    2. passes formgroup to populate fn
    3. populate function loops through controls and calls generate sub form again
    4. in this case, we only have controls. So we'll add them to the form group
    5. 
  */
  generateSubForm(parentGroup, row) {
    for (let column of row) {
      switch(column.formType) {
        case 'formGroup':
          this.populate(parentGroup, new FormGroup({}), column);

          break;
        case 'formArray':
          this.populate(parentGroup, new FormArray([]), column);

          break;
        case 'formControl':
          this.addControl(parentGroup, column);

          break;
        default:
          break;
      }
    }
  }


  // TODO better names
  populate(parentGroup, form, column) {
    let container = null;

    switch(true) {
      case parentGroup instanceof FormGroup:
        parentGroup.addControl(column.name, form);
        container = parentGroup.get(column.name);
        break;
      case parentGroup instanceof FormArray:
        parentGroup.push(form);

        container = parentGroup.at(parentGroup.length - 1);
        break;
      default:
        console.error('invalid parent form', parentGroup);
        break;
    }
    
    if (container) {
      this.generateSubForm(container, column.controls);
    } 
  }

  /** 
      possible problem, need to change stratefy depending on parent group type
   */
  addControl(group: any, config) {
    switch(true) {
      case group instanceof FormGroup:
        this.addFormControl(group, config);
        break;
      case group instanceof FormArray:
        this.pushFormControl(group, config);
        break;
      default:
        console.error('invalid form type', config);
        break;
    }
  }

  //todo add validators
  addFormControl(formGroup: FormGroup, config) {
    switch(config.type) {
      case 'input':
        formGroup.addControl(config.name, new DynamicFormInput(config).asControl());
        break;
      default:
        console.error('invalid input type', config);
        break;
    }
  }

  // TODO feel like im missing something + format config
  pushFormControl(formArray: FormArray, config) {
    switch(config.type) {
      case 'formGroup':
        formArray.push(new FormGroup(config));
        break;
      case 'formArray':
        formArray.push(new FormArray(config));
      case 'formControl':
        formArray.push(new FormControl(config));
      default:
        console.error('invalid form type', config);
        break;
    }
  }
}