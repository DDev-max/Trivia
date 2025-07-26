import { Component, EventEmitter, input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trivia-option',
  imports: [RouterLink],
  templateUrl: './trivia-option.component.html',
  styleUrl: './trivia-option.component.css',
})
export class TriviaOptionComponent {
  value = input.required();
  valueCssClass = input('');
  @Output() clickRemoveBtn = new EventEmitter<void>();
  bgImgCss = input({ class: {}, imgSrc: '' });

  link = input<string | string[]>('');

  @Output() inputClick = new EventEmitter<Event>();
  static idCounter = 0;
  inputId: string;

  constructor() {
    TriviaOptionComponent.idCounter++;
    this.inputId = `input${TriviaOptionComponent.idCounter}`;
  }
}
