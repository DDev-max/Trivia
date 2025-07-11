import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Options } from '../../quiz/quizJson';

export function checkBoxValidators(
  control: AbstractControl
): ValidationErrors | null {
  const options = control.value as Options[];

  const hasAtLeastOneCorrect = options.some(
    (option) => option.isCorrect === true
  );
  const allAreCorrect = options.every((opt) => opt.isCorrect === true);

  if (!hasAtLeastOneCorrect) {
    return { noCorrectAnswer: true };
  }

  if (allAreCorrect) {
    return { allAreCorrect: true };
  }

  return null;
}
