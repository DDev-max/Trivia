import { Injectable } from '@angular/core';
import { categoriesObj } from './categoriesObj';

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
