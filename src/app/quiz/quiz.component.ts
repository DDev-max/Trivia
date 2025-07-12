import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { CategoryKey } from '../categories.service';
import { QuizDataService } from './quiz-data.service';
import { Questions } from '../quiz/quizJson';
import { DialogComponent } from '../dialog/dialog.component';
import { TriviaOptionComponent } from '../trivia-option/trivia-option.component';
@Component({
  selector: 'app-quiz',
  imports: [DialogComponent, RouterLink, TriviaOptionComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  readonly categories: CategoryKey[] = [
    'custom',
    'entertainment',
    'food',
    'general',
    'history',
    'sports',
    'geography',
  ];

  quizInfo: readonly Questions[] = [];

  constructor(
    private ar: ActivatedRoute,
    router: Router,
    quizService: QuizDataService
  ) {
    this.ar.paramMap.subscribe((params: ParamMap) => {
      const quizType = params.get('quizType') as Exclude<CategoryKey, 'custom'>;
      const customQuizName = params.get('customQuizName') || '';

      if (
        !this.categories.includes(quizType) &&
        !Object.keys(localStorage).includes(customQuizName)
      ) {
        router.navigate(['/']);
      }

      this.quizInfo = quizService.getQuizByType(quizType || customQuizName);
    });
  }

  isShowingAnswers = false;
  selectedOptionIdx = -1;
  currentQuestionIdx = 0;
  correctAnswerCount = 0;
  isTriviaFinished = false;

  isChangingQuestion = false;

  validateAnswer(optionIdx: number, isCorrect: boolean, e: Event) {
    e.stopPropagation();

    if (this.isChangingQuestion) return;

    this.isShowingAnswers = true;
    this.selectedOptionIdx = optionIdx;

    if (isCorrect) this.correctAnswerCount++;

    if (this.currentQuestionIdx === this.quizInfo.length - 1) {
      this.isTriviaFinished = true;
    }
  }

  nextQuestion() {
    if (!this.isShowingAnswers) return;

    this.isChangingQuestion = true;
    this.currentQuestionIdx++;
    this.isShowingAnswers = false;
    this.selectedOptionIdx = -1;

    setTimeout(() => {
      this.isChangingQuestion = false;
    }, 300);
  }

  resetTrivia() {
    this.isTriviaFinished = false;
    this.currentQuestionIdx = 0;

    this.isShowingAnswers = false;
    this.selectedOptionIdx = -1;
    this.correctAnswerCount = 0;
  }

  get resultMessage() {
    const total = this.quizInfo.length;

    if (this.correctAnswerCount <= 3) {
      return `You answered ${this.correctAnswerCount} out of ${total} questions correctly. Not bad! Keep practicing and you'll get even better.`;
    } else if (this.correctAnswerCount <= 5) {
      return `Well done! You got ${this.correctAnswerCount} out of ${total} questions right. You really know your stuff!`;
    } else {
      return `Amazing! You answered ${this.correctAnswerCount} out of ${total} questions correctly. You're a true trivia master!`;
    }
  }
}
