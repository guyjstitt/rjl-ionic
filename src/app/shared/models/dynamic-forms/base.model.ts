import { FormControl } from '@angular/forms';

import { validatorMapping } from './../../services/validator.service';

export class DynamicFormBase {
  public validators: any[] = [];

  constructor(
    public options: {
      name: string,
      value: any,
      validators?: []
    }
  ) {
    if (this.options.validators) {
      this.generateValidatorArr(this.options.validators)
    }
  }

  asControl() {
    return new FormControl({
      value: this.options.value !== undefined ? this.options.value : null 
    }, this.validators);
  }

  generateValidatorArr(validators: string[]) {
    return validators.reduce((acc, value) => {
      if (!value || !validatorMapping[value]) {
        console.error('validator not found', value);
        
        return acc;
      }

      acc.push(validatorMapping[value]);

      return acc;
    }, [])
  }
}