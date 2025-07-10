import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { CategoryKey } from '../categories.service';
import { QuizDataService } from './quiz-data.service';
import { Questions } from '../quiz/quizJson';
@Component({
  selector: 'app-quiz',
  imports: [RouterLink],
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
      const quizType = params.get('quizType') as CategoryKey;

      if (!this.categories.includes(quizType)) {
        router.navigate(['/']);
      }

      this.quizInfo = quizService.getQuizByType(quizType);
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
}
