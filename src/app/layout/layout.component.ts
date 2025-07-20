import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  CategoriesInfo,
  CategoriesService,
  CategoryKey,
} from '../categories.service';

@Component({
  selector: 'app-layout',
  exportAs: 'layout', //To allow access to it from LandingPageComponent (child).
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
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
    const pathName = this.router.url
      .split('/')
      .filter(Boolean)[0] as CategoryKey;

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
  }

  goToLandingPage(e: Event) {
    if (e.target === e.currentTarget && this.categoryBgColor) {
      this.router.navigate(['/']);
    }
  }
}
