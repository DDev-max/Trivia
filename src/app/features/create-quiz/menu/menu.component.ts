import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TriviaOptionComponent } from '../../../shared/components/trivia-option/trivia-option.component';

@Component({
  selector: 'app-menu',
  imports: [TriviaOptionComponent],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  triviaCreated = Object.keys(localStorage);

  removeTrivia(triviaName: string) {
    localStorage.removeItem(triviaName);

    this.triviaCreated = Object.keys(localStorage);
  }
}
