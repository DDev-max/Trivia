import { AbstractControl, ValidationErrors } from '@angular/forms';
import type { FormArray } from '@angular/forms';

export function maxLengthArrayValidator(max: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const formArray = control as FormArray;
    if (formArray.controls && formArray.length >= max) {
      return { maxLengthArray: { max } };
    }
    return null;
  };
}
