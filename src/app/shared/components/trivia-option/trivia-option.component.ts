import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trivia-option',
  imports: [RouterLink],
  templateUrl: './trivia-option.component.html',
  styleUrl: './trivia-option.component.css',
})
export class TriviaOptionComponent {
  @Input({ required: true }) value = '';
  @Input() valueCssClass = ''


  @Output() clickRemoveBtn = new EventEmitter<void>();
  @Input() bgImgCss? = { class: {}, imgSrc: '' };

  @Input() link?: string | string[] = '';

  @Output() inputClick = new EventEmitter<Event>();
  static idCounter = 0;
  inputId: string;

  constructor() {
    TriviaOptionComponent.idCounter++;
    this.inputId = `input${TriviaOptionComponent.idCounter}`;
  }
}
