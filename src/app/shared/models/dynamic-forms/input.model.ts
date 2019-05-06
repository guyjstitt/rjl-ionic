import { DynamicFormBase } from './base.model';

export class DynamicFormInput extends DynamicFormBase {
  constructor(
    public options
  ) {
    super(options)
  }
}