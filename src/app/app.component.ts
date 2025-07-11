import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import {
  CategoriesInfo,
  CategoriesService,
  CategoryKey,
} from './categories.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly categoryColors: Record<CategoryKey, string> = {
    custom: '#660d66',
    entertainment: '#ffb61e',
    food: '#236f23',
    general: '#e480ed',
    geography: '#094d99',
    history: '#451800',
    sports: 'black',
  };

  categories: readonly CategoriesInfo[];
  categoryBgColor = '';

  constructor(private router: Router, private catgrySrvice: CategoriesService) {
    this.categories = this.catgrySrvice.getAllCategories();
  }

  categoryTxtColor = '';

  ngOnInit() {
    this.router.events.subscribe((e) => {
      if (!(e instanceof NavigationEnd)) return;

      const pathName = e.url.split('/').filter(Boolean)[0] as CategoryKey;
      const categoriesNames: readonly CategoryKey[] = [
        'custom',
        'entertainment',
        'food',
        'general',
        'geography',
        'history',
        'sports',
      ];

      this.categoryBgColor = categoriesNames.includes(pathName)
        ? this.categoryColors[pathName]
        : '';

      this.categoryTxtColor =
        this.catgrySrvice.getCategoryByName(pathName)?.textColor || '';
    });
  }

  categoryTransition(category: CategoryKey) {
    this.categoryBgColor
      ? (this.categoryBgColor = '')
      : (this.categoryBgColor = this.categoryColors[category]);
  }
}
