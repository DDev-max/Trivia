import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ColorsService } from './shared/services/colors.service';
import { CategoriesService } from './shared/services/categories-service/categories.service';
import {
  categoriesNames,
  CategoryKey,
} from './shared/services/categories-service/categoriesObj';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
