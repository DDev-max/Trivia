import { AbstractControl, ValidationErrors } from "@angular/forms";

export function localStorageValidator(control: AbstractControl): ValidationErrors | null {  
  const triviaName = control.value?.trim();
  if (!triviaName) return null;

  const exists = localStorage.getItem(triviaName) !== null;
  return exists ? { itsInLocalStorage: true } : null;
}