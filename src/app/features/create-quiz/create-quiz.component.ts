import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { checkBoxValidators } from './validators/check-box-validators';
import { localStorageValidator } from './validators/local-storage-validator';
import { RouterLink } from '@angular/router';
import { maxLengthArrayValidator } from './validators/max-length-validator';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-create-quiz',
  imports: [ReactiveFormsModule, DialogComponent, RouterLink],
  templateUrl: './create-quiz.component.html',
  styleUrl: './create-quiz.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateQuizComponent {
  quizForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.quizForm = this.fb.group({
      triviaName: [
        'My trivia game',
        [Validators.required, localStorageValidator],
      ],
      questions: this.fb.array(
        [this.createQuestion()],
        [maxLengthArrayValidator(15)]
      ),
    });
  }

  createQuestion() {
    return this.fb.group({
      question: ['', Validators.required],
      options: this.fb.array([this.createOption(true), this.createOption()], {
        validators: [checkBoxValidators, maxLengthArrayValidator(6)],
      }),
    });
  }

  createOption(isFirst: boolean = false): FormGroup {
    return this.fb.group({
      value: ['', Validators.required],
      isCorrect: isFirst,
      imgSrc: '',
    });
  }

  get questions() {
    return this.quizForm.get('questions') as FormArray<FormGroup>;
  }

  addQuestion() {
    if (this.questions.hasError('maxLengthArray')) return;
    this.questions.push(this.createQuestion());
  }

  getOptionsByIdx(questionIdx: number) {
    return this.questions
      .at(questionIdx)
      .get('options') as FormArray<FormGroup>;
  }

  addOption(questionIdx: number) {
    const currentOptions = this.getOptionsByIdx(questionIdx);
    if (currentOptions.hasError('maxLengthArray')) return;
    currentOptions.push(this.createOption());
  }

  removeQuestion(questionIdx: number) {
    this.questions.removeAt(questionIdx);
  }

  removeOption(questionIdx: number, optIdx: number) {
    this.getOptionsByIdx(questionIdx).removeAt(optIdx);
  }

  isSubmitted = false;
  saveTrivia() {
    if (this.quizForm.invalid) {
      this.quizForm.markAllAsTouched();
      return;
    }

    const jsonForm = JSON.stringify(this.quizForm.get('questions')?.value);
    const triviaName = this.quizForm.get('triviaName')?.value;

    localStorage.setItem(triviaName, jsonForm);
    this.isSubmitted = true;
  }

  resetForm() {
    this.quizForm.reset();
    this.isSubmitted = false;
  }
}
