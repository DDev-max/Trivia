import { Injectable } from '@angular/core';
import { categoriesObj } from './categoriesObj';

export type CategoryKey =
  | 'entertainment'
  | 'custom'
  | 'food'
  | 'history'
  | 'general'
  | 'sports'
  | 'geography';

export interface CategoriesInfo {
  name: CategoryKey;
  iconSource: string;
  anchorClassName: string;
  textColor: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categories = categoriesObj;

  getAllCategories() {
    return this.categories;
  }

  getCategoryByName(categoryName: string) {
    return this.categories.find((el) => el.name == categoryName);
  }
}
