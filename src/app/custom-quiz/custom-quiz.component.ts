import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { checkBoxValidators } from './validators/check-box-validators';
import { localStorageValidator } from './validators/local-storage-validator';

@Component({
  selector: 'app-custom-quiz',
  imports: [ReactiveFormsModule],
  templateUrl: './custom-quiz.component.html',
  styleUrl: './custom-quiz.component.css',
})
export class CustomQuizComponent {
  quizForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.quizForm = this.fb.group({
      triviaName: [
        'My trivia game',
        [Validators.required, localStorageValidator],
      ],
      questions: this.fb.array([this.createQuestion()]),
    });
  }

  createQuestion() {
    return this.fb.group({
      question: ['', Validators.required],
      options: this.fb.array([this.createOption(true), this.createOption()], {
        validators: checkBoxValidators,
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
    this.questions.push(this.createQuestion());
  }

  getOptionsByIdx(questionIdx: number) {
    return this.questions
      .at(questionIdx)
      .get('options') as FormArray<FormGroup>;
  }

  addOption(questionIdx: number) {
    this.getOptionsByIdx(questionIdx).push(this.createOption());
  }

  removeQuestion(questionIdx: number) {
    this.questions.removeAt(questionIdx);
  }

  removeOption(questionIdx: number, optIdx: number) {
    this.getOptionsByIdx(questionIdx).removeAt(optIdx);
  }

  saveTrivia() {
    if (this.quizForm.invalid) {
      this.quizForm.markAllAsTouched();
      return;
    }

    const jsonForm = JSON.stringify(this.quizForm.value);
    const triviaName = this.quizForm.get('triviaName')?.value;

    localStorage.setItem(triviaName, jsonForm);
  }
}
