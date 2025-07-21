import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ColorsService } from './colors.service';
import { CategoriesService, CategoryKey } from './categories.service';
import { categoriesNames } from './categoriesObj';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(
    public colors: ColorsService,
    private categories: CategoriesService,
    private router: Router
  ) {}

  categoryTxtColor = '';

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (!(e instanceof NavigationEnd)) return;

      const pathName = e.urlAfterRedirects
        .split('/')
        .filter(Boolean)[0] as CategoryKey;

      categoriesNames.includes(pathName)
        ? this.colors.setlayout(this.colors.categoryColors[pathName])
        : this.colors.setlayout('');

      this.categoryTxtColor =
        this.categories.getCategoryByName(pathName)?.textColor || '';
    });
  }

  goToLandingPage(e: Event) {
    if (e.target === e.currentTarget && this.colors.layout()) {
      this.router.navigate(['/']);
    }
  }
}
