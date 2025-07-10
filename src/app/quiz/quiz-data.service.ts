import { Injectable } from '@angular/core';
import { CategoryKey } from '../categories.service';
import { quizJson } from './quizJson';

@Injectable({
  providedIn: 'root',
})
export class QuizDataService {
  getQuizByType(type: CategoryKey) {
    return quizJson[type];
  }
}
