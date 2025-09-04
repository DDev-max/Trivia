import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  viewChild,
} from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { QuizDataService } from './quizService/quiz-data.service';
import { Questions } from './quizService/quizJson';
import { TriviaOptionComponent } from '../../shared/components/trivia-option/trivia-option.component';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import {
  categoriesNames,
  CategoryKey,
} from '../../shared/services/categories-service/categoriesObj';
import { WaveComponent } from './wave/wave.component';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-quiz',
  imports: [
    DialogComponent,
    RouterLink,
    TriviaOptionComponent,
    WaveComponent,
    TitleCasePipe,
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizComponent implements OnInit, OnDestroy {
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
        !categoriesNames.includes(quizType) &&
        !Object.keys(localStorage).includes(customQuizName)
      ) {
        router.navigate(['/']);
      }

      this.quizInfo = quizService.getQuizByType(quizType || customQuizName);
    });
  }

  isTimeUp = false;
  private seconds = 0;
  private timerID: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.timerID = setInterval(() => {
      this.seconds++;
      if (this.seconds >= 6) {
        this.isTimeUp = true;
        this.stopTimer();
      }
    }, 1 * 1000);
  }

  stopTimer() {
    if (!this.timerID) return;
    clearInterval(this.timerID);
    this.seconds = 0;
  }

  isShowingAnswers = false;
  selectedOptionIdx = -1;
  currentQuestionIdx = 0;
  correctAnswerCount = 0;
  isTriviaFinished = false;

  isChangingQuestion = false;

  waveComponentRef = viewChild.required(WaveComponent);

  validateAnswer(optionIdx: number, isCorrect: boolean, e: Event) {
    e.stopPropagation();

    if (this.isChangingQuestion) return;

    this.isShowingAnswers = true;
    this.selectedOptionIdx = optionIdx;

    if (isCorrect) this.correctAnswerCount++;

    if (this.currentQuestionIdx === this.quizInfo.length - 1) {
      this.isTriviaFinished = true;
    }

    this.waveComponentRef().stopWaveGrowth();
    this.stopTimer();
  }

  private questionTimeOutID: ReturnType<typeof setTimeout> | null = null;
  nextQuestion() {
    if (!this.isShowingAnswers) return;

    this.isChangingQuestion = true;
    this.currentQuestionIdx++;
    this.isShowingAnswers = false;
    this.selectedOptionIdx = -1;

    this.waveComponentRef().restartAnimation();
    this.startTimer();

    this.questionTimeOutID = setTimeout(() => {
      this.isChangingQuestion = false;
    }, 300);
  }

  resetTrivia() {
    this.isTimeUp = false;
    this.isTriviaFinished = false;
    this.waveComponentRef().restartAnimation();
    this.startTimer();

    this.currentQuestionIdx = 0;

    this.isShowingAnswers = false;
    this.selectedOptionIdx = -1;
    this.correctAnswerCount = 0;
  }

  ngOnDestroy(): void {
    if (this.waveComponentRef) {
      this.waveComponentRef().stopWaveAnimation();
    }
    if (this.timerID) {
      clearInterval(this.timerID);
    }
    if (this.questionTimeOutID) {
      clearTimeout(this.questionTimeOutID);
    }
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
