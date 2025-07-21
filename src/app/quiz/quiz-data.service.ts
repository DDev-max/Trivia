import { Injectable } from '@angular/core';
import { CategoryKey } from '../categories.service';
import { Questions, quizJson } from './quizJson';

@Injectable({
  providedIn: 'root',
})
export class QuizDataService {
  getQuizByType(typeName: Exclude<CategoryKey, 'custom'> | string) {
    const triviaCreated: Questions[] | null = JSON.parse(
      localStorage.getItem(typeName) || '{}'
    );

    return triviaCreated?.length
      ? triviaCreated
      : quizJson[typeName as Exclude<CategoryKey, 'custom'>];
  }
}
