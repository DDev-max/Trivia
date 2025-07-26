import { Injectable, signal } from '@angular/core';
import { CategoryKey } from './categories-service/categoriesObj';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  readonly layout = signal('');

  readonly categoryColors: Record<CategoryKey, string> = {
    custom: '#660d66',
    entertainment: '#ffb61e',
    food: '#236f23',
    general: '#e480ed',
    geography: '#094d99',
    history: '#451800',
    sports: 'black',
  };

  setlayout(newColor: string) {
    this.layout.set(newColor);
  }
}
