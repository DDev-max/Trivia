import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { CustomQuizComponent } from './custom-quiz/custom-quiz.component';
import { CustomMenuComponent } from './custom-menu/custom-menu.component';

export const routes: Routes = [
  {
    path: 'custom',
    component: CustomMenuComponent,
  },
  {
    path: 'custom/create',
    component: CustomQuizComponent,
  },
  {
    path: 'custom/play/:customQuizName',
    component: QuizComponent
  },
  {
    path: ':quizType',
    component: QuizComponent,
  },
];
