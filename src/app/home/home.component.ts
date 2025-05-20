import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgClass, NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly categoryColors: Record<CategoryKey, string> = {
    entertainment: '#ffb61e',
    custom: '#660d66',
    food: '#236f23',
    history: '#451800',
    general: '#e480ed',
    sports: 'black',
    geo: '#094d99',
  };



  categoryBgColor = '';

  // constructor(private router: Router) {}

  categoryTransition(category: CategoryKey) {
    this.categoryBgColor = this.categoryColors[category];
  }
}

export type CategoryKey =
  | 'entertainment'
  | 'custom'
  | 'food'
  | 'history'
  | 'general'
  | 'sports'
  | 'geo';
