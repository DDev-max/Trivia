import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { CustomQuizComponent } from './custom-quiz/custom-quiz.component';
import { CustomMenuComponent } from './custom-menu/custom-menu.component';
import { LayoutComponent } from './layout/layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'custom',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CustomMenuComponent,
      },
      {
        path: 'create',
        component: CustomQuizComponent,
      },
      {
        path: 'play/:customQuizName',
        component: QuizComponent,
      },
    ],
  },
  {
    path: ':quizType',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: QuizComponent,
      },
    ],
  },
];
