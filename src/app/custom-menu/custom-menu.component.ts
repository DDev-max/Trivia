import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TriviaOptionComponent } from '../trivia-option/trivia-option.component';

@Component({
  selector: 'app-custom-menu',
  imports: [TriviaOptionComponent],
  templateUrl: './custom-menu.component.html',
  styleUrl: './custom-menu.component.css',
})
export class CustomMenuComponent {
  triviaCreated = Object.keys(localStorage);

  removeTrivia(triviaName: string) {
    localStorage.removeItem(triviaName);

    this.triviaCreated = Object.keys(localStorage);
  }
}
