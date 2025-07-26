import { Injectable } from '@angular/core';
import { CategoryKey } from '../../../shared/services/categories-service/categoriesObj';
import { Questions, quizJson } from './quizJson';
import { randomizeQuiz } from './randomizeQuiz';

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
      : randomizeQuiz(quizJson[typeName as Exclude<CategoryKey, 'custom'>]);
  }
}
