import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MenuComponent } from './features/create-quiz/menu/menu.component';
import { CreateQuizComponent } from './features/create-quiz/create-quiz.component';
import { QuizComponent } from './features/quiz/quiz.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'custom',
    component: MenuComponent,
  },
  {
    path: 'custom/create',
    component: CreateQuizComponent,
  },
  {
    path: 'custom/play/:customQuizName',
    component: QuizComponent,
  },
  {
    path: ':quizType',
    component: QuizComponent,
  },
];
